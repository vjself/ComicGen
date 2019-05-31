
import React, {Component} from 'react';
import './Dashboard.css';
import Cloudinary from "../Cloudinary/Cloudinary";
import bodyParser from "body-parser"
import axios from 'axios';
import Artist_Comics from '../Artist_Comics/Artist_Comics';


//import the user's comic creations


export default class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
           comic:"",
           cloudinaryUrl: [],
           uploaded: '',
           edit: false
        };
       this.getOne = this.getOne.bind(this);
    }
    componentDidMount(){
        this.getOne();
    }
    getOne(){
        axios.get("/api/dashComics").then(res => {
            this.setState({
                comics:res.data
            })
        })
    }
    upload (){
        const storePayload = {
            comic: this.state.cloudinaryUrl,
            id:this.props.users.id
        }; console.log(this.state.cloudinaryUrl, "CloudinaryUrl")
        axios.post("/api/comic", storePayload).then(res => {
            alert("Post Added")
            this.getOne();
        })
    }

    render(){
        const { comic } =this.state;
        return(

            // This is for everything on the dashboard page
            <div class="Dashboard">
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
                <Cloudinary />
                <button onClick={this.upload}>upload</button>
                </div>

                {/* This is for the comic boxes */}
                <div class="Comic-Boxes" >        
                    {/* Individual boxes */}
                    <div class="flex-container"> 
                   <Artist_Comics />
                    Box 1 
                    </div>
                    <div class="flex-container"> 
                    Box 2
                    </div>

                </div>
      
            </div>
        )
    }


