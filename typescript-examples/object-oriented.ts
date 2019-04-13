class Emoji {
    _prev;
    constructor(private _icon: string) {}

    get icon() {
        return this._icon;
    }

    get prev() {
        return this._prev;
    }

    change(val) {
        this._prev = this._icon;
        this._icon = val;
    }

    static addEmojiTo(val) {
        return val.toString() + '\u{1F600}';
    }
}

function objectOrientedExample() {
    const sun = new Emoji('\u{1F31E}');
    console.log(sun.icon, sun.prev);

    sun.change('\u{1F304}');
    console.log(sun.icon, sun.prev);
}

// Inheritance vs composition
// Inheritance, smaller pieces extend from parent
// Composition, small bits work together to make larger wholes

class SuperEmoji extends Emoji {
    superEmoji;

    constructor(emoji) {
        super(emoji);
        this.superEmoji = `\u{1F9B8} ${emoji}`
    }

    superPower() {
        return `${this.superEmoji} can fly!`;
    }
}

// Angular allows for composition by inject services and creating directives in templates 

// One way to do composition is to merge objects/functions -- referred to as a mixin pattern

const hasName = (name) => {
    return { name }
}

const canSayHi = (name) => {
    return {
        sayHi: () => `Hello, ${name}`
    }
}

const Person = (name) => {
    return { 
        ...hasName(name),
        ...canSayHi(name),
    }
}

// THis is not as readable as classes... but TS has some support for this!

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}

class CanSayHi {
    name;
    sayHi() {
        return `Hello, ${this.name}`
    }
}

class HasSuperPower {
    heroName;
    superpower() {
        return `${this.heroName} can fly!`;
    }
}

class SuperHero implements CanSayHi, HasSuperPower {

    heroName;
    constructor(public name) {
        this.heroName = `SUPER ${name}`;
    }

    sayHi: () => string;
    superpower: () => string;
}

applyMixins(SuperHero, [HasSuperPower, CanSayHi]); /// BOOMMMM!!!
