class Ninja {
    constructor(name,health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    drinkSake(){
        this.health += 10;
        console.log(` ${ this.constructor.name } drank some sake to increase health by 10, the current health is ${this.health}`);
    }
    sayName(){
        const ninja1 = new Ninja( "Clint", 100 );
        console.log (this.name)
    }
    showStats(){
        const ninja1 = new Ninja( "Clint", 100 );
        console.log (`health : ${this.health} speed: ${this.speed} strength: ${this.strength}`)
    }
}

const ninja1 = new Ninja( "Clint", 100 );


ninja1.sayName();
ninja1.showStats();
