import React, { Component } from "react";
import {connect} from "react-redux";
import Dropzone from "react-dropzone";
import Axios from "axios";
import "./Cloudinary.css"
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/de3supjrm/picture/upload";

export default class Cloudianry extends Component{
    constructor(props){
        super(props);
        this.state = {
            comicList: [],
            uploadedFile: '',
            cloudinaryURL:[],

        };
        this.upload = this.upload.bind(this)
    }
    onPictureDrop = (files) => {
        console.log("onPictureDrop FILES", files)
        this.setState({
            uploadedFile: files[0]
        });

        this.handlePictureUpload(files[0]);
    }

    handleVideoUpload = (file) => {
        Axios.get('/api/upload').then(response => {
            let formData = new FormData();
            console.log(formData, "formData")
            formData.append("signature", response.data.signature)
            // formData["signature"] = response.data.signature;
            formData.append("api_key", "276529187845597");
            // formData["api_key" ] = "276529187845597"
            formData.append("timestamp", response.data.timestamp)
            // formData["timestamp"] = response.data.timestamp
            formData.append("file", file);
            formData["file"] = file
            Axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
              this.setState({
                cloudinaryUrl: [...this.state.cloudinaryUrl, response.data.secure_url]
                })
            }).catch( err => {
            console.log(err);
            })
    
        })
    }

    upload() {
        const storePayload = {
          picture: this.state.cloudinaryUrl,
          id: this.props.user.id
        };console.log(this.state.cloudinaryUrl, "CloudinaryUrl")
        Axios.post("/api/content", storePayload).then(res => {
          alert("Post Added") 
          this.getOne();
        })
      }

      render(){
          const {comicList, picture } = this.state;
          const { users } = this.props;
          console.log(users)

          return(
              <div>
                   <Dropzone  
                    onDrop={this.onPictureDrop} accept="picture/*"multiple={false}>
                    {({getRootProps, getInputProps}) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <button className="dropzone">Drag or Click to Drop Files </button>
                        </div>
                      </section>
                    )}
                  </Dropzone>
              </div>
          )
        }

}