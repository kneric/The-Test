/**
=====================================
Modular Functions: Calculate Number in Object
=====================================

[INSTRUKSI]

Diberikan function kali, tambah, bagi, kurang, dan calculate

Implementasikan function calculate untuk menghitung angka-angka yang ada di dalam object,
operator perhitungan tersedia di dalam object.
ASUMSI:
 - keyName operand1, operand2 dan operator selalu ada
 - value dari operand1 dan operand2 selalu number
 - value dari operator berupa string: '+', '-', '*' atau '/'

 Function calculate akan me-return sebuah array yang berisi hasil perhitungan dari object tersebut.

contoh 1:
input: [ {
              operand1: 5,
              operand2: 10,
              operator: '*'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '-'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '/'
            }
          ];
output: [50, -7, 0.3]

contoh 2:
input: []
output: []

*/

function kali(operand1, operand2) {
  return (operand1 * operand2)
}

function tambah(operand1, operand2) {
  return (operand1 + operand2)
}

function kurang(operand1, operand2) {
  return (operand1 - operand2)
}

function bagi(operand1, operand2) {
  return (operand1 / operand2)
}

function calculate(arrNumber) {
  var final = []
  for (var i in arrNumber){
    var operand1 = arrNumber[i].operand1
    var operand2 = arrNumber[i].operand2
    if (arrNumber[i].operator === '*'){
      var result = kali (operand1, operand2)
      final.push(result)
    } else if (arrNumber[i].operator === '+'){
      var result = tambah (operand1, operand2)
      final.push(result)
    } else if (arrNumber[i].operator === '-'){
      var result = kurang (operand1, operand2)
      final.push(result)
    } else if (arrNumber[i].operator === '/'){
      var result = bagi (operand1, operand2)
      final.push(result)
    }
  }
  return final
}

console.log(calculate([{ operand1: 5, operand2: 10, operator: '*' }, { operand1: 3, operand2: 10, operator: '-'}]));
//[50, -7]
console.log(calculate([])); //[]
