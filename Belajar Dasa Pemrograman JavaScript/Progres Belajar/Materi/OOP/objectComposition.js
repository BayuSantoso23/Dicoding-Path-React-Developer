class Character {
    constructor(name, role, health, position) {
        this.name = name;
        this.role = role;
        this.health = health;
        this.position = position;
    }

    canMove() {
        console.log(`${this.name} moves to ${this.position}`);
    }
}

// Action Mixins
function canAttack(character) {
    return {
        attack: () => {
            console.log(`${character.name} attacks!`);
        }
    };
}

function canDefend(character) {
    return {
        defend: () => {
            console.log(`${character.name} defends!`);
        }
    };
}

function canHeal(character) {
    return {
        heal: () => {
            console.log(`${character.name} heals!`);
        }
    };
}

// Creating Characters
function createFighter(name) {
    const fighter = new Character(name, 'fighter', 100, 'ST');
    return Object.assign(fighter, canAttack(fighter));
}

function createTank(name) {
    const tank = new Character(name, 'tank', 500, 'CM');
    return Object.assign(tank, canDefend(tank));
}

function createMage(name) {
    const mage = new Character(name, 'mage', 50, 'CB');
    return Object.assign(mage, canHeal(mage));
}

function createOverPower(name) {
    const OverPower = new Character(name, 'OverPower', 50, 'CB');
    return Object.assign(OverPower, canHeal(OverPower), canAttack(OverPower), canDefend(OverPower));
}

// Instance Creation
const fighter = createFighter('Fighter');
fighter.attack();  // Fighter attacks!
fighter.canMove(); // Fighter moves to ST

const op = createOverPower('alek');
op.attack();
op.defend();
op.heal();
op.canMove();
console.log(op.name);