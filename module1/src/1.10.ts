{
// union type 


type FontendDeveloper='fakibaz developer' | 'junior developer'

const newDeveloper:FontendDeveloper= 'junior developer'

console.log(newDeveloper)

type User={
    name:string;
    email?:string ;
    gender:'male'| 'female';
    bloodGroup:'o+'|'b+'|'ab'
}

const user:User={
    name:'sanim',
    email:'hasansanim@gmail.com',
    gender:'male',
    bloodGroup:'o+'
}

type FrontendDeveloper={
    skills:string[];
    designation1:"froentedeveloper"
}
type BackenddDeveloper={
    skills:string[];
    designation:"Backend developer"
}

type FullStackDeveloper= FrontendDeveloper & BackenddDeveloper

const fullStackDevelopers:FullStackDeveloper={
skills:['html','css','react','express'],
designation1:'froentedeveloper',
designation:'Backend developer'
}
}