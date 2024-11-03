{
    // constraint type

    const addCuressStudentof=<T extends{id:number;name:string;email:string}>(student:T)=>{
        const course='Next level web development'
        
        return {
            ...student,
            course
        
        }


        const result6=addCuressStudentof({
            id:233,
            name:'hansan',
            email:'hasansanim@gmail.com',
        
        })
        
        interface Student1 {
            name:string;
            email:string;
            devType:string;
            role:number;
            buyCheck:boolean;
        }
        
        const student1=addCuressStudentof<Student1>({name:"sanim mia",email:'sanim@gmail.com',devType:'NLWD',role:454,buyCheck:true
        })
        type Student2= {
            name:string;
            email:string;
            devType:string;
            role:number;
            buyCheck:boolean;
            gender:string;
        }
        
        const student2=addCuressStudentof<Student2>({name:"sanim mia",email:'sanim@gmail.com',devType:'NLWD',role:454,buyCheck:true,gender:'male'
        })
        
            }







// 
}