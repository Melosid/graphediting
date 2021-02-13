import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import uploadIcon from './icons/upload-thick.svg'
import downloadIcon from './icons/download-thick.svg'
import plusSquare from './icons/plusSquare.svg'
import downMenu from './icons/downMenu.svg'
import upMenu from './icons/upMenu.svg'

const App = () => {
  const fileSectionRef = useRef()
  const fileSectionMenuIconRef = useRef()

  const handleClick = () => {
    const section = fileSectionRef.current
    section.classList.toggle('closed')
    const icon = fileSectionMenuIconRef.current
    icon.classList.toggle('rotate')
  }

  return (
    <div className="app">
      <div className="graph"></div>
      <div className="options">
        <text className="header">Graph Editing</text>
        <text className="description">Add a graph to edit and visualize</text>
        <div className="sections">
          <div className="fileSectionToggle" onClick={handleClick}>
            <text className="fileSectionTitle">File options</text>
            <img ref={fileSectionMenuIconRef} className="menuIcon" src={downMenu} />
          </div>
          <div ref={fileSectionRef} className="fileSection closed">
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
