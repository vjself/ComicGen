import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import "./Community.css"

export default class Community extends Component{
    constructor(props) {
        super(props);

        this.state ={ 
            comics: [],
        
        };
        this.getAllComics = this.getAllComics.bind(this);
    }

    componentDidMount() {
        this.getAllComics();
    }

    getAllComics() {
        axios.get("/api/community").then(res => {
            console.log(res.data)
            this.setState({
                comics: res.data,
            });
        });
    }

    render(){
        const { comics} = this.state;

        const comicsDisplay = comics.map(comics => {
            console.log(comics,"--->Comics")
            // let newComic = comic.comic.split('')
            // let copy = newComic.slice()
            // newComic.pop();
            // newComic.shift()
            // let joinDatMoFo = newComic.join('')

            return (
                <div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div><NavLink to ={`/${comics.user_id}`}> {comics.username}</NavLink></div>
                <div>  {comics.title}</div>
                <img src = {comics.comic} />
                </div>
            )
        });
        return <div className="videos">{comicsDisplay}Anyhting Popping up</div>
    }
}