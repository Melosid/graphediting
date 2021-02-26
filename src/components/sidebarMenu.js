import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import redo from '../icons/redoIcon.svg'
import uploadIcon from '../icons/upload-thick.svg'
import plusSquare from '../icons/plusSquare.svg'
import downMenu from '../icons/downMenu.svg'
import addNode from '../icons/addNode.svg'
import links from '../icons/links.svg'
import modify from '../icons/modify.svg'
import removeNode from '../icons/removeNode.svg'
import csvDoc from '../icons/csvFile.svg'
import outputDoc from '../icons/outputFile.svg'

export const SidebarMenu = (props) => {
    const uploadSectionRef = useRef()
    const uploadSectionMenuIconRef = useRef()
    const fileSectionRef = useRef()
    const fileSectionMenuIconRef = useRef()
    const graphSectionRef = useRef()
    const graphSectionMenuIconRef = useRef()
    const downloadSectionRef = useRef()
    const downloadSectionMenuIconRef = useRef()
    const removeNodeInput = useRef()
    const [nodeToRemove, setNodeToRemove] = useState(1)
    const node1Ref = useRef()
    const node2Ref = useRef()
    const [node1, setNode1] = useState(2)
    const [node2, setNode2] = useState(3)

    const handleRemoveNode = () => {
        setNodeToRemove(removeNodeInput.current.value)
        console.log("Node to remove value", removeNodeInput.current.value);
    }

    const handleModifyLink = () => {
        console.log(node1Ref.current.value + " " + node2Ref.current.value);
        setNode1(node1Ref.current.value)
        setNode2(node2Ref.current.value)
    }

    const uploadGraphFile = () => {
        document.getElementById("fileUpload").click()
    }

    const uploadGrGraphFile = () => {
        document.getElementById("grUpload").click()
    }

    const uploadArffGraphFile = () => {
        if (props.grGraphFile && !props.modified) {
            document.getElementById("arffUpload").click()
        } else if (props.modified) {
            window.alert('Can not upload an arff file because the graph has been manually modified')
        }
        else {
            window.alert('No .gr graph file found. Please upload a graph before proceeding.')
        }
    }

    const toggleUploadSection = () => {
        const section = uploadSectionRef.current
        section.classList.toggle('closed')
        const icon = uploadSectionMenuIconRef.current
        icon.classList.toggle('rotate')
    }

    const toggleGraphSection = () => {
        const section = graphSectionRef.current
        section.classList.toggle('closed')
        const icon = graphSectionMenuIconRef.current
        icon.classList.toggle('rotate')
    }

    const toggleFileSection = () => {
        const section = fileSectionRef.current
        section.classList.toggle('closed')
        const icon = fileSectionMenuIconRef.current
        icon.classList.toggle('rotate')
    }

    const toggleDownloadSection = () => {
        const section = downloadSectionRef.current
        section.classList.toggle('closed')
        const icon = downloadSectionMenuIconRef.current
        icon.classList.toggle('rotate')
    }

    return (
        <div className="options">
            <span className="header">Graph Editing</span>
            <span className="description">Add a graph to edit and visualize</span>
            <div className="reset" onClick={props.reset}>
                <img className="resetIcon" src={redo} />
                <span className="resetText">Reset options</span>
            </div>
            <div className="sections">
                <div className="sectionToggle" onClick={toggleUploadSection}>
                    <span className="sectionTitle">Upload a graph file</span>
                    <img ref={uploadSectionMenuIconRef} className="menuIcon" src={downMenu} />
                </div>
                <div ref={uploadSectionRef} className="fileSection">
                    <div className={props.grGraphFile ? 'uploadGr green' : 'uploadGr'} onClick={uploadGraphFile}>
                        <img className="uploadIcon" src={uploadIcon} />
                        <span className="uploadspan">Upload file</span>
                        <input
                            id="fileUpload"
                            type="file"
                            onChange={props.handleFileUpload}
                            className="noDisplay"
                        />
                    </div>
                </div>
                <div className="sectionToggle" onClick={toggleGraphSection}>
                    <span className="sectionTitle">Graph options</span>
                    <img ref={graphSectionMenuIconRef} className="menuIcon" src={downMenu} />
                </div>
                <div ref={graphSectionRef} className="fileSection">
                    <div className="addArff" onClick={props.addNode}>
                        <img className="plusIcon" src={addNode} />
                        <span className="uploadspan">Add node</span>
                    </div>
                    <div className="modifyLink">
                        <div>
                            <img className="plusIcon" src={links} />
                            <span className="uploadspan">Modify links</span>
                        </div>
                        <span className="nodespan">Start:</span>
                        <input ref={node1Ref} className="nodeInput" placeholder="1" onChange={handleModifyLink} />
                        <img className="modifyIcon" src={modify} />
                        <span className="nodespan2">End:</span>
                        <input ref={node2Ref} className="nodeInput" placeholder="2" onChange={handleModifyLink} />
                        <span className="modifyLinkButton" onClick={() => props.modifyLink(node1, node2)}>Modify</span>
                    </div>
                    <div className="modifyLink">
                        <div className="removeNodeTitle">
                            <img className="plusIcon" src={removeNode} />
                            <span className="uploadspan">Remove node</span>
                        </div>
                        <span className="nodespan">Node:</span>
                        <input ref={removeNodeInput} className="nodeInput" placeholder="1" onChange={handleRemoveNode} />
                        <span className="removeNodeButton" onClick={() => props.removeNode(nodeToRemove)}>Remove</span>
                    </div>
                </div>
                <div className="sectionToggle" onClick={toggleFileSection}>
                    <span className="sectionTitle">Pace and Weka file options</span>
                    <img ref={fileSectionMenuIconRef} className="menuIcon" src={downMenu} />
                </div>
                <div ref={fileSectionRef} className="fileSection">
                    <div className={props.grGraphFile ? 'uploadGr green' : 'uploadGr'} onClick={uploadGrGraphFile}>
                        <img className="uploadIcon" src={uploadIcon} />
                        <span className="uploadspan">Upload a .gr graph file</span>
                        <input
                            id="grUpload"
                            type="file"
                            onChange={props.handleGrFileUpload}
                            className="noDisplay"
                        />
                    </div>
                    <div className={props.arffGraphFile ? 'addArff green' : 'addArff'} onClick={uploadArffGraphFile}>
                        <img className="plusIcon" src={plusSquare} />
                        <span className="uploadspan">Add .arff file to graph</span>
                        <input
                            id="arffUpload"
                            type="file"
                            onChange={props.handleArffFileUpload}
                            className="noDisplay"
                        />
                    </div>
                </div>
                <div className="sectionToggle" onClick={toggleDownloadSection}>
                    <span className="sectionTitle">Pace and Weka format file outputs</span>
                    <img ref={downloadSectionMenuIconRef} className="menuIcon" src={downMenu} />
                </div>
                <div ref={downloadSectionRef} className="fileSection">
                    <div className={props.grGraphFile ? 'uploadGr green' : 'uploadGr'} onClick={props.handleCsvDownload}>
                        <img className="uploadIcon" src={csvDoc} />
                        <span className="uploadspan">Download CSV file</span>
                    </div>
                    <div className={props.arffGraphFile ? 'addArff green' : 'addArff'} onClick={props.handleOutFileDownload}>
                        <img className="plusIcon" src={outputDoc} />
                        <span className="uploadspan">Download Output file</span>
                    </div>
                </div>
            </div>
        </div>
    )

}