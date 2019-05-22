import React, {Component} from "react";
import axios from "axios";
import "./Community.css"

export default class Community extends Component{
    constructor(props) {
        super(props);

        this.state ={
            comic: [],
            token: ""
        };
        this.getAllComics = this.getAllComics.bind(this);
    }

    componentDidMount() {
        this.getAllComics();
    }

    getAllComics() {
        axios.get("/api/comics").then(res => {
            this.setState({
                comic: res.data
            });
        });
    }

    render(){
        const { comic, token } = this.state;

        const comicDisplay = comic.map(comic => {
            // let newComic = comic.comic.split('')
            // let copy = newComic.slice()
            // newComic.pop();
            // newComic.shift()
            // let joinDatMoFo = newComic.join('')

            return (
                <div className="outer">
                <div key={comic.username}></div>
                <div className="comics" key={comic.comics_id}></div>
                </div>
            )
        });
        return <div className="videos">{comicDisplay}</div>
    }
}