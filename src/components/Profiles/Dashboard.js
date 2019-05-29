import React, {Component} from 'react';
import './Dashboard.css';
import axios from 'axios';


//import the user's comic creations


export default class Dashboard extends Component{
    constructor(){
        super();

        this.state = {

        }
    } 


    render(){
        return(
            // This will be to conditionally render the user profile or other profiles
            // <div>
            //     {
            //         ?
            //         :
            //     }
            // </div>

            // This is for everything on the dashboard page
            <div class="Dashboard">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>Dashboard</h1>

                {/* This is for all of the user's comics */}
                <div class="Comic-Creations">
                    <br/>
                    <br/>
                    <br/>
                    <h2>Comic Creations</h2>
                    <br/>
                </div>

                {/* This is for the comic boxes */}
                <div class="Comic-Boxes">        
                    {/* Individual boxes */}
                    <div class="flex-container"> 
                    Box 1
                    </div>
                    <div class="flex-container"> 
                    Box 2
                    </div>

                </div>
      
            </div>
        )
    }

}