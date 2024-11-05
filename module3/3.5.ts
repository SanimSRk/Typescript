{
// instanceof gurd 

class Adimale{
    name:string;
    species:string;
  

    constructor( name:string,species:string){
        this.name=name,
       this.species=species
    }

    makeSound(){
        console.log('I am makeing the sound')
    }
}



class Dog extends Adimale{
    constructor(name:string,species:string){

        super(name,species)
    }

    makBarking(){
        console.log("I am barking ");
        
    }
}


class Cat extends Adimale{
    constructor(name:string,species:string){

        super(name,species)
    }

    makMewo(){
        console.log("I am Mewo mewo ");

    }
}


const isDogs=(andimal:Adimale):andimal is Dog =>{

    return andimal instanceof Dog
}

const isCat=(andimal:Adimale):andimal is Cat=>{

    return andimal instanceof Cat
}


const getAnimil=(andimal:Adimale)=>{

    if(isDogs(andimal)){
        andimal.makBarking()
    }else if(isCat(andimal)){
        andimal.makMewo()
    }else{
        andimal.makeSound()
    }
}


const dong=new Dog('dog vai ','dong')
const cat=new Cat('cat bro ','cat')

getAnimil(dong)




// 


}