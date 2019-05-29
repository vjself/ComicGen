import React, { Component } from "react";
// import {connect} from "react-redux";
import Dropzone from "react-dropzone";
import axios from "axios";
import "./Cloudinary.css"
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/de3supjrm/image/upload/";

export default class Cloudinary extends Component{
  constructor(props){
    super(props)
    this.state = {
        uploadedFileCloudinaryUrl: ""
    }
}

handleImageUpload = (file) => {

// Initiates signature request from the server when someone has uploaded a file 
axios.get('/api/upload').then(response => {

    let formData = new FormData();
    formData.append("signature", response.data.signature)
    formData.append("api_key", "276529187845597");
    formData.append("timestamp", response.data.timestamp)
    formData.append("file", file[0])

    // You can either save that url in your database or display it directly on the page 
    axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
        this.setState({
            uploadedFileCloudinaryUrl: response.data.secure_url
            })
        }).catch( err => {
        console.log(err);
        })

    })
    
}

render(){
    return (
        <div>
            <Dropzone  
                    onDrop={this.onPictureDrop} accept="image /*"multiple={false}>
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



  //   constructor(props){
  //       super(props);
  //       this.state = {
  //           // comic: "",
  //           // comicList: [],
  //           uploadedFileCloudinaryUrl: "",
  //           // cloudinaryURL:[],

  //       };
  //       this.upload = this.upload.bind(this)
  //   }
  //   // onPictureDrop = (file) => {
  //   //     console.log("onPictureDrop FILES", file)
  //   //     this.setState({
  //   //         uploadedFile: file[0]
  //   //     });

  // // }
  
  // handleImageUpload = (file) => {
  //   Axios.get('/api/upload').then(response => {
      
  //     let formData = new FormData();
  //     this.handleImageUpload(file[0]);
  //       // formData.append("signature", response.data.signature)
  //       formData["signature"] = response.data.signature;
  //       // formData.append("api_key", "517963328497325");
  //       formData["api_key" ] = "276529187845597"
  //       // formData.append("timestamp", response.data.timestamp)
  //       formData["timestamp"] = response.data.timestamp
  //       // formData.append("file", file);
  //       formData["file"] = file;
  //       // formData["signed"] = true;
  //       // formData["upload_preset"] = 'vmelciuw'
  //       console.log(formData, "formData")
 
  //       console.log(formData.entries())
  //       Axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
  //             this.setState({
  //               uploadedFileCloudinaryUrl: [...this.state.cloudinaryUrl, response.data.secure_url]
  //               })
  //           })
  //           .catch( err => {
  //           console.log(err);
  //           })
  //       })
  //       .catch(err => console.log(err))
  //   }


  //   upload() {
  //       const storePayload = {
  //         comic: this.state.cloudinaryUrl,
  //         id: this.props.user.id
  //       };console.log(this.props.user.id, "user id")
  //       console.log(this.state.cloudinaryUrl, "CloudinaryUrl")
  //       Axios.post("/api/upload", storePayload).then(res => {
  //         alert("Post Added") 
  //         this.getOne();
  //       })
  //     }

  //     render(){
          
  //         const { users } = this.props;
  //         console.log(users, "users")

  //         return(
  //             <div>
  //                  <Dropzone  
  //                   onDrop={this.onPictureDrop} accept="image /*"multiple={false}>
  //                   {({getRootProps, getInputProps}) => (
  //                     <section>
  //                       <div {...getRootProps()}>
  //                         <input {...getInputProps()} />
  //                         <button className="dropzone">Upload Comic Here </button>
  //                       </div>
  //                     </section>
  //                   )}
  //                 </Dropzone>
  //             </div>
  //         )
  //       }

// }