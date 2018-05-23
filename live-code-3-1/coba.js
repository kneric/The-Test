function deepSum(arr) {
  console.log(arr[0][0][0]);
  var a = []
var hasil = 0;
  for (var i = 0; i < arr.length; i++) {
    var panjang1 = arr[i].length;
      for (var j = 0; j < panjang1; j++) {
        var panjang2 = arr[i][j].length;
          for (var k = 0; k < panjang2; k++) {
            hasil += arr[i][j][k]
          }
      }
      return hasil;
  }
}
//TEST CASE
//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316
