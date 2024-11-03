{
// 
type a1=number
type a2=undefined

type x= a1 extends null ?true:false
type y= a1 extends null ?true:a2 extends undefined?undefined:any

interface sheikh{
    bike:string;
    car:string;
    ship:string
}

type ChekckVickale<T> = T extends keyof sheikh?true:false

type HsasTocktor= ChekckVickale<'bike'>



// 


}