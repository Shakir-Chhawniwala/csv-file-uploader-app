import React ,{useState } from "react";
import './App.css';
import DragDrop from "./DragDrop";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FileParser from "./FileParser";


function App() {
  const [fileNames, setFileNames] = useState([]);

  const handleDrop = (acceptedFiles) => {
     setFileNames(acceptedFiles.map((file) => file.name));
   }
  return (
    <Router>
      <div className="App">
      <Route exact path="/">
        <DragDrop fileNames={fileNames} handleDrop={handleDrop}/>
        </Route>
        <Route exact path="/fileparser">
        <FileParser fileNames={fileNames}/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
