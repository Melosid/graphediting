import * as d3 from "d3";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createContextMenu } from "./utils";
import styles from "./forceGraph.module.css";
import { graph1, graph2 } from "../data/data2";


export function runForceGraph(container, nodeHoverTooltip, graph, simulation, node, link, color, svg) {
    const menuItems = [
        {
            title: "First action",
            action: (d) => {
                // TODO: add any action you want to perform
                console.log(d);
            },
        },
        {
            title: "Second action",
            action: (d) => {
                // TODO: add any action you want to perform
                console.log(d);
            },
        },
    ];

    const containerRect = container.getBoundingClientRect();
    const height = containerRect.height;
    const width = containerRect.width;


    const drag = (simulation) => {
        const dragstarted = (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        };

        const dragged = (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
        };

        const dragended = (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        };

        return d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    };

    simulation = d3
        .forceSimulation(graph.nodes)
        .force(
            "link",
            d3.forceLink(graph.links).id((d) => d.id)
        )
        .force("charge", d3.forceManyBody().strength(-150))
        .force("x", d3.forceX())
        .force("y", d3.forceY());

    svg = d3
        .select(container)
        .append("svg")
        .attr("id", "graphSvg")
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .call(
            d3.zoom().on("zoom", function (event) {
                svg.attr("transform", event.transform);
            })
        );

    link = svg
        .append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(graph.links)
        .join("line")
        .attr("stroke-width", (d) => Math.sqrt(d.value));

    node = svg
        .append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 2)
        .selectAll("circle")
        .data(graph.nodes)
        .join("circle")
        .on("contextmenu", (d) => {
            createContextMenu(d, menuItems, width, height, "#graphSvg");
        })
        .attr("r", 12)
        .attr("fill", color)
        .call(drag(simulation))
        .on("click", (d) => console.log("Node clicked", d));

    simulation.on("tick", () => {
        //update link positions
        link
            .attr("x1", (d) => d.source.x)
            .attr("y1", (d) => d.source.y)
            .attr("x2", (d) => d.target.x)
            .attr("y2", (d) => d.target.y);

        // update node positions
        node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    });

    return {
        destroy: () => {
            simulation.stop();
        },
        nodes: () => {
            return svg.node();
        },
        svg: svg,
        node: node,
        link: link,
        simulation: simulation
    };
}
