class Ninja {
    constructor(name,health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    drinkSake(){
        this.health += 10;
        console.log(` ${ this.name } drank some sake to increase health by 10, the current health is ${this.health}`);
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

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom
    }
    speakWisdom(){
        this.drinkSake()
        console.log(`Said "What one programmer can do in one month, two programmers can do in two months."`)
    }
    showStats(){
        console.log (`health : ${this.health} speed: ${this.speed} strength: ${this.strength}`)
    }
}
const sensei1 = new Sensei ("Master Splinter", 200, 10, 10)

console.log (sensei1);

sensei1.speakWisdom()

