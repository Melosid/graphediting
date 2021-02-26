export const linkInitialMatrix = (file) => {
    var textByLine = file.split("\n");
    var numberOfNodes = 0
    var pairsArray = []
    textByLine.forEach((row) => {
        var arrayOfLine = row.split(" ");
        pairsArray.push(arrayOfLine)
    });

    pairsArray.forEach((pair) => {
        var biggest = 0
        var node1 = parseInt(pair[0])
        var node2 = parseInt(pair[1])
        if (node1 > node2) {
            biggest = node1
        } else {
            biggest = node2
        }
        if (biggest > numberOfNodes) {
            numberOfNodes = biggest
        }
    })
    console.log("Number of nodes", numberOfNodes);

    var matrix = []
    for (let i = 0; i < numberOfNodes; i++) {
        matrix.push([]);
    }
    matrix.forEach((row) => {
        for (let i = 0; i < numberOfNodes; i++) {
            row.push(0);
        }
    });

    pairsArray.forEach((pair) => {
        let from = pair[0];
        let to = pair[1];
        matrix[parseInt(from) - 1][parseInt(to) - 1] = 1;
        matrix[parseInt(to) - 1][parseInt(from) - 1] = 1;
    })

    console.log("empty matrix", matrix);

    return {
        initialMatrix: matrix,
        numberOfNodes: numberOfNodes,
    }
}

export const initialMatrix = (grFile) => {
    var textByLine = grFile.split("\n");
    textByLine = textByLine.filter((line) => line !== "");

    var dataObj = {
        nodesD: 0,
        linksD: 0,
        linkedNodes: [],
    };

    textByLine.forEach((row) => {
        var arrayOfLine = row.split(" ");
        if (arrayOfLine[0] === "p") {
            dataObj.nodesD = arrayOfLine[2];
            dataObj.linksD = arrayOfLine[3];
        }
    });

    console.log(dataObj.nodesD, dataObj.linksD);
    var matrix = [];

    for (let i = 0; i < dataObj.nodesD; i++) {
        matrix.push([]);
    }
    matrix.forEach((row) => {
        for (let i = 0; i < dataObj.nodesD; i++) {
            row.push(0);
        }
    });

    textByLine.forEach((line) => {
        var arrayOfLine = line.split(" ");
        if (arrayOfLine[0] !== "p") {
            let from = arrayOfLine[0];
            let to = arrayOfLine[1];
            matrix[parseInt(from) - 1][parseInt(to) - 1] = 1;
            matrix[parseInt(to) - 1][parseInt(from) - 1] = 1;
        }
    });

    textByLine.forEach((line) => {
        var arrayOfLine = line.split(" ");
        if (arrayOfLine[0] !== "p") {
            let from = arrayOfLine[0];
            let to = arrayOfLine[1];
            dataObj.linkedNodes.push(from);
            dataObj.linkedNodes.push(to);
        }
    });

    var csv = "Node";
    for (let i = 0; i < dataObj.nodesD; i++) {
        csv += `, ${i + 1}`;
    }

    matrix.forEach((row, i) => {
        csv += `\n ${i + 1}`;
        row.forEach((el) => {
            csv += `, ${el}`;
        });
    });

    return {
        initialMatrix: matrix,
        numberOfNodes: dataObj.nodesD,
        csv: csv
    }
}

export const finalMatrix = (arffFile, numberOfNodes) => {
    var textByLine = arffFile.split("\n");
    textByLine = textByLine.filter((line) => line !== "");
    textByLine = textByLine.filter((line) => line.split("")[0] !== "@");
    textByLine = textByLine.map((line) => line.split(","));

    let lastIndex = parseInt(numberOfNodes) + 2;

    var pairsArray = [];
    textByLine.forEach((row) => {
        var nodeOnCluster = {
            node: row[1],
            cluster: row[lastIndex],
        };

        pairsArray.push(nodeOnCluster);
    });

    var finLinks = [];
    pairsArray.forEach((pairOne, indexOne) => {
        pairsArray.forEach((pairTwo, indexTwo) => {
            if (indexOne < indexTwo && pairOne.cluster === pairTwo.cluster) {
                finLinks.push({
                    x: pairOne.node,
                    y: pairTwo.node,
                });
            }
        });
    });

    var matrix = [];

    for (let i = 0; i < numberOfNodes; i++) {
        matrix.push([]);
    }
    matrix.forEach((row) => {
        for (let i = 0; i < numberOfNodes; i++) {
            row.push(0);
        }
    });

    finLinks.forEach((linkObj) => {
        matrix[parseInt(linkObj.x) - 1][parseInt(linkObj.y) - 1] = 1;
        matrix[parseInt(linkObj.y) - 1][parseInt(linkObj.x) - 1] = 1;
    });

    return {
        finalMatrix: matrix
    }
}

export const differenceMatrix = (initialMatrix, finalMatrix, numberOfNodes) => {
    var matrix = [];

    for (let i = 0; i < numberOfNodes; i++) {
        matrix.push([]);
    }
    matrix.forEach((row) => {
        for (let i = 0; i < numberOfNodes; i++) {
            row.push(0);
        }
    });

    for (let z = 0; z < numberOfNodes; z++) {
        for (let x = 0; x < numberOfNodes; x++) {
            if (initialMatrix[z][x] !== finalMatrix[z][x]) {
                matrix[z][x] = 1;
            }
        }
    }
    console.log("difference matrix", matrix);

    var out = "";
    for (let c = 0; c < numberOfNodes; c++) {
        for (let v = 0; v < numberOfNodes; v++) {
            if (c < v && matrix[c][v] === 1) {
                if (out.length === 0) {
                    out += `${c + 1} ${v + 1}`;
                } else {
                    out += `\n${c + 1} ${v + 1}`;
                }
            }
        }
    }

    return {
        differenceMatrix: matrix,
        outFile: out
    }
}