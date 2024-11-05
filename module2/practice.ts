{
// practice number.1

const result:string="Hello World, I will complete this course successfully and become a Next level Web Developer!"
// console.log(result)

// practice number.2
type LiteralValue={
    name:string;
    age:number;
    role:'admin' | 'user' | 'guest'
}
const Literals=(params:LiteralValue):LiteralValue[]=>{

    return [params]
}

const result1=Literals({
    name:'sanim hasan',
    age:4324,
    role:'admin'
})
// console.log(result1)

// practice number.3

type Person={
    Name:string;
    Address:string;
    hair:string;
    eyeColor:string;
    income: number;
    expense:number;
    hobbies:string;
    familyMembers:number;
    job:boolean;
    skills:string;
    maritalStatus:"meride"| 'single';
    friends:boolean;

}

// practice number.4

interface Book{
  name:string;
  price:number;
  releseDate:string
  
}


interface magazine{
    articles:string;
    stories:string;
    advertisements:string;
    industry:string; 
    todayNews:string;

}

type unionTypeDecler= Book | magazine


const result4 :unionTypeDecler={
   articles:'sfsfs',
   stories:'dsfasfa',
   advertisements:'dfasf'
   ,industry:'sfsaf',
   todayNews:'dfsfsa'


}
type IntersectionType= Book & magazine


const result6:IntersectionType=({ articles:'sfsfs',
    stories:'dsfasfa',
    advertisements:'dfasf'
    ,industry:'sfsaf',
    todayNews:'dfsfsa',
    name:'dasd',
    price:6464,
    releseDate:'dsfsf'})


// practice number.5

const ReverrcString=(params:string):string=>{
const revercValue=params.split('').reverse().join('')
    
return revercValue
}

const result5=ReverrcString('hello')


// practice number.6

const restOpproterFun=(...numbers:number[]):number=>{

    const value=numbers.reduce((ccc,num)=>ccc+num,0)
    return value
}
const restOpproterFuns=(...numbers:string[]):string[] =>{
    const values=numbers.map(res=>res)
return values
}

const result7=restOpproterFun(5,435,4354)

const result8= restOpproterFuns('543','sfsf','fdsafdsa')



// practice number.7
const TypeOfValue=(params:string |number):string|number=>{

return params
}

const result9=TypeOfValue('sfsa')




// practice number.8

type user={
    name:string;
    email:string
}
type admin={
    adminLevel:'next'
}

type AdminUser= user&admin

const describeAdmin=(user: AdminUser): string=>{

    return 'this is the next lave developer'
}
const result10= describeAdmin({name:'dslm',email:'dfsf',adminLevel:'next'})

console.log(result10)


// practice number.9
type Company={
name:string;
employees:{
id:number;
name:string;
address?:{
    city?:string;
    upzala?:string;
}
}
}



const company:Company = {
    name: "Tech Solutions",
    employees: 
        {
            id: 1,
            name: "Alice",
            address: {
                city: "Los Angeles",
            },
        },
};
const companyX:Company = {
    name: "Tech Solutions",
    employees: 
        {
            id: 1,
            name: "Alice",
            address: {
               upzala:'itna'
            },
        },
};

type CompanyXs ={
    name:string;
    employees:{
    id:number;
    name:string;
    address:{
        city?:string;
        upzala?:string;
    }

};
}



const companyXs:CompanyXs={
    name: "Tech Solutions",
    employees: 
        {
            id: 1,
            name: "Alice",
            address: {
               upzala:'itna'
            },
        },
}

const result11=companyXs?.employees?.address?.city?? 'Dhaka'

console.log(result11)



const processData=(data: unknown)=>{

    if(typeof data==='string'){

      const userUpcase= data.toUpperCase()

        return userUpcase
    }

    if(typeof data==='number'){
        
        return data*2
    }else{
        return 'nathing data'
    }
}


const result12=processData(20)
console.log(result12)


const handleError =(message):never=>{
throw new Error(message)
}

// handleError('himko error de diya re ')

const genericFunctions=<T>(params:T):T[]=>{

return [params]
}

const genericBoolien=genericFunctions<boolean>(true)
const genericString=genericFunctions<string>('hello bangladesh i am here now')

interface Persons{
    name:string;
    email:string;
    phone:string;
    age:number
}


const person={
    name:'sanim',
    email:'sanim@gmail.com',
    phone:'645646',
    age:21

}


const genericUsers=genericFunctions<Persons>(person)

console.log(genericUsers)

// const users={
//     name:'sanim hasan',
//     age:21,
//     email:'hsanis@gmaol.com',
//     gender:'male'
// }
type Todo= {
    userId: number;
    id: number;
     title:string;
      completed: boolean;
}

const userDataLoded=async():Promise<Todo>=>{

const userData= await fetch ('https://jsonplaceholder.typicode.com/todos/1')

const lodData=await userData.json()

return lodData
}


// 

}