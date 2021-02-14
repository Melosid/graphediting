import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import uploadIcon from './icons/upload-thick.svg'
import downloadIcon from './icons/download-thick.svg'
import plusSquare from './icons/plusSquare.svg'
import downMenu from './icons/downMenu.svg'
import addNode from './icons/addNode.svg'
import links from './icons/links.svg'
import modify from './icons/modify.svg'
import removeNode from './icons/removeNode.svg'
import csvFile from './icons/csvFile.svg'
import outputFile from './icons/outputFile.svg'

const App = () => {
  const fileSectionRef = useRef()
  const fileSectionMenuIconRef = useRef()
  const graphSectionRef = useRef()
  const graphSectionMenuIconRef = useRef()
  const downloadSectionRef = useRef()
  const downloadSectionMenuIconRef = useRef()

  const toggleFileSection = () => {
    const section = fileSectionRef.current
    section.classList.toggle('closed')
    const icon = fileSectionMenuIconRef.current
    icon.classList.toggle('rotate')
  }

  const toggleGraphSection = () => {
    const section = graphSectionRef.current
    section.classList.toggle('closed')
    const icon = graphSectionMenuIconRef.current
    icon.classList.toggle('rotate')
  }

  const toggleDownloadSection = () => {
    const section = downloadSectionRef.current
    section.classList.toggle('closed')
    const icon = downloadSectionMenuIconRef.current
    icon.classList.toggle('rotate')
  }

  return (
    <div className="app">
      <div className="graph"></div>
      <div className="options">
        <text className="header">Graph Editing</text>
        <text className="description">Add a graph to edit and visualize</text>
        <div className="sections">
          <div className="sectionToggle" onClick={toggleFileSection}>
            <text className="sectionTitle">File options</text>
            <img ref={fileSectionMenuIconRef} className="menuIcon" src={downMenu} />
          </div>
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
          <div className="sectionToggle" onClick={toggleGraphSection}>
            <text className="sectionTitle">Graph options</text>
            <img ref={graphSectionMenuIconRef} className="menuIcon" src={downMenu} />
          </div>
          <div ref={graphSectionRef} className="fileSection">
            <div className="addArff">
              <img className="plusIcon" src={addNode} />
              <text className="uploadText">Add node</text>
            </div>
            <div className="modifyLink">
              <div>
                <img className="plusIcon" src={links} />
                <text className="uploadText">Modify links</text>
              </div>
              <text className="nodeText">Start:</text>
              <input className="nodeInput" placeholder="1" />
              <img className="modifyIcon" src={modify} />
              <text className="nodeText2">End:</text>
              <input className="nodeInput" placeholder="2" />
              <text className="modifyLinkButton">Modify</text>
            </div>
            <div className="modifyLink">
              <div className="removeNodeTitle">
                <img className="plusIcon" src={removeNode} />
                <text className="uploadText">Remove node</text>
              </div>
              <text className="nodeText">Node:</text>
              <input className="nodeInput" placeholder="1" />
              <text className="removeNodeButton">Remove</text>
            </div>
          </div>
          <div className="sectionToggle" onClick={toggleDownloadSection}>
            <text className="sectionTitle">Download</text>
            <img ref={downloadSectionMenuIconRef} className="menuIcon" src={downMenu} />
          </div>
          <div ref={downloadSectionRef} className="fileSection">
            <div className="uploadGr">
              <img className="uploadIcon" src={csvFile} />
              <text className="uploadText">Download CSV file</text>
            </div>
            <div className="addArff">
              <img className="plusIcon" src={outputFile} />
              <text className="uploadText">Download Output file</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
