import React, { useRef, useEffect, useState } from "react";
import { runForceGraph } from "./forceGraphGenerator";
import { update } from "./updateForceGraph"
import styles from "./forceGraph.module.css";

export function ForceGraph({ nodeHoverTooltip, graph }) {
    const containerRef = useRef(null)
    const [simulation, setSimulation] = useState()
    const [svg, setSvg] = useState()
    const [node, setNode] = useState()
    const [link, setLink] = useState()
    const [label, setLabel] = useState()
    const color = () => {
        return "#9D00A0"
    }
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        let destroyFn;
        console.log('Grafi', graph);
        if (containerRef.current && firstRender) {
            console.log('From inside');
            const all = runForceGraph(containerRef.current, nodeHoverTooltip, graph, simulation, node, link, label, color, svg);
            destroyFn = all.destroy;
            setSvg(all.svg)
            setNode(all.node)
            setLink(all.link)
            setLabel(all.label)
            setSimulation(all.simulation)
            setFirstRender(false)
        } else {
            const updated = update(graph, simulation, node, link, label, color, svg)
            destroyFn = updated.destroy;
            setSvg(updated.svg)
            setNode(updated.node)
            setLink(updated.link)
            setLabel(updated.label)
            setSimulation(updated.simulation)
        }
        return destroyFn;
    }, [graph]);

    return <div ref={containerRef} className={styles.container} />;
}