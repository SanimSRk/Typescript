{
    // type gurds ----------




const add =(params1:string | number, params2:string |number):string | number=>{

if(typeof params1==="number" && typeof params2==='number'){
    return params1+params2

}else{
    return params1.toString()+ params2.toString()
}


}

const result=add('20','40')

console.log(result)



type NormalUser={
    name:string;

}

type AdminUser={
    name:string;
    role:'adimin'
}


const getUser=(user:NormalUser | AdminUser)=>{

    if('role' in user){
    console.log('thad is the admin')
    }else{
        console.log('this is the normal user ')
    }
}
   
const normalUser:NormalUser={
    name:'Sanim Mia'
}
   
const adminUser:AdminUser={
    name:'Sanim',
    role:'adimin'
}


const result2= getUser(normalUser)

console.log(result2)

// 
}