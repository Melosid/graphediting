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

  const modifyLink = (node1, node2) => {
    console.log("Modified link between nodes", node1 + " " + node2);
    if (node1 > numberOfNodes || node2 > numberOfNodes) {
      window.alert("One of nodes doesn't exist")
    } else {
      let modify = Object.assign({}, graph)
      setModified(true)
      let linksToCheck = [...graph.links]
      console.log(graph.links);
      console.log("linksToCheck", linksToCheck);
      let linksSimple = []
      linksToCheck.forEach((li) => {
        linksSimple.push({ source: li.source.id ? li.source.id : li.source, target: li.target.id ? li.target.id : li.target })
      })
      console.log("linksSimple", linksSimple);
      let linkExists = linksSimple.find((li) => (
        (li.source === parseInt(node1) && li.target === parseInt(node2)) ||
        (li.source === parseInt(node2) && li.target === parseInt(node1))
      ))
      let updatedLinks = [...linksSimple]
      if (!!linkExists) {
        console.log('Links already exists');
        updatedLinks = linksSimple.filter((li) => !(
          (li.source === parseInt(node1) && li.target === parseInt(node2)) ||
          (li.source === parseInt(node2) && li.target === parseInt(node1))
        ))
      } else {
        console.log('link doesn"t exist');
        updatedLinks.push({ source: parseInt(node1), target: parseInt(node2) })
      }
      console.log("Updated Links", updatedLinks);
      let nodesToCheck = [...graph.nodes]
      let updatedNodes = []
      nodesToCheck.forEach((no) => {
        updatedNodes.push({ id: no.id })
      })
      console.log("updated Nodes", updatedNodes);
      modify.nodes = updatedNodes
      modify.links = updatedLinks
      console.log("modified graph", modify);
      setGraph(modify)
    }
  }

  useEffect(() => {
    console.log("graph after link modification", graph);
  }, [graph])

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
        modifyLink={modifyLink}
        reset={() => reset()}
      />
    </div>
  );
};

export default App;
