/**
Buatlah sebuah PSEUDOCODE untuk kasus berikut:

Sebuah mobil sedang berjalan dengan kecepatan 80 km/jam.
Ketika mobil akan menanjak sebuah jalanan/jalur, kecepatan mobil akan berkurang
sesuai dengan kemiringan sudut dari jalan tersebut:
 - sudut kemiringan jalan 0-14 derajat maka kecepatan mobil tidak akan berkurang
 - sudut kemiringan jalan 15-29 derajat maka kecepatan mobil akan berkurang 10 km/jam
 - sudut kemiringan jalan 30-44 derajat maka kecepatan mobil akan berkurang 15 km/jam
 - sudut kemiringan jalan 45-50 derajat maka kecepatan mobil akan berkurang 25 km/jam

Tampilkan kecepatan mobil jika menghadapi tanjakan dengan sudut kemiringan tersebut
**/


//your alogritma/pseudocode here
SET `sudut'
SET `kecepatan0` = 80
SET `kecepatan1`
`kecepatan1` = IF (15 <= `sudut` <= 29){
                    `kecepatan0` - 10
                  } ELSE IF (30 <= `sudut` <= 44){
                    `kecepatan0` - 15
                  } ELSE IF (45 <= `sudut` <= 50) {
                    `kecepatan0` - 25
                  } ELSE {
                    `kecepatan0``
                  }
                  