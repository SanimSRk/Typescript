{
// 

class Peroson{
    getSleep(){
        console.log('I am sleeping  for 8 hours per day');
    }
}

class Student{
    getSleep(){
        console.log('I am sleeping  for 7 hours per day');
    }
}

class Developer{
    getSleep(){
        console.log('I am sleeping  for 4.30 hours per day');
    }
}
const getSleepingHours=(param:Peroson)=>{
param.getSleep()
}
const person1= new Peroson()
const person2= new Student()
const person3= new Developer()



getSleepingHours(person1)
getSleepingHours(person2)
getSleepingHours(person3)




class Shape{

getAreya():number{

return 0
}

}

class Circle extends Shape{
redious:number;

constructor(redious:number){
    super()
    this.redious=redious
}


getAreya(): number {
    
    return Math.PI*this.redious*this.redious
}


}

class Rectangle extends Shape{
height:number;
width:number;

constructor(height:number, width:number){
    super()
    this.height=height
    this.width=width
}


getAreya(): number {
    
    return this.height*this.width
}


}



const getShapeAreya=(param:Shape)=>{
console.log(param.getAreya())
}

const result1=new Shape()
const result2=new Circle(20)
const result3=new Rectangle(20,30)

getShapeAreya(result1)
getShapeAreya(result2)
getShapeAreya(result3)

// 



}