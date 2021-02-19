export const graphGenerator = (grFile) => {
    let textByLine = grFile.split("\n");
    textByLine = textByLine.filter((line) => line !== "");

    let numberOfNodes = 0
    textByLine.forEach((row) => {
        var arrayOfLine = row.split(" ");
        if (arrayOfLine[0] === "p") {
            numberOfNodes = arrayOfLine[2];
        }
    });
    console.log("Number of nodes", numberOfNodes);

}

