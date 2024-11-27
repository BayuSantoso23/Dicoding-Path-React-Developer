// Changing child class property or method from parent class
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
    // Overriding constructor
    constructor(color, brand, model, device){
        super(color, brand, model);
        this.device = device;
    }

    charge(){
        // Overriding method
        // if super not written then parent class method won't get called
        super.charge();
        console.log(`Andoid ${this.model} provide fast charging`);
    }

    splitScreen(){
        console.log('Andro have splitscreen')
    }
}

const Android = new Andro('Black', 'Samsung', 'S10', 'TV');
console.log(Android.device);
Android.charge();