import React from "react";
import "./fileparser.css";
import { Button } from "react-bootstrap";

const FileParser = ({ fileNames }) => {
  return (
    <div className="upload-container">
      <p id="upload">Uploaded Files</p>
      <ul id="list">
        {fileNames.map((fileName) => (
          <>
            <li id="list-item" key={fileName}>
              {fileName}{" "}
            </li>
            <span className="btn">
              {" "}
              <Button variant="secondary" size="lg">
                Parser
              </Button>
            </span>
          </>
        ))}
      </ul>
    </div>
  );
};

export default FileParser;
