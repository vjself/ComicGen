import React, { Component } from "react";
import {connect} from "react-redux";
import Dropzone from "react-dropzone";
import Axios from "axios";
import "./Cloudinary.css"
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/de3supjrm/image/upload";

export default class Cloudinary extends Component{
    constructor(props){
        super(props);
        this.state = {
            comic: "",
            comicList: [],
            uploadedFile: '',
            cloudinaryURL:[],

        };
        this.upload = this.upload.bind(this)
    }
    onPictureDrop = (file) => {
        console.log("onPictureDrop FILES", file)
        this.setState({
            uploadedFile: file[0]
        });

        this.handlePictureUpload(file[0]);
    }

    handlePictureUpload = (file) => {
      Axios.get('/api/upload').then(response => {
        
        let formData = new FormData();
        // formData.append("signature", response.data.signature)
        formData["signature"] = response.data.signature;
        // formData.append("api_key", "517963328497325");
        formData["api_key" ] = "517963328497325"
        // formData.append("timestamp", response.data.timestamp)
        formData["timestamp"] = response.data.timestamp
        // formData.append("file", file);
        formData["file"] = file;
        // formData["signed"] = true;
        // formData["upload_preset"] = 'vmelciuw'
        console.log(formData, "formData")
 
        console.log(formData.entries())
        Axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
              this.setState({
                cloudinaryUrl: [...this.state.cloudinaryUrl, response.data.secure_url]
                })
            })
            // .catch( err => {
            // console.log(err);
            // })
    
        }).catch(err => console.log(err))
    }


    upload() {
        const storePayload = {
          comic: this.state.cloudinaryUrl,
          id: this.props.user.id
        };console.log(this.state.cloudinaryUrl, "CloudinaryUrl")
        Axios.post("/api/upload", storePayload).then(res => {
          alert("Post Added") 
          this.getOne();
        })
      }

      render(){
          
          const { users } = this.props;
          console.log(users, "users")

          return(
              <div>
                   <Dropzone  
                    onDrop={this.onPictureDrop} accept="image/*"multiple={false}>
                    {({getRootProps, getInputProps}) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <button className="dropzone">Upload Comic Here </button>
                        </div>
                      </section>
                    )}
                  </Dropzone>
              </div>
          )
        }

}