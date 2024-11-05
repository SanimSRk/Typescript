{
// Abstraction


interface Vehicle1{
    startEngine():void;
    stopEngine() :void;
    move():void
}


class Car implements Vehicle1{

    startEngine(): void {
        console.log("I am the starting the car engine")
    }

    stopEngine(): void {
        console.log("diver stop the car engine")
    }


    move(): void {
        console.log('car is move now ')
    }

    test(){
        console.log('testing the car engine ')
    }
}


const toyotaCar=new Car()

toyotaCar.startEngine()

// const vehicle1:Vehicle1={
//     name:'car',
//     modele:'43-d-34'
// }



    
abstract class Car1{
    abstract startEngine(): void ;
   abstract stopEngine(): void ;
   abstract move(): void;

}


class ToyotaCar extends Car1 {

    startEngine(): void {
        console.log("I am the starting the car engine")
    }

    stopEngine(): void {
        console.log("diver stop the car engine")
    }


    move(): void {
        console.log('car is move now ')
    }


}


const cars =new ToyotaCar()

    // 
}