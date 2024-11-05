{
    //  classe oration  oop 


class Adimale{
    // name:string;
    // spacie:string;
    // sound:string;

    constructor(public name:string,public spcie:string,public sound:string){
        // this.name=name,
        // this.spacie=spcie
        // this.sound=sound

    }

    makeSound(){
        console.log(`the ${this.name} says ${this.sound}`)
    }
}


const dog=new Adimale('tiger','dong','ghew ghew')
const cat=new Adimale('liger','cat','mewo mewo')

// console.log(cat.name)

dog.makeSound()

// 
}