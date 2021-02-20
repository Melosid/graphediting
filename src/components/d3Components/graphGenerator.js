export const graphGenerator = (matrix) => {
    let nodesOnGraph = []
    let graph = {}
    let nodes = []
    let links = []
    matrix.forEach((row, i) => {
        if (row.includes(1)) {
            nodesOnGraph.push(i + 1)
        }
    });

    nodesOnGraph.forEach((node) => {
        nodes.push({ id: node })
    })
    graph.nodes = nodes

    matrix.forEach((from, i) => {
        from.forEach((to, j) => {
            if (i < j && matrix[i][j] === 1) {
                links.push({ source: i + 1, target: j + 1 })
            }
        })
    })
    graph.links = links
    console.log("Graph", graph);
    return graph
}

