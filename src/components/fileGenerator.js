export const fileGenerator = (graph) => {
    var txt = ""
    graph.links.forEach((li) => {
        var node1 = (li.source.id ? li.source.id : li.source)
        var node2 = (li.target.id ? li.target.id : li.target)
        txt += `${node1} ${node2} \n`
    });
    return txt
}