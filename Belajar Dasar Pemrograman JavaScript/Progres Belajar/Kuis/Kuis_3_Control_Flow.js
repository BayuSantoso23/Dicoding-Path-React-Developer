function categorizeNumber(input) {
    // Periksa apakah input adalah bilangan bulat
    if (typeof input !== 'number' || !Number.isInteger(input)) {
        throw new Error("Input harus berupa bilangan bulat");
    }

    // Kategori Nol
    if (input === 0) {
        return "Nol";
    }

    // Kategori Negatif
    if (input < 0) {
        return "Negatif";
    }

    // Kategori Genap
    if (input % 2 === 0) {
        return "Genap";
    }

    // Kategori Prima
    if (isPrime(input)) {
        return "Prima";
    }

    // Kategori Ganjil
    return "Ganjil";
}

// Fungsi pembantu untuk memeriksa bilangan prima
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Contoh penggunaan
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0));  // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
    categorizeNumber('abc');
} catch (error) {
    console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
