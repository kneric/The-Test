/*
==================================
Array Mastery: Who's the winner?
==================================
Nama:________
[INSTRUKSI]
Ada dua tim, Gryffindor dan Slytherin yang sedang bertarung pada sebuah kompetisi futsal.
Function whosTheWinner akan menerima suatu parameter beruapa array berisikan nama
tim yang sudah mencetak gol. Apabila pada array jumlah "Gryffindor" lebih banyak
daripada "Slytherin" maka function akan mereturn "Gryffindor Juara Futsal Hogwarts 2018".
Sedangkan jika jumlah "Slytherin" lebih banyak daripada "Gryffindor" maka function
akan mereturn "Slytherin Juara Futsal Hogwarts 2018". Jika jumlah kedua tim sama,
maka function akan mereturn "Draw, pertandingan akan dilanjutkan dengan penalty kick!"

Let's start our own wizardy, shall we?

[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma/pseudocode atau
  algoritma/pseudocode tidak match dengan kode maka indikasi soal tidak
  diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!

*/

/* PSEUDOCODE

* STORE and SET `g` = "Gryffindor"
* STORE and SET `s` = "Slytherin"
* STORE and SET `gTotal` = length of g
* STORE and SET `sTotal` = length of s
* STORE and SET `nilaiG` = 0
* STORE and SET `nilaiS` = 0
* STORE and SET `i` = 0
* REPEAT 
    IF `goals[i] == `gTotal` THEN
      `nilaiG` + 1
    ELSE 
      `nilaiS` +1
    END IF
    i ++
* UNTIL length of `goals` < i
* IF `nilaiG` > `nilaiS` THEN
    DISPLAY 'Gryffindor Juara Futsal Hogwarts 2018'
  ELSE IF `nilaiS` > `nilaiG` THEN
    DISPLAY 'Slytherin Juara Futsal Hogwarts 2018'
  ELSE 
    DISPLAY Draw, pertandingan akan dilanjutkan dengan penalty kick!'

    */

function whosTheWinner(goals) {
  var g = 'Gryffindor'
  var s = 'Slytherin'
  var gTotal = g.length
  var sTotal = s.length
  var nilaiG = 0
  var nilaiS = 0
  for (var i=0; i < goals.length; i++){
    if (goals[i].length == gTotal){
      nilaiG += 1
    } else {
      nilaiS += 1
    }
  }
  if (nilaiG > nilaiS){
    return 'Gryffindor Juara Futsal Hogwarts 2018'
  } else if (nilaiS > nilaiG){
    return 'Slytherin Juara Futsal Hogwarts 2018'
  } else {
    return 'Draw, pertandingan akan dilanjutkan dengan penalty kick!'
  }
}

// TEST CASES
console.log(whosTheWinner(["Gryffindor", "Slytherin", "Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
// console.log(whosTheWinner(["Gryffindor", "Gryffindor", "Slytherin", "Slytherin", "Gryffindor"])); // "Gryffindor Juara Futsal Hogwarts 2018"
// console.log(whosTheWinner(["Gryffindor", "Slytherin"])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
// console.log(whosTheWinner([])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
// console.log(whosTheWinner(["Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
