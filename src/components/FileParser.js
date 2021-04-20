import React from "react";
import "./fileparser.css";
import { Button } from "react-bootstrap";

const FileParser = ({ fileNames }) => {
  return (
    <div className="container">
      <div className="file-container">
        <h2 id="upload">Uploaded Files</h2>
        <ul id="list">
          {fileNames.map((fileName) => (
            <>
              <li id="list-item" key={fileName}>{fileName} </li>
             <span> <Button className="btn" variant="secondary" size="lg">
                Parser
              </Button></span>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileParser;
