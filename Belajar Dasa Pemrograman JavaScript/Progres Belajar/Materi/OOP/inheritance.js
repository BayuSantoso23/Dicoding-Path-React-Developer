class hp{
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charge(){
        console.log(`Charging : ${this.model}`);
    }
}

class Andro extends hp{
    splitScreen(){
        console.log('Andro have splitscreen')
    }
}

class iOs extends hp{
    airdrop(){
        console.log('ios have airdrop')
    }
}

// Instance Class
const andro = new Andro('black', 'samsung', 'galaxy');
const ios = new iOs('white', 'apple', 'iphone');

// Using superclass methods
ios.charge();
andro.charge();

// Using childclass methods
ios.airdrop();
andro.splitScreen();

// Chechking if the object is instance of the class
console.log(andro instanceof hp);
console.log(ios instanceof hp);