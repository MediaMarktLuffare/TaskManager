import {Component} from "react";
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

class Task extends Component{
    render(){
        return(
            <div className={`task ${this.props.task.reminder ? 'reminder' : ''}`} onDoubleClick={() => this.props.onToggle(this.props.task.id)}>
                <h3>
                    {this.props.task.text} 
                    <FaTimes 
                        style={{color: 'red', cursor: 'pointer'}} 
                        onClick={() => this.props.onDelete(this.props.task.id)} 
                    /> 
                </h3>
                <p>{this.props.task.day}</p>
            </div>
        );
    }
}
export default Task;