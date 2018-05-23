/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
    var arrKata =[]
    var noSpace = ''
    var countSpace = 0
    for (var i in words){
        if (words[i] !== ' '){
            noSpace += words[i]
        } if (words[i] === ' ' || i == (words.length - 1)){ 
            countSpace ++
            arrKata.push(noSpace)
            noSpace = ''
        }
    }
    var rata2 = Math.round((words.length - countSpace) / arrKata.length)
    var result = []
    for (var i in arrKata){
        if (arrKata[i].length === rata2){
            result.push(arrKata[i])
        }
    }

    return result

}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []
