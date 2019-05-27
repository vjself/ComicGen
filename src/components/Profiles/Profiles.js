import React, {Component} from 'react';
import './Profiles.css';

export default class Profiles extends Component{
    constructor(){
        super();

        this.state = {

        }
    }


    render(){
        return(
            
            // This is for everything on the dashboard page
            <div class="Profile">
                <br/>
                <br/>
                <br/>
                <h1>Profile</h1>

                {/* This will the about the person */}
                <div class="About-User">
                    <br/>
                    <br/>
                    <h2> User Information:</h2>
                    {/* Pull this information from the db */}

                </div>

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
                   


                    <br/>
                </div>


            </div>
        )
    }

}