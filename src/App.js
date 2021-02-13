import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import uploadIcon from './icons/upload-thick.svg'
import downloadIcon from './icons/download-thick.svg'
import plusSquare from './icons/plusSquare.svg'

const App = () => {
  const fileSectionRef = useRef()

  const handleClick = () => {
    const section = fileSectionRef.current
    section.classList.toggle('closed')
  }

  return (
    <div className="app">
      <div className="graph"></div>
      <div className="options">
        <text className="header">Graph Editing</text>
        <text className="description">Add a graph to edit and visualize</text>
        <div className="sections">
          <text className="fileSectionToggle" onClick={handleClick}>File options</text>
          <div ref={fileSectionRef} className="fileSection">
            <div className="uploadGr">
              <img className="uploadIcon" src={uploadIcon} />
              <text className="uploadText">Upload a .gr graph file</text>
            </div>
            <div className="addArff">
              <img className="plusIcon" src={plusSquare} />
              <text className="uploadText">Add .arff file to graph</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
