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
      setNumberOfNodes(parseInt(initialMat.numberOfNodes))
      setInitMatrix(initialMat.initialMatrix)
      let graph = graphGenerator(initialMat.initialMatrix)
      setGraph(graph)
      setCsvFile(initialMat.csv)
    };
    let input = document.getElementById('grUpload')
    input.value = ''
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
    let input = document.getElementById('arffUpload')
    input.value = ''
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
  const [numberOfNodes, setNumberOfNodes] = useState(3)
  const [initMatrix, setInitMatrix] = useState()
  const [csvFile, setCsvFile] = useState()
  const [finMatrix, setFinMatrix] = useState()
  const [diffMatrix, setDiffMatrix] = useState()
  const [outputFile, setOutputFile] = useState()
  const [modified, setModified] = useState()

  useEffect(() => {
    if (finMatrix) {
      console.log("Initial Matrix", initMatrix);
      console.log("CSV", csvFile);
      console.log("Final Matrix", finMatrix);
      let diffMat = differenceMatrix(initMatrix, finMatrix, numberOfNodes)
      setDiffMatrix(diffMat.differenceMatrix)
      setOutputFile(diffMat.outFile)
    }
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
    setGrGraphFile(null)
    setArffGraphFile(null)
    setCsvFile(null)
    setOutputFile(null)
    setGraph(graphGenerator(firstMatrix))
    setModified(false)
    setNumberOfNodes(firstMatrix.length)
    console.log(firstMatrix.length);
  }

  const addNode = () => {
    setModified(true)
    let modify = Object.assign({}, graph)
    console.log("Modified Graph", modify.nodes);
    modify.nodes.push({ id: numberOfNodes + 1 })
    setNumberOfNodes(numberOfNodes + 1)
    setGraph(modify)
  }

  const removeNode = (node) => {
    if (node > numberOfNodes) {
      window.alert("Node doesn't exist")
    } else {
      let modify = Object.assign({}, graph)
      setModified(true)
      let nodesToCheck = [...graph.nodes]
      let updatedNodes = nodesToCheck.filter((no) => (
        no.id != parseInt(node)
      ))
      console.log("updated Nodes", updatedNodes);
      let linksToCheck = [...graph.links]
      let updatedLinks = linksToCheck.filter((li) => (
        li.source != parseInt(node) && li.target != parseInt(node)
      ))
      console.log("Updated Links", updatedLinks);
      modify.nodes = updatedNodes
      modify.links = updatedLinks
      setGraph(modify)
    }
  }

  const modifyLink = () => { }

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
        modified={modified}
        setModified={() => setModified(true)}
        addNode={() => addNode()}
        removeNode={removeNode}
        reset={() => reset()}
      />
    </div>
  );
};

export default App;
