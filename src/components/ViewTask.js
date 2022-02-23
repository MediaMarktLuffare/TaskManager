import { Component } from 'react';

class ViewTask extends Component{
    constructor(props){
        super(props);
        this.state={task: {}};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.safeFetchJson(`http://localhost:5000/tasks/${this.props.params.id}`)
        .then(data => this.setState({task: data}))
    }

    safeFetchJson(url) {
        return fetch(url)
          .then(response => {
            if (!response.ok) {
                this.props.navigate('/')
                throw new Error('${url} returned status ${response.status}');
            }
            return response.json();
          });
    }

    handleClick(){
        this.props.navigate(-1);
    }

    render(){
        return (
            <div>
                <p>URL path: {this.props.location.pathname}</p>
                <h3>{this.state.task.text}</h3>
                <h4>{this.state.task.day}</h4>
                <button className='btn' onClick={this.handleClick}>Go Back</button>
            </div>
        );
    }
}
export default ViewTask;