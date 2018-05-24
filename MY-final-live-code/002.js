/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan

- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap

- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid

*/

/*
PSEUDOCODE
SET function `evenPairSum` with input of `str`
SET `arr` with SPLIT of `str` with empty string ('') parameter
SET `pasangan` with empty array
IF (length of `arr` % 2 equals to 0)
  FOR each `i` (iteration) in `arr`
    IF (NUMBER(`i`) equals to 0 OR NUMBER(`i`) % 2 equals to zero)
      PUSH NUMBER(`arr` index `i` + `arr` index NUMBER(`i`)) to `pasangan
    END IF
  END FOR
END IF

IF (length of `arr` % 2 not equals to 0)
  FOR each `i` (iteration) in `arr`
    IF (NUMBER(`i`) equals to length of `arr` - 1)
      PUSH NUMBER(`arr` index `i` + `arr` index `0`) to `pasang
    ELSE IF (NUMBER(`i`) equals to 0 OR NUMBER(`i`) % 2 equals to zero)
      PUSH NUMBER(`arr` index `i` + `arr` index NUMBER(`i`)) to `pasangan
    END IF
  END FOR
END IF

SET `even` with empty array
FOR each `i` (iteration) in `pasangan`
  IF (`pasangan` index `i` % 2 equals to 0)
    PUSH `pasangan` index `i` to `even
  END IF
END FOR

SET `total` with 0
FOR each `i` in `even
  SET `total` with `total` + `even` index `i`
END FOR

RETURN TOTAL
*/

function evenPairsSum (str) {
  var arr = str.split('')
  var pasangan = []
  if (arr.length % 2 === 0){
    for (var i in arr){
      if (Number(i) === 0 || Number(i) % 2 === 0) {
        pasangan.push(Number(arr[i] + arr[Number(i) + 1]))
      }
    }
  }

  if (arr.length % 2 !== 0){
    for (var i in arr) {
    if (Number(i) === arr.length - 1) {
      pasangan.push(Number(arr[i] + arr[0]))
    }
    else if (Number(i) % 2 === 0) {
      pasangan.push(Number(arr[i] + arr[Number(i) + 1]))
    }
    }
  }
   
  var even = []
  for (var i in pasangan){
    if (pasangan[i] % 2 === 0){
      even.push(pasangan[i])
    }
  }
  
  var total = 0;
  for (var i in even){
    total += even[i]
  }
  return total
}

console.log(evenPairsSum('2044101211')); // 86
// console.log(evenPairsSum('33791363')); // 0
// console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134
