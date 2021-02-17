import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import uploadIcon from './icons/upload-thick.svg'
import plusSquare from './icons/plusSquare.svg'
import downMenu from './icons/downMenu.svg'
import addNode from './icons/addNode.svg'
import links from './icons/links.svg'
import modify from './icons/modify.svg'
import removeNode from './icons/removeNode.svg'
import csvFile from './icons/csvFile.svg'
import outputFile from './icons/outputFile.svg'
import { ForceGraph } from './components/forceGraph'
import { graph1, graph2 } from "./data/data2";

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

  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>     
      <b>${node.name}</b>
    </div>`;
  }, []);

  const [graph, setGraph] = useState(graph1)

  const replaceGraph = () => {
    console.log('Changed graph');
    setGraph(graph2)
  }

  const replaceGraph1 = () => {
    console.log('Changed graph');
    setGraph(graph1)
  }


  return (
    <div className="app">
      <div className="graph">
        <ForceGraph nodeHoverTooltip={nodeHoverTooltip} graph={graph} />
      </div>
      <div className="options">
        <span className="header">Graph Editing</span>
        <span className="description">Add a graph to edit and visualize</span>
        <div className="sections">
          <div className="sectionToggle" onClick={toggleFileSection}>
            <span className="sectionTitle">File options</span>
            <img ref={fileSectionMenuIconRef} className="menuIcon" src={downMenu} />
          </div>
          <div ref={fileSectionRef} className="fileSection">
            <div className="uploadGr" onClick={replaceGraph}>
              <img className="uploadIcon" src={uploadIcon} />
              <span className="uploadspan">Upload a .gr graph file</span>
            </div>
            <div className="addArff" onClick={replaceGraph1}>
              <img className="plusIcon" src={plusSquare} />
              <span className="uploadspan">Add .arff file to graph</span>
            </div>
          </div>
          <div className="sectionToggle" onClick={toggleGraphSection}>
            <span className="sectionTitle">Graph options</span>
            <img ref={graphSectionMenuIconRef} className="menuIcon" src={downMenu} />
          </div>
          <div ref={graphSectionRef} className="fileSection">
            <div className="addArff">
              <img className="plusIcon" src={addNode} />
              <span className="uploadspan">Add node</span>
            </div>
            <div className="modifyLink">
              <div>
                <img className="plusIcon" src={links} />
                <span className="uploadspan">Modify links</span>
              </div>
              <span className="nodespan">Start:</span>
              <input className="nodeInput" placeholder="1" />
              <img className="modifyIcon" src={modify} />
              <span className="nodespan2">End:</span>
              <input className="nodeInput" placeholder="2" />
              <span className="modifyLinkButton">Modify</span>
            </div>
            <div className="modifyLink">
              <div className="removeNodeTitle">
                <img className="plusIcon" src={removeNode} />
                <span className="uploadspan">Remove node</span>
              </div>
              <span className="nodespan">Node:</span>
              <input className="nodeInput" placeholder="1" />
              <span className="removeNodeButton">Remove</span>
            </div>
          </div>
          <div className="sectionToggle" onClick={toggleDownloadSection}>
            <span className="sectionTitle">Download</span>
            <img ref={downloadSectionMenuIconRef} className="menuIcon" src={downMenu} />
          </div>
          <div ref={downloadSectionRef} className="fileSection">
            <div className="uploadGr">
              <img className="uploadIcon" src={csvFile} />
              <span className="uploadspan">Download CSV file</span>
            </div>
            <div className="addArff">
              <img className="plusIcon" src={outputFile} />
              <span className="uploadspan">Download Output file</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
