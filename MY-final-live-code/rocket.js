/*
**************
FASTEST CLIMBER
**************
Fastest climber adalah sebuah function yang menerima sebuah parameter berupa string.
Dimana pada string tersebut, terdapat nama nama pemanjat tebing, dan waktu nya dalam bentuk jam dan menit.
Function dibawah akan mereturn nama pemanjat tebing tercepat.

RULES:
 - DILARANG menggunakan REGEX
 - DILARANG menggunakan muilt in function .reduce(), .map(), .filter()
 - DILARANG menggunakan built in function .indexOf(), dan .include()
 - DILARANG menggunakan built in function .split()

*/

function fastestClimber (string) {
  var index = []
  for (var i in string){
    if (string[i] === ','){
      index.push(Number(i))
    }
  }
  index.push(string.length - 1)
  
  var orang = [] 
  for (var i in index){
    if (i == 0){
      orang.push([string.slice(0,index[i])])
    } else if (i != 0){
      orang.push([string.slice(index[Number(i) - 1], index[i])])
    }
  }

  return orang
}

console.log(fastestClimber('Kyle: 1jam 30menit,Nein: 2jam 30menit,Light: 0jam 59menit')) // Light
// console.log(fastestClimber('Retsu: 1jam 30menit,Tokichi: 2jam 01menit,Go: 1jam 59menit')) // Retsu
// console.log(fastestClimber('Awtian: 1jam 01menit,Pipu: 1jam 11menit,Caca: 1jam 59menit')) // Awtian
