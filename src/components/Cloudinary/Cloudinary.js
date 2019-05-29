import React, { Component } from "react";
import axios from "axios";

export default class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: ""
    };
  }

  handleImageUpload = file => {
    //axios call to server to request hashed signature

    axios.get("/api/upload").then(response => {
      console.log(response.data.signature);

      //form data for signed uploads

      let formData = new FormData();
      formData.append("signature", response.data.signature);
      formData.append("api_key", "276529187845597");
      formData.append("timestamp", response.data.timestamp);
      formData.append("file", file[0]);

      //form data for unsigned uploads

      // let formData = new FormData();
      // formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      // formData.append("file", file[0]);

      // uncomment to see what the form looks like in console

      for (var pair of formData.entries()) {
        console.log(pair);
      }

      //axios call to cloudinary using the URL set at top of page
      axios
        .post(
          "https://api.cloudinary.com/v1_1/de3supjrm/image/upload",
          formData
        )
        .then(response => {
          console.log(response.data);

          // Setting state with the secure_url
          this.setState({
            uploadedFileCloudinaryUrl: response.data.secure_url
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  render() {
    return (
      <div className="upload-form">
        {this.state.uploadedFileCloudinaryUrl ? (
          <div className="image-container">
            <img
              src={this.state.uploadedFileCloudinaryUrl}
              alt="cloudinary example"
            />
            <input
              type="file"
              onChange={e => this.handleImageUpload(e.target.files)}
            />
          </div>
        ) : (
          <div>
            {/* if you prefer to use an html input tag */}
            <input
              type="file"
              onChange={e => this.handleImageUpload(e.target.files)}
            />
          </div>
        )}
      </div>
    );
  }
}