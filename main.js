const Import = require ('./utils.js')

let mat = [
    [1,2],
    [3,4]
];

let mat1 = [
    [1,2],
    [3,4]
];

let mat2 = [
    [5,6],
    [7,8]
];

console.log(Import.matrixProduct(mat1,mat2));
console.log(Import.sumOfMatrices(mat1,mat2));
console.log(Import.sumOfEachRow(mat));