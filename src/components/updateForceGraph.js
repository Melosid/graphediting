export function update({ nodes, links }, simulation, node, link, color, svg) {
    // Make a shallow copy to protect against mutation, while
    // recycling old nodes to preserve position and velocity.
    const old = new Map(node.data().map((d) => [d.id, d]));
    console.log('old', old);
    console.log('svg', svg);
    nodes = nodes.map((d) => Object.assign(old.get(d.id) || {}, d));
    links = links.map((d) => Object.assign({}, d));

    console.log('updated nodes', nodes);
    console.log('updated links', links)

    node = node
        .data(nodes, (d) => d.id)
        .join((enter) =>
            enter.append("circle").attr("r", 12).attr("fill", color)
        );

    link = link.data(links, (d) => [d.source, d.target]).join("line");

    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).restart();

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
        node: node,
        link: link,
        simulation: simulation
    };
}