class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }
    
    speak() {
        console.log(this.name,'says',this.voice);
    }
}

let cachorro = new Animal('Rodolfo', 'Auau');
let gato = new Animal('Gato', 'Miau');

cachorro.speak();
cachorro.speak();
cachorro.speak();
gato.speak();
gato.speak();
gato.speak();