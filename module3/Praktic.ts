{
//  problem solve number 1 

const repeatString=(str:string,num:number):string=>{

    let value=[]
    for(let i=0; i<num;i++){

value.push(str)
    }

return value.join("")

 
}

// console.log(repeatString('hello',4))

//  problem solve number 2


const findLargestNumber=(num:number[]):number=>{
    console.log()
const values=Math.max(...num)
    return values
  
}

// console.log(findLargestNumber([34,344,434,34,43]))


//  problem solve number 3

const filterEvenNumbers=(num:number[]):number[]=>{
    let value=[]
    for(const val of num){
     if(val % 2==0){
        value.push(val)
     }
    }

    return value

}

// console.log(filterEvenNumbers([50,40,1,3,5,9]))


const filterOadNumbers=(num:number[]):number[]=>{
    let value=[]
    for(const val of num){
     if(val % 2==1){
        value.push(val)
     }
    }

    return value

}

// console.log(filterOadNumbers([50,40,1,3,5,9,11,12,20]))

//  problem solve number 4

const reverseArray=<T>(parms:T[]):T[]=>{

return parms.reverse()
}


// console.log(reverseArray(["342",'234']))



//  problem solve number 5

interface Student{
    name:string;
    age:number;
    grades:number[];
}

const student1: Student = {     
    name: "Bob",     
    age: 17,     
    grades: [75, 80, 82, 88, 90]
           };




const calculateAverageGrade=(parms:Student):number=>{

const reducValue=parms.grades.reduce((valuX,valueY)=>valuX+valueY,0)/parms.grades.length

return reducValue

}


// calculateAverageGrade(student1)


//  problem solve number 6

type Book={
    title:string;
    author:string;
    publishedYear:number;

}

const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2020
};


const isRecentBook=(books:Book):boolean=>{

    const publishedYear=books.publishedYear
    const currentYears=new Date().getFullYear()

const needYerar=currentYears-publishedYear

    if(needYerar<=5){
      return true
    }else{
       return false
    }
}

// console.log(isRecentBook(book1))



//  problem solve number 7


const logString=(parmms:unknown)=>{

    if(typeof parmms==='string'){

        console.log(parmms)
    }else {

        console.log('Input is not a string.')
    }

}


// logString('Hello world')


//  problem solve number 8

class Car{
    brand:string;
     model:string;
     year:number;

     constructor(brand:string,model:string,year:number){
        this.brand=brand,
        this.model=model,
        this.year=year,
        console.log(`Your car model is:  ${this.year} ${this.brand} ${this.model}`)
     };

}

 new Car('roles royel','red car',2020)



// 

}