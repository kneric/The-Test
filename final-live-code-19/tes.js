function angkaPrima(angka) {
  if (angka < 2) {
    return false;
  }
  for (var i = 2; i < angka; i++) {
    if (angka % i === 0) {
      return false;
    }
  }
  return true
}

function numberPrimeCruncher(input) {
  var prima = []
  for (var i = 0; i <= input; i++) {
    if (angkaPrima(i)) {
      prima.push(i)
    }
  }  
  console.log (prima)
}

numberPrimeCruncher(50)
