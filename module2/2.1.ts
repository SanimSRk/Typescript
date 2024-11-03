{
    // 
//  Type assertion
let anything:any;

anything="Next Level development";

(anything as string)

const kgTOm=(value:string|number):string|number|undefined=>{
    if(typeof value==='string'){
        const convertValue=parseFloat(value)*1000
        return `this is the convert value ${convertValue}`
    }
    if(typeof value==='number'){
       
        return value*1000
}

const result1= kgTOm(1000) as number
const result2= kgTOm("1000") as string

// 
}