{
    // interface

interface User1{
    name:string;
    age:number;


}
 type user2={
    name:string;
    age:number;
 }

 type AddUerRole=user2&{role:string};

 interface userRole extends User1{
    role:string
 }


const user:userRole={
    name:"sanim",
    age:22,
   role:'dfksalf'
  
}
    
//  object arry 

type Role1 =number[];
interface Name1 {
    [index:number]:string
}

const userName:Name1=['sanim','rohi']
const roleNumber:Role1=[10,20,30,40,60]

type Add =(num1:number,num2:number)=>number
interface Adds{
    (num1:number,num2:number):number
}
const add:Adds=(num1,num2)=>num1*num2

add(10,20)
}

