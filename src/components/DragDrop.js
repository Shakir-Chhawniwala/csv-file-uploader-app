import React, { useState } from "react";
import "./dragdrop.css";
import { Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import axios from "axios";

const DragDrop = ({ handleDrop, fileNames }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onClickHandler = () => {
    const data = new FormData();
    for (var x = 0; x < selectedFile.length; x++) {
      data.append("file", selectedFile[x]);
    }

    axios
      .post("http://localhost:8000/upload", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
      });
  };

  const onChangeHandler = (event) => {
    setSelectedFile(event.target.files);
  };

  return (
    <div className="input-container">
      <div className="list-container">
        {fileNames.length > 0 ? <p className="select">Selected Files</p> : null}
        <ul>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>

      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({ className: "dropzone" })}
            onChange={onChangeHandler}
          >
            <input name="file" type="file" multiple {...getInputProps()} />
            {fileNames.length <= 0 ? <p>Drag & Drop</p> : null}
          </div>
        )}
      </Dropzone>
      <Link to="/fileparser">
        <Button
          variant="primary"
          size="lg"
          block
          disabled={fileNames.length < 1}
          onClick={onClickHandler}
        >
          Upload
        </Button>
      </Link>
    </div>
  );
};

export default DragDrop;
