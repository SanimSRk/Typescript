{

    //  oop  Inheritance

    class Parent{
name:string;
age:number;
address:string;

constructor(name:string,age:number,address:string){
    this.name=name,
    this.age=age,
    this.address=address

}

getSlepInHours(getHours:number){

console.log(`${this.name} is the student he is ${this.age} yer old.her sleping hous is ${getHours}`)
}

    }




    class Students extends Parent{
        constructor(name:string,age:number,address:string){
            super(name,age,address)
        }
    }

const student2=new Students('hasan mia',21,'dsafs')

  


class Teacher extends Parent {
designation:string;
constructor(name:string,age:number,address:string,designation:string){
   super(name,age,address)
  this.designation=designation

}
takeClass(numberOfClass:number){
console.log(`${this.name} will take the ${numberOfClass} class`)

}

    }

    


const teacher1=new Teacher('Hasan Mia',45,'bangladesh','fdslaf')

teacher1.takeClass(4)


    // 
}