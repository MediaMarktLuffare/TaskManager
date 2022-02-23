import { Component } from 'react';
import {Route, Routes} from "react-router-dom"
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import HeaderWrapper from './components/HeaderWrapper';
import ViewTaskWrapper from './components/ViewTaskWrapper';


class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {showAddTask : false, tasks : []}

    this.deleteTask = this.deleteTask.bind(this);
    this.toogleReminder = this.toogleReminder.bind(this);
    this.addTask = this.addTask.bind(this);
    this.setShowAddTask = this.setShowAddTask.bind(this);
  }

  deleteTask(id){
    fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
      headers: {"Content-Type": "application/json"},
    })

    this.setState({tasks: this.state.tasks.filter(task => task.id !== id)})
  }

  //fick inte det o funka med vad vi har lärt oss
  async toogleReminder(id){
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const taskToToggle = await response.json();
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })
    const data = await res.json()
    this.setState({tasks: this.state.tasks.map(task => task.id === id ? {...task, reminder : data.reminder} : task)}) //byt ut data => !task.reminder för utan server
  }

  addTask(task){
    //Utan server
    //const id = Math.max(this.state.tasks) + 1;
    //const newTask = {id, ...task}
    //this.setState(prevState => {
    //  return {tasks : [...prevState.tasks, newTask]}  
    //})
    //Med server
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    .then(response => response.json)
    .then(() => this.setState({tasks: [...this.state.tasks, task]}))
  }

  setShowAddTask(){
    this.setState({showAddTask: !this.state.showAddTask})
  }

  componentDidMount(){
    this.safeFetchJson('http://localhost:5000/tasks')
    .then(data => this.setState({tasks: data}))
  }

  safeFetchJson(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('${url} returned status ${response.status}');
        }
        return response.json();
      });
  }

  render(){
    return (
      <div className="container py-4">
        <HeaderWrapper title="Task Tracker"  onAdd={this.setShowAddTask} showAdd={this.state.showAddTask} />
        {this.renderRouter()}
        <Footer />
      </div>
      );
  }

  renderRouter(){
    return(
      <Routes>
        <Route 
          index
          path='/'
          element={
            <>
              {this.state.showAddTask && <AddTask onAdd={this.addTask} />}
              {this.state.tasks.length > 0 ? <Tasks tasks={this.state.tasks} onDelete={this.deleteTask} onToggle={this.toogleReminder} /> : <h3>No Tasks To Show</h3>}
            </>
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/tasks/:id' element={<ViewTaskWrapper />} />
        <Route path='*' element={<h3>There is nothing here</h3>} />
      </Routes>
    );
  }
}
export default App;