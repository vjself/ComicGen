import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom"
import './Landing.css'
const space = require('./space.jpg')

export default class Landing extends Component{
    render(){
        return(
            <div class="page">
            {/* <img src={space} alt="space-background"/> */}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class = "frame">
                    <br/>
                    <br/>
                    <br/>
                    <div class="title"> Welcome to xXxCosmicComicConstructor2099xXx!! </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="flex-container1">
                        <br/>
                        <div class='description-text'> 
                        Hello and welcome to xXxCosmicComicConstructor2099xXx!
                        <br/>
                        <br/>
                        We out here building comics and all that jazz and you should be too! On the homepage you will find the tools to create your comic and to also download your creation.
                        </div>
                        <div class='example-picture'> Picture of generator </div>
                        <br/>
                    </div>

                </div>

            </div>
        )
    }
}