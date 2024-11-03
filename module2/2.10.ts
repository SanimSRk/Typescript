{
// mapped types

const arryOfNumber:string[]=["10","21","45","76","89"]

const arryofSrring:number[]=arryOfNumber.map((number)=> parseInt(number)
)

console.log(arryofSrring)

type AreyaNumber ={
    height:number;
    with:number;
}

interface ValeKy {
    height:string;
    width:number
}

type AreyaString<T>={
    [key in keyof T] :T [key]
}

const areya1:AreyaString<ValeKy>={
    height:'1000',
    width:100
}


// 

}