// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    // chunked[chunked.length - 1] is the sub array [1], [1, 2]
    //checking the length of each subarray to see if you should add to it or start a new one depending on "size" argument
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

// Slice method for the solution

// function chunk(array, size){
//     const chunked = [];
//     let index = 0;

//     while(index < array.length) {
//         chunked.push(array.slice(index, index + size))
//         index = index + size
//     }
//     return chunked
// }

module.exports = chunk;