/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/
function encrypt(input) {
  var kamus = {
    a: '!',
    b: '@',
    c: '#',
    d: '$',
    e: '%',
    f: '^',
    g: '&',
    h: '*',
    i: '(',
    j: ')',
    k: '-',
    l: '+',
    m: '1',
    n: '2',
    o: '3',
    p: '4',
    q: '5',
    r: '6',
    s: '7',
    t: '8',
    u: '9',
    v: '0',
    w: '[',
    x: ']',
    y: '{',
    z: '}'
  }
  var kataBaru = ''
  for (var i in input){
    if (input[i].match(/[a-z]/)){
    kataBaru += kamus[input[i]]
  } else {
    kataBaru += input[i]
  }
  }
  return kataBaru
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2
