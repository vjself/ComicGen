import React, { Component } from "react";
import axios from "axios";


export default class Artist_Comics extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            comics: [],
            edit: false
        };
        this.getOne = this.getOne.bind(this);
    }
        componentDidMount() {
        this.getOne();
    }
    getOne(){
        axios.get("/api/comic").then(res => {
            this.setState({
                comic: res.data
            });
        });
    }

    render() {
        const {comics} =this.state;

        return (
            <div className="comicView" key={comics.comic_id}>
            <img src={comics.comic} alt=""/> Comics 
            </div>
            )
    };
    }
    // return <div>{comics}</div>