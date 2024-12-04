function factorial(num, pembagiSaatIni = 1, factors = []) {
  if (pembagiSaatIni > num) {
    return factors;
  }
  if (num % pembagiSaatIni === 0) {
    factors.push(pembagiSaatIni);
  }
  return factorial(num, pembagiSaatIni + 1, factors);
}

// Jangan hapus kode di bawah ini!
export default factorial;
