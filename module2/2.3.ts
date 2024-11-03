{
//generic type
type genericArry<T>=Array<T>
// const roleNumber:number=[3,4,5,6]
const roleNumber:Array<number>=[3,4,5,6]

// const mentors:string=['mr.x','mr.y','mr.z']
const mentors:Array<string>=['mr.x','mr.y','mr.z']

// const booleninArry:boolean=[true,false,true]
const booleninArry:genericArry<Boolean>=[true,false,true]


const add=(x:number,y:number):number=>x*y


add(110,20)

const user:genericArry<{name:string,age:number}> =[
    {
        name:'sanim',
        age:21
    },{
        name:'sahadat vai',
        age:25
    }
]

//generic tuple 

type GenericTuple <x,y>=[x,y]

const manush:GenericTuple<string,string>=['mr.y','mr.y']

const userSeril:GenericTuple<number,{name:string,email:string}>=[42420,{name:'sanim hasan',email:"hasansanim45@gmail.com"}]
//

}