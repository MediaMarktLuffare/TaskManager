import { Component } from "react";
import { Link } from 'react-router-dom'

class Footer extends Component{
    render(){
        return(
            <footer>
                <p>Copyright &copy; 2021</p>
                <Link to='/about'>About</Link>
            </footer> 
        );
    }
}
export default Footer;