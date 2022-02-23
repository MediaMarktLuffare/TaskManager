import { Component } from "react";

class AddTask extends Component{
    constructor(props){
        super(props);
        this.state = {text: '', day: '', reminder: false};
        this.handleText = this.handleText.bind(this);
        this.handleDay = this.handleDay.bind(this);
        this.handleReminder = this.handleReminder.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleText(event){
        this.setState({text: event.target.value})
    }

    handleDay(event){
        this.setState({day: event.target.value})
    }

    handleReminder(event){
        this.setState({reminder : event.currentTarget.checked})
    }

    onSubmit(event){
        event.preventDefault();

        if(!this.state.text){
           alert('Please add a task')
           return;
        }
        //const id = Math.floor(Math.random()*10000) + 1; //json skapar ett unikt id
        this.props.onAdd({text: this.state.text, day: this.state.day, reminder: this.state.reminder}) 
        this.setState({text: '', day: '', reminder: false});
    }

    render(){
        return(
            <form className="add-from needs-validation" onSubmit={this.onSubmit} noValidate>
                <div className="form-control">
                    <label>Task</label>
                    <input type='text' placeholder="Add Task" value={this.state.text} onChange={this.handleText} />
                </div>
                <div className="form-control">
                    <label>Day & Time</label>
                    <input type='text' placeholder="Add Day & Time" value={this.state.day} onChange={this.handleDay}/>
                </div>
                <div className="form-control form-control-check">
                    <label>Set Reminder</label>
                    <input type='checkbox' checked={this.state.reminder} value={this.state.reminder} onChange={this.handleReminder}/>
                </div>
                <input className="btn btn-block" type='submit' value='Save Task' />
                <div className="invalid-feedback">Doesn't look good!</div>
            </form>
        );
    }
}
export default AddTask;