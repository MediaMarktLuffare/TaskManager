import { Component } from "react";
import Button from "./Button";
import { useLocation } from 'react-router-dom'

class Header extends Component{
    render(){
        return (
            <header className='header'>
                <h1>{this.props.title}</h1>
                {this.props.location.pathname === '/' &&
                (<Button 
                    color={this.props.showAdd ? 'red' : 'green'} 
                    text={this.props.showAdd ? 'Close' : 'Add'} 
                    handleClick={this.props.onAdd}
                />
                )}
            </header>
        );
    }
}
export default Header;