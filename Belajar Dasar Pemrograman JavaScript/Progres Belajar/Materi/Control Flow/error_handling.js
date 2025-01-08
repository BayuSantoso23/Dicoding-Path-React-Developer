const error = new Error('Terjadi error');
console.error(error);

// Try adn Catch
try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
  } finally{
    console.log('Ini akan selalu dieksekusi apapun yang terjadi')
  }