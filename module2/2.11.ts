{

    // utilitly type

type Person={
    name:string;
    age:number;
    email?:string;
    contactNumber:number;

}
// pick
type NameAgeo=Pick<Person,'name'| 'age'>

// omit
type contactInfo=Omit<Person,'name'|'age'>

//required
type PersonRequired =Required<Person>

    // Partial 

    type PartialChcek=Partial<Person>

    // readOnly
type PersonReadonly=Readonly<Person>

    const person1:PersonReadonly ={
        name:'md sanim mia',
        age:21,
        email:'sanim@gmail.com',
        contactNumber:454

    }

    // Record type

//     interface MyObj{
// obj1:string;
// obj2:string;
//     }
type MyObj =Record<string,string>

    const obj1: MyObj={
        obj1:'dsalf',
        obj2:'fdsafs',
         cc:'sfs'
    }

    const emtryObject:Record<string,unknown>={}
    // 
}