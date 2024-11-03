{
    // promise
    type Todo= {
        userId: number;
        id: number;
         title:string;
          completed: boolean;
    }

const getTodo=async():Promise<Todo> =>{
    const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data=await res.json()
    return data
    // console.log(data)
}

getTodo()

type Somthing={somthing:string}
    const createPromise=():Promise<Somthing>=>{

        return new Promise<Somthing>((res,rej)=>{

            const data :Somthing={somthing:'somthingdfds'};

            if(data){
                res(data)
            }else{
                rej('filed to lode data')
            }
        })


    }


    const showData=async(): Promise<Somthing>=>{

        const data :Somthing=await createPromise()
        return data
        // console.log(data)
    }


    showData()








    // 
}