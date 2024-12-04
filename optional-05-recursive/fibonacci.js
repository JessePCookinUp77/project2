function fibonacci(n, hasil = [0, 1]) {
  if (hasil.length >= n) {
    return hasil.slice(0, n);
  }
  const nextNumber = hasil[hasil.length - 1] + hasil[hasil.length - 2];
  hasil.push(nextNumber);

  return fibonacci(n, hasil);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
