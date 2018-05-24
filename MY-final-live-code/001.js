/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/


// Algoritma / Pseudocode here..
/*

SET function `tangkapPenjahat` with input of `input`
SET `nyawa` with 3
SET `tangkapan` with 0
FOR each `i` (iteration) in `input` array
  IF (`input` index `i` equals to `@`)
    SET `nyawa` with `nyawa` - 1
  IF (`input` index `i` equals to `Villain` AND `nyawa` > 0)
    SET `tangkapan` with `tangkapan` + 1
  }
  END IF
END FOR
IF (`nyawa` = 0)
  RETURN "Ooops, you die. You got" + `tangkapan` + "villains"
ELSE
  RETURN "Nice work, detective! You got" + "all villains: " + `tangkapan` 

*/