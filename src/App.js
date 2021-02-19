import React, { useState, useRef, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import uploadIcon from './icons/upload-thick.svg'
import plusSquare from './icons/plusSquare.svg'
import downMenu from './icons/downMenu.svg'
import addNode from './icons/addNode.svg'
import links from './icons/links.svg'
import modify from './icons/modify.svg'
import removeNode from './icons/removeNode.svg'
import csvDoc from './icons/csvFile.svg'
import outputDoc from './icons/outputFile.svg'
import { ForceGraph } from './components/forceGraph'
import { graph1, graph2 } from "./data/data2";
import { initialMatrix, finalMatrix, differenceMatrix } from './components/matrixGenerators'
import { downloadFile } from './components/downloadFile'

const App = () => {
  const fileSectionRef = useRef()
  const fileSectionMenuIconRef = useRef()
  const graphSectionRef = useRef()
  const graphSectionMenuIconRef = useRef()
  const downloadSectionRef = useRef()
  const downloadSectionMenuIconRef = useRef()

  const reader = new FileReader();

  const [grGraphFile, setGrGraphFile] = useState()
  const uploadGrGraphFile = () => {
    document.getElementById("grUpload").click()
  }
  const handleGrFileUpload = (ev) => {
    reader.readAsText(ev.target.files[0], "utf-8");
    reader.onload = (event) => {
      setGrGraphFile(event.target.result);
      let initialMat = initialMatrix(event.target.result)
      setNumberOfNodes(initialMat.numberOfNodes)
      setInitMatrix(initialMat.initialMatrix)
      setCsvFile(initialMat.csv)
    };
  };


  const [arffGraphFile, setArffGraphFile] = useState()
  const uploadArffGraphFile = () => {
    document.getElementById("arffUpload").click()
  }
  const handleArffFileUpload = (ev) => {
    reader.readAsText(ev.target.files[0], "utf-8");
    reader.onload = (event) => {
      setArffGraphFile(event.target.result);
      let finMat = finalMatrix(event.target.result, numberOfNodes)
      setFinMatrix(finMat.finalMatrix)
    };
  };

  const handleCsvDownload = () => {
    downloadFile("Graph", csvFile, "toCSV.csv");
  };

  const handleOutFileDownload = () => {
    downloadFile("Graph", outputFile, "OutputFormat.txt");
  };

  const [graph, setGraph] = useState(graph1)
  const [numberOfNodes, setNumberOfNodes] = useState()
  const [initMatrix, setInitMatrix] = useState()
  const [csvFile, setCsvFile] = useState()
  const [finMatrix, setFinMatrix] = useState()
  const [diffMatrix, setDiffMatrix] = useState()
  const [outputFile, setOutputFile] = useState()

  useEffect(() => {
    console.log("Initial Matrix", initMatrix);
    console.log("CSV", csvFile);
    console.log("Final Matrix", finMatrix);
    let diffMat = differenceMatrix(initMatrix, finMatrix, numberOfNodes)
    setDiffMatrix(diffMat.differenceMatrix)
    setOutputFile(diffMat.outFile)
  }, [finMatrix])

  useEffect(() => {
    if (diffMatrix) {
      console.log("Difference Matrix", diffMatrix);
      console.log("Out file", outputFile);
    }
  }, [diffMatrix])

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
            <div className="uploadGr" onClick={uploadGrGraphFile}>
              <img className="uploadIcon" src={uploadIcon} />
              <span className="uploadspan">Upload a .gr graph file</span>
              <input
                id="grUpload"
                type="file"
                onChange={handleGrFileUpload}
                className="noDisplay"
              />
            </div>
            <div className="addArff" onClick={uploadArffGraphFile}>
              <img className="plusIcon" src={plusSquare} />
              <span className="uploadspan">Add .arff file to graph</span>
              <input
                id="arffUpload"
                type="file"
                onChange={handleArffFileUpload}
                className="noDisplay"
              />
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
            <div className="uploadGr" onClick={handleCsvDownload}>
              <img className="uploadIcon" src={csvDoc} />
              <span className="uploadspan">Download CSV file</span>
            </div>
            <div className="addArff" onClick={handleOutFileDownload}>
              <img className="plusIcon" src={outputDoc} />
              <span className="uploadspan">Download Output file</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
