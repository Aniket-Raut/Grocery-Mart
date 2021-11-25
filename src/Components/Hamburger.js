import { Component } from "react";
import './Hamburger.css';

export default class Hamburger extends Component{
    render(){
        return(
            <div className="HamBurger">
                <div style={{backgroundColor:this.props.color}} className="bar"></div>
                <div style={{backgroundColor:this.props.color}} className="bar"></div>
                <div style={{backgroundColor:this.props.color}} className="bar"></div>
            </div>
        )
    }
}