import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Artist_Comics extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            comic: [],
            edit: false
        };
        this.getOne = this.getOne.bind(this);
        this.deleteComic = this.deleteComic.bind(this)
    }
        componentDidMount() {
        this.getOne();
        this.updateVideo();
    }
    getOne(){
        axios.get("/api/comic").then(res => {
            this.setState({
                comic: res.data
            });
        });
    }
    }
