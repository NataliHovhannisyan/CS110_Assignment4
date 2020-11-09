// 1st problem

function matrixProduct(mat1, mat2) {
    let result = '';
    for (let i = 0; i < mat1.length; i++) {
        for (let j = 0; j < mat2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < mat1[0].length; k++) {
                sum += mat1[i][k] * mat2[k][j];
            }
            result += sum + ' '
        }
        result += '\n'
    }
    return result;
}



// 2nd problem

function sumOfMatrices(mat1,mat2){
    let result = '';
    let sum = 0;
    for(let i = 0; i < mat1.length; i++){
        for(let j = 0; j < mat1[0].length; j++){
          sum = mat1[i][j] + mat2[i][j];
          result += sum + ' '
        }
        result += '\n'
    }
    return result;
}


//3rd problem 

function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function sumOfEachRow(mat){
    let result = [];
    let value = 0;
    for(let row = 0; row < mat.length; row++){
        value = sumOfArray(mat[row]);
        result.push(value)
    }
    return result;
}



module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow
}


