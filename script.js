class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= this.power;
    }
}
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit){
            if (this.stat == "res"){
                target.res += this.magnitude;
            }
            else{
                target.power += this.magnitude;
            }
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", +3);
hardAlgo.play(redBeltNinja);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandled = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
unhandled.play(redBeltNinja);
const pairProgramming = new Effect("Pair Programming", 3, "Increase Target's power by 2", "power", +2);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);