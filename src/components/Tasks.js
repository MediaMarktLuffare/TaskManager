import { Component } from "react";
import Task from "./Task";

class Tasks extends Component{
    render(){
        return(
            <div>
                {this.props.tasks.map(name => (
                    <Task key={name.id} task={name} onDelete={this.props.onDelete} onToggle={this.props.onToggle}/>
                    
                ))}
            </div>
        );
    }
}
export default Tasks;