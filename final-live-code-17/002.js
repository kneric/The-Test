/*
-------------------
The Number Cruncher
-------------------
PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima dua parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil perkalian angka di kedua array tersebut.
Apabila pada array pertama tidak memiliki pasangan indeks yang sama pada array kedua (atau sebaliknya) maka akan dikalikan dengan angka 0.
Kemudian, dari setiap nilai di dalam array tersebut, ambil yang nilainya ganjil, kemudian kalikan semua nilai ganjil tersebut dan return hasil perkalian ganjilnya.


Pola
----
input: [x, y, z, a, b] dan [d, e, f, g]
proses:
[
  (x * d)
  (y * e)
  (z * f)
  (a * g)
  (b * 0) --> karena b tidak memiliki pasangan di array kedua
]

Contoh
-------
Input: [ 3, 5, 2 ] dan [ 7, 5, 4 ]
Proses:
=> [ (3 * 7) , (5 * 5), (2 * 4) ]
=> [ 21, 25, 8 ]
=> nilai ganjil: 21 dan 25
=> 21* 25
Output: 525


Input: [ 1, 2, 3, 2 ] dan [ 3, 5 ]
Proses:
=> [ (1 * 3), (2 * 5), (3 * 0), (2 * 0) ]
=> [ 3, 10, 0, 0 ]
=> nilai ganjil: 3
Output: 3

Input: [4, 5, 8, 2] dan [9, 1, 2, 4, 9, 2]
Proses:
=> [ 63, 5, 16, 15, 0, 0 ]
=> nilai ganjil: 63, 5, 15
=> 63 * 5 * 15
Output: 4725

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
- tidak boleh menggunakan .eval
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE!


  PSEUDOCODE

  SET `hasil` with empty array
  FOR each `i`(iteration) in `arrOperand1`
    IF (`arrOperand1` index `i` equals to `undefined`)
        PUSH 0 to `hasil`
    ELSE
        PUSH the result of (`arrOperand1` index `i` * `arrOperand2` index `i`) to `hasil`
    END IF
  END FOR

  SET `ganjil` with empty array
  FOR each `i` (iteration) in `hasil`
    IF (`hasil` index `i` modulus 2 not equals to 0)
        PUSH `hasil` index `i` to ganjil
    END IF
  END FOR

  IF (the length of `hasil` equals to 0)
    RETURN `hasil`
  END IF

  SET `hasilKali` with 1
  FOR each `i` (iteration) in `ganjil`
    `hasilKali` = `hasilKali` * `ganjil` index `i`
  END FOR

  RETURN `hasilKali`
*/

function multiplyTheOdds(arrOperand1, arrOperand2) {
    var hasil = []
    for (var i in arrOperand1){
        if (arrOperand2[i] === undefined){
            hasil.push(0)    
        } else {
        hasil.push(arrOperand1[i] * arrOperand2[i])
        }
    }
    
    var ganjil = []
    for (var i in hasil){
        if (hasil[i] % 2 !== 0){
            ganjil.push(hasil[i])
        }
    }
    
    if (hasil.length === 0){
        return hasil
    }
    var hasilKali = 1
    for (var i in ganjil){
        hasilKali *= ganjil[i]
    }

    return hasilKali
}

console.log(multiplyTheOdds([3, 5, 2], [7, 5, 4])); //525
console.log(multiplyTheOdds([1, 2], [1])); //1
console.log(multiplyTheOdds([1, 2, 3, 2], [3, 5])); //3
console.log(multiplyTheOdds([7, 5, 8, 3], [9, 1, 2, 5, 9, 2])); //4725
console.log(multiplyTheOdds([], [])); //0
