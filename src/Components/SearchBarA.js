import { Component } from 'react';
import './SearchBarA.css';

export default class SearchBarA extends Component{
    render(){
        return(
            <div className="SearchBarA">
                <input type="text" placeholder="Search items..."/>
                <button>
                <img src="https://img.icons8.com/ios-filled/25/000000/search--v1.png"/>
                </button>
            </div>
        )
    }
}