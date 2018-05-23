/*

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya,
sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts)
  Parameter pertama adalah budget Sergei, yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh.
  Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

Asumsi:
- Semua angka akan memiliki nilai >= 0, dan array tidak akan pernah kosong.

RULE:
 WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
SET function name with `howManyGifts` with input `maxBudget`, `gifts
SORT `gifts` ascendingly with sort function
SET `count` with 0
SET `moneyLeft` with `maxBudget`

FOR each i(iteration) in `gifts`
	IF (`moneyLeft` greater than or equal to `gifts`[i]) DO
		SET `moneyLeft` with `moneyLeft` - `gifts`[i]
		SET `count` with `count` + 1
	END IF
END FOR

COMPUTE `count`
*/

function howManyGifts(maxBudget, gifts){
	gifts.sort(function(a,b){return a>b})
	var count = 0
	var moneyLeft = maxBudget
	for (var i in gifts){
		if(moneyLeft >= gifts[i]){
			moneyLeft -= gifts[i]
			count ++
		}
	}
	return count
}

console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(0, [10000, 3000])); // 0



// --------------------------------       THE DIFICULT WAY      ------------------------------------------




/// ---------------------

/*

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya,
sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts)
  Parameter pertama adalah budget Sergei, yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh.
  Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

Asumsi:
- Semua angka akan memiliki nilai >= 0, dan array tidak akan pernah kosong.

RULE:
 WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

  FUNCTION howManyGifts with PARAMS maxBudget AND PARAMS: gifts

  SET new Array ‘maxGift’
  SET new Array Object ‘possibility’

  FOR i equals 0 and I LESS THAN length of gifts then INCREMENT I
  	SET ‘sum’ with 0
  	SET ‘count’ with 0
  	SET ‘new Array arrpos’

  	FOR j equals to 0 and j IS LESS THAN length of gifts then INCREMENT j
  		IF i IS NOT EQUAL to j 			IF ‘sum’ IS EQUAL TO AND LESS THAN ‘maxBudget
  				IF value of ‘gift’ in index j is LESS than ‘maxBudget’
  					CALCULATE ‘sum’ add with value of ‘gift’ in index j
  					STORE the result of calculation in ‘sum’
  					INCREMENT ‘count’ WITH 1
  					IF ‘sum’ is BIGGER than ‘maxBudget’
  						REDUCE sum with the value of gift in index j
  						DECREMENT ‘count’ with 1
  						PUSH ‘sum’ and ‘count’ INTO array ‘arroyos’
  						SET object index I of ‘possibility’ with ‘arrpos’
  						BREAK
  					ELSE IF ‘sum’ IS EQUAL TO ‘maxBudget’
  						PUSH ‘sum’ and ‘count’ INTO array ‘arroyos’
  						SET object index I of ‘possibility’ with ‘arrpos’
  						BREAK

  FOR ‘key’ of ‘possibility’ IN OBJECT ‘possibility’
  	SET ‘max’ with the value of ‘possibility’ in ‘key’ in index 1
  	PUSH ‘max’ to array ‘maxGift’

  FOR ‘m’ is equal to 0 AND ‘m’ IS LESS than length of ‘max gift’ THEN INCREMENT ‘m’
  	SET ‘num1’ with the value of array ‘maxGift’ in index ‘m’
  	SET ‘num1’ with the value of array ‘maxGift’ in index ‘m added with 1’

  	SORT array ‘maxGift’ WITH FUNCTION params num 1 and num 2
  		RETURN ‘num1’ IF ‘num1’ IS LESS THAN ‘num2’

  IF the length of ‘maxGift’ IS NOT EQUAL TO 0
  	RETURN the value of index 0 in ARRAY ‘maxGIft’
  ELSE
  	RETURN 0
*/

// function howManyGifts(maxBudget, gifts){
//   let maxGift = [];
//   let possiblility = {};
//
//   for (let i=0; i<gifts.length; i++) {
//       var sum = 0;
//       var count = 0;
//       var arrpos = [];
//       for (let j=0; j<gifts.length; j++) {
//           if (i !== j) {
//                 if (sum <=maxBudget) {
//                     if (gifts[j] < maxBudget) {
//                         sum = sum +gifts[j];
//                         count += 1;
//                         if (sum > maxBudget) {
//                             sum = sum - gifts[j];
//                             count = count -1;
//                             arrpos.push(sum, count);
//                             possiblility[i] = arrpos;
//                             break;
//                         } else if (sum === maxBudget) {
//                             arrpos.push(sum, count);
//                             possiblility[i] = arrpos;
//                             break;
//                         }
//                     }
//                 }
//
//           }
//     }
//   }
//
//   for (let key in possiblility) {
//       let max = possiblility[key][1];
//       maxGift.push(max);
//   }
//
//   for (m=0; m<maxGift.length; m++) {
//       var num1 = maxGift[m];
//       var num2 = maxGift[m+1];
//       maxGift.sort(function(num1, num2) { return num1 < num2 });
//   }
//
//
//   if (maxGift.length !== 0) {
//       return maxGift[0];
//   } else {
//     return 0;
//   }
// }
//
// console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
// console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
// console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
// console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
// console.log(howManyGifts(0, [10000, 3000])); // 0
