// Making data inside of class to be private
class MakingCake{
    #flour = 100;
    constructor(ingredients){
        this.ingredients = ingredients;
        // _ ingredients is private (cannot be changed)
        // _ is just code convention
        // this._flour = 100;

        // since 2022 using hash will automatically calls error if you try to change it
        this.#flour = this.#defaultflour();
    }

    set flour(flour){
        console.log('You are not allowed to change the flour amount');
    }

    get flour(){
        // return this._flour;
        return this.#defaultflour();
    }

    #defaultflour(){
        return 100;
    }
}

const cake = new MakingCake('flour');
console.log('Sebelum diubah: ', cake.flour);
cake.flour = 200;
console.log('Setelah diubah: ', cake.flour);
// But in conclusion , either using _ or # still provide the sam result