/*

==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

  FUNCTION 'findNotRelative' with PARAMS arr1 AND PARAMS arr2
    SET new Array 'notRelative'
    SET new variable 'i'

    FOR 'i' is EQUAL TO 0 AND 'i' IS LESS THAN the length of arr1 THEN INCREMENT 'i'
        SET 'num' WITH the value of 'arr1' in index 'i'
        IF 'num' IN arr2 IS EQUAL TO CONDITION 'false'
            PUSH 'num' INTO array 'notRelative'


  return 'notRelative'
SET `findNotRelative` function with input `arr1`, `arr2`
FOR each `i`(iteration) in `arr1`
    FOR each `j`(iteration) in `arr2`
        IF `arr1`[i] equals to `arr2`[j]
            SPLICE 1 value in `arr1` from index i
        END IF
    END FOR
END FOR
CALCULATE `arr1` 
*/

function findNotRelative(arr1, arr2) {
    var result = []
    for (var i in arr1){
        for (var j in arr2){
            if (arr1[i] === arr2[j]){
                arr1.splice(i,1)
            }
        }
    }
    return arr1
}

console.log(findNotRelative([ 3, 6, 10, 12, 15 ], [ 1, 3, 5, 10, 16 ])); // [ 6, 12, 15]
// console.log(findNotRelative([ 10, 20, 36, 59 ], [ 5, 10, 15, 59 ])); //[20, 36]
// console.log(findNotRelative([ 1, 2, 3], [2, 1, 3])); //[]
