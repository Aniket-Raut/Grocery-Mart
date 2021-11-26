import { Component } from 'react';
import './NavBar.css';
import Hamburger from './Hamburger';
import SearchBarA from './SearchBarA';
import Logo from '../Logo1.png'


export default class NavBar extends Component{
    render(){
        return(
            <div className="Navbar">
                <div>
                    <img src={Logo} alt="" width="65px" />
                </div>
            <SearchBarA/>
            <nav>
                <ul>
                    <li>Cart(0)</li>
                    <li>Profile</li>
                    <li>About Us</li>
                </ul>
            </nav>
            {/* <Hamburger color="#d6d6d6"/> */}
            </div>
        )
    }
}