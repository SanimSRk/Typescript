{
    // interface-generic

    interface Developer<T,Y=null>{
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number;

        };
        smartWatch:T;
        Bike?:Y;
    }

type NewWathch={
brand:string;
modle:string;
display:number;
}
const poorDeveloper :Developer<NewWathch>={
name:"Sanim",
computer:{
    brand:'dell',
    model:'34fd',
    releaseYear:2023,
},
  smartWatch:{
        brand:'apple',
        modle:'4-gf-5',
        display:46
    }

    }

interface RichWatch{
brand:string;
modle:string;
hardTrack:true;
slipeTrack:true;

}
interface Bikes{
    name:string;
    model:string;
    cc:number;
    price:number;
    abilavle:boolean;

}

const richDeveloper :Developer<RichWatch,Bikes>={
name:"Sk Khan",
computer:{
    brand:'dell',
    model:'34fd',
    releaseYear:2023,
},
 smartWatch:{
        brand:'apple',
        modle:'4-gf-5',
        hardTrack:true,
        slipeTrack:true
    },
Bike:{
    name:'roles royel',
    model:'94-fd-s',
    cc:330,
    price:900000,
    abilavle:false

}

    }








    // 

}