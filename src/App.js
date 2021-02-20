import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { SidebarMenu } from './components/sidebarMenu'
import { ForceGraph } from './components/d3Components/forceGraph'
import { firstMatrix } from "./data/data";
import { initialMatrix, finalMatrix, differenceMatrix } from './components/matrixGenerators'
import { graphGenerator } from './components/d3Components/graphGenerator'
import { downloadFile } from './components/downloadFile'

const App = () => {
  const reader = new FileReader();

  const [grGraphFile, setGrGraphFile] = useState()
  const handleGrFileUpload = (ev) => {
    reader.readAsText(ev.target.files[0], "utf-8");
    reader.onload = (event) => {
      setGrGraphFile(event.target.result);
      let initialMat = initialMatrix(event.target.result)
      setNumberOfNodes(initialMat.numberOfNodes)
      setInitMatrix(initialMat.initialMatrix)
      let graph = graphGenerator(initialMat.initialMatrix)
      setGraph(graph)
      setCsvFile(initialMat.csv)
    };
  };

  const [arffGraphFile, setArffGraphFile] = useState()
  const handleArffFileUpload = (ev) => {
    reader.readAsText(ev.target.files[0], "utf-8");
    reader.onload = (event) => {
      setArffGraphFile(event.target.result);
      let finMat = finalMatrix(event.target.result, numberOfNodes)
      setFinMatrix(finMat.finalMatrix)
      let graph = graphGenerator(finMat.finalMatrix)
      setGraph(graph)
    };
  };

  const handleCsvDownload = () => {
    if (csvFile) {
      downloadFile("Graph", csvFile, "toCSV.csv");
    } else {
      window.alert('No .gr graph file found. Please upload a graph before proceeding.')
    }
  };

  const handleOutFileDownload = () => {
    if (outputFile) {
      downloadFile("Graph", outputFile, "OutputFormat.txt");
    } else {
      window.alert('Missing .gr or .arff graph file. Please upload graph files before proceeding.')
    }
  };

  const [graph, setGraph] = useState(graphGenerator(firstMatrix))
  const [numberOfNodes, setNumberOfNodes] = useState()
  const [initMatrix, setInitMatrix] = useState()
  const [csvFile, setCsvFile] = useState()
  const [finMatrix, setFinMatrix] = useState()
  const [diffMatrix, setDiffMatrix] = useState()
  const [outputFile, setOutputFile] = useState()
  const [modified, setModified] = useState()

  useEffect(() => {
    console.log("Initial Matrix", initMatrix);
    console.log("CSV", csvFile);
    console.log("Final Matrix", finMatrix);
    let diffMat = differenceMatrix(initMatrix, finMatrix, numberOfNodes)
    setDiffMatrix(diffMat.differenceMatrix)
    setOutputFile(diffMat.outFile)
  }, [finMatrix])

  useEffect(() => {
    if (initMatrix && diffMatrix) {
      console.log("Difference Matrix", diffMatrix);
      console.log("Out file", outputFile);
    }
  }, [diffMatrix])

  useEffect(() => {
    console.log("Modified", modified);
  }, [modified])

  const reset = () => {
    // setNumberOfNodes(null)
    // setGrGraphFile(null)
    // setArffGraphFile(null)
    // setCsvFile(null)
    // setOutputFile(null)
    // console.log("demograph", demoGraph);

    setGraph(graphGenerator(firstMatrix))
  }

  return (
    <div className="app">
      <div className="graph">
        <ForceGraph graph={graph} />
      </div>
      <SidebarMenu
        grGraphFile={grGraphFile}
        arffGraphFile={arffGraphFile}
        handleGrFileUpload={handleGrFileUpload}
        handleArffFileUpload={handleArffFileUpload}
        handleCsvDownload={handleCsvDownload}
        handleOutFileDownload={handleOutFileDownload}
        setModified={() => setModified(true)}
        reset={() => reset()}
      />
    </div>
  );
};

export default App;
