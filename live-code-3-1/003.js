/**

  Diberikan sebuah function countMe yang menerima sebuah parameter array of string.
  Function ini akan me-return object literal dimana isi dari object tersebut berisi
  jumlah karakter pada array of string

  Contoh:
  input: [ 'dimitri', 'awtian', 'icha' ]
  output:
    {
      d: 1,
      i: 5,
      m: 1,
      t: 2,
      r: 1,
      a: 3,
      w: 1,
      n: 1,
      c: 1,
      h: 1
    }
**/

function countMe(names) {
  //your code here
  var obj = {}
  var gabung = names.join();
  for (var i = 0; i < gabung.length; i++) {
    for (var j = 0; j < gabung.length; j++){
      var index = 1;
      if (i !== j) {
        if (gabung[i] === gabung[j]) {
          index += 1;
        }
      }
    }
    if (gabung[i] !== ',' && gabung[j] !== ',')
    {obj[gabung[i]] = index;}
  }
  return 
}

console.log(countMe([ 'dimitri', 'awtian', 'icha' ]));
//{
//   d: 1,
//   i: 5,
//   m: 1,
//   t: 2,
//   r: 1,
//   a: 3,
//   w: 1,
//   n: 1,
//   c: 1,
//   h: 1
// }

console.log(countMe([ 'dimas', 'ryan', 'akbar', 'tama']));
// {
//   d: 1,
//   i: 1.
//   m: 2,
//   a: 6,
//   s: 1,
//   r: 2,
//   y: 1,
//   n: 1,
//   k: 1,
//   b: 1,
//   t: 1
// }
