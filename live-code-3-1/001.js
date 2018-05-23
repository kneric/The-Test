/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.

Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus

Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2

Output:
  [ 666, 10, 5, 6 ]

RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/

//PSEUDOCODE
// SET function with name 'arrayRemover' with input 'array','index','count'
//   SET 'output' with array
//   SET 'i' with 0
//
//     for i equal to zero to array length
//       if (i equal to 0 OR i greater than equal (index ADD count)) do
//         push array index 'i' to output
//       endif
//
//   return output
//
function arrayRemover (array, index, count) {
  // your code here
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (i < index || i >= (index + count)) {
      output.push(array[i]);
    }
  }
  return output;
}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []
