import { Component } from "react";
import Task from "./Task";

class Tasks extends Component{
    render(){
        return(
            <div>
                {this.props.tasks.map((name,index) => (
                    <Task key={index} task={name} onDelete={this.props.onDelete} onToggle={this.props.onToggle}/>
                ))}
            </div>
        );
    }
}
export default Tasks;