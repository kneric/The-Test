
var name; // silakan berikan nilai bebas
var age; // silakan berikan nilai bebas
var money; // silakan berikan nilai bebas

steak = 300000
discount = 0.3

name = 'cireng' 
age = 54
money = 500000

if (name !== '') {
  if (age < 55){
    if (money < steak) {
      console.log('Uang tidak cukup. Anda harus pulang');
    } else {
      console.log ('Anda bisa pesan steak. Sisa uang anda: '+(money-steak));
    }
  } else {
    if (money < steak) {
      console.log('Uang tidak cukup. Anda harus pulang')
    } else {
      console.log('Anda bisa pesan steak. Sisa uang anda: ' + (money-(steak*(1-discount))))
    }
  }
} else {
  console.log('Anda tidak boleh masuk!')
}