{
    // generic funcation 
const createGenericFunction=<T>(params:T):T[]=>{
return [params]

}

interface objectValue{
    name:string;
    email:string;
    role:number
}

type objectValues={
    name:string;
    email:string;
    role:number
}

const valueBooline= createGenericFunction<boolean>(true)
const result1= createGenericFunction<string>('hello bangladesh this is sanim')
const result2= createGenericFunction<objectValues>({name:'Sanim Hasan',email:'hasansanim540@gmail.com',role:96})


const createGenericFunctionTopule=<T,Y>(params1:T,params2:Y):[T,Y]=>{
    return [params1,params2]
    
    }

    interface ofobjectValue{
        name:string;
        email:string;
        role:number
    }
    
    type ofobjectValues={
        name:string;
        email:string;
        role:number;
        userName:string;
    }
    

    const result3= createGenericFunctionTopule<string,number>('hello bangladesh this is sanim',423)
    const result4=createGenericFunctionTopule<ofobjectValue,ofobjectValues>({name:'Sanim Hasan',email:'hasansanim540@gmail.com',role:96},{name:"sanim",email:'hasansamim@gmail.com',role:45345,userName:'dskfl'})

    const addCuressStudentof=<T>(student:T)=>{
const course='Next level web development'

return {
    ...student,
    course

}

interface Student1 {
    name:string;
    email:string;
    devType:string;
    role:number;
    buyCheck:boolean;
}

const student1=addCuressStudentof<Student1>({name:"sanim mia",email:'sanim@gmail.com',devType:'NLWD',role:454,buyCheck:true
})
type Student2= {
    name:string;
    email:string;
    devType:string;
    role:number;
    buyCheck:boolean;
    gender:string;
}

const student2=addCuressStudentof<Student2>({name:"sanim mia",email:'sanim@gmail.com',devType:'NLWD',role:454,buyCheck:true,gender:'male'
})

    }
    // 
}