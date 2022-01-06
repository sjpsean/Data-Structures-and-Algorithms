 // Log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
    // nested for loop
}

logAllPairsOfArray(boxes); 
// O(n*n) = O(n^2) - Quadratic time