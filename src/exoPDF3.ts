
interface Pet {
    name: string;
    age: number;
    speak(): string;
}

class Dog implements Pet {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    speak(): string {
        return "Woof!";
    }
}

class Cat implements Pet {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    speak(): string {
        return "Meow!";
    }
}

class Parrot implements Pet {
    name: string;
    age: number;
    words: string[];
    constructor(name: string, age: number, words: string[]) {
        this.name = name;
        this.age = age;
        this.words = words;
    }

    speak(): string {
        return  this.words[Math.floor(Math.random() * this.words.length)];
    }
}

let dog = new Dog("Rex", 5);
let cat = new Cat("Garfield", 3);
let parrot = new Parrot("Kiki", 2, ["Hello", "Hi", "Bonjour"]);

let pets: Pet[] = [dog, cat, parrot];

for (let pet of pets) {
    console.log(pet.name + " says " + pet.speak());
}
