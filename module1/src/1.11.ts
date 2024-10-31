// ternary operator  // opitonal chaning  // nullish coalescing oprator

{

    const age:number=15;
    if(age>18){
        console.log('adult user')
    }else{
        console.log("not adult")
    }

    const isAdult=age>=18?'adult':'not adult'
    console.log(isAdult)

    // nulish coalescing oprator 
    // null //undifiend>>>>>>>>>>>>decision making
const isAuthcation=undefined

const result= isAuthcation??'guest'
console.log(result)

type addres={
    name:string;
    address:{
        present?:string;
        permanent:string;
    }
   

}

const userAddress :addres={
    name: "Md. Sanim Mia",
    address: {
      permanent:'kishorjung'
    }
  }
  
const present=userAddress?.address?.present ??'not present adderess'

console.log(present)
}