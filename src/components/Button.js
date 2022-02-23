import { Component } from "react";

class Button extends Component{
    render(){
        return(
            <button onClick={this.props.handleClick} style={{backgroundColor: this.props.color}}
            className="btn"
            >
                {this.props.text}
            </button>
        );
    }
}
export default Button;