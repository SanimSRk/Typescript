{

    // generic constration type

    type Veheicle={
        bike:string;
        car:string;
        ship:string;

    }

    type Owner='bike'| 'car'| "ship" // maniluy

    type Owner2= keyof Veheicle


const getPopertyValues=<T,Y extends keyof T>(obj:T,key:Y)=>{

return obj[key]
}

const user={
    name:'sanim hasan',
    age:21,
    address:'bdki'
}

const result1=getPopertyValues(user,"name")






    // 
}