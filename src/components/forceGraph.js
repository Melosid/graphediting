import React, { useRef, useEffect, useState } from "react";
import { runForceGraph } from "./forceGraphGenerator";
import { update } from "./updateForceGraph"
import styles from "./forceGraph.module.css";

export function ForceGraph({ nodeHoverTooltip, graph }) {
    const containerRef = useRef(null);
    const [simulation, setSimulation] = useState()
    const [svg, setSvg] = useState()
    const [node, setNode] = useState()
    const [link, setLink] = useState()
    const color = () => {
        return "#9D00A0";
    };
    const [firstRender, setFirstRender] = useState(true)


    useEffect(() => {
        let destroyFn;
        console.log('Grafi', graph);
        if (containerRef.current && firstRender) {
            console.log('From inside');
            const all = runForceGraph(containerRef.current, nodeHoverTooltip, graph, simulation, node, link, color, svg);
            destroyFn = all.destroy;
            // setTimeout(() => all.simulation.stop(), 2000)
            // update(graph2, all.simulation, all.node, all.link, color)
            setNode(all.node)
            setLink(all.link)
            setSimulation(all.simulation)
            setFirstRender(false)
        } else {
            update(graph, simulation, node, link, color)
        }
        return destroyFn;
    }, [graph]);

    return <div ref={containerRef} className={styles.container} />;
}