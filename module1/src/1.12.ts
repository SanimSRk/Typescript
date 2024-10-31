{
// nabullable type

const searchName=(value:string | null)=>{
if(value){
    console.log('search value is here ')
}else{
    console.log("Search value is not here")
}
}


searchName(null)

const getUnnoneUser=(value:unknown)=>{

    if(typeof value==='number'){
        const convertSpreed=value*1000
        console.log('num of spedd secend',convertSpreed)
    }

    if(typeof value==='string'){

const[valus,unit]=value.split(" ")
const convertSpreed=(parseFloat(valus)*1000)
console.log('num of spedd secend string to number',convertSpreed)
    }
}

getUnnoneUser('500 kelometer')


 const threeNeweror=(message:string):never=>{
throw new Error(message)
}

threeNeweror('himko error de diya re ')
}
