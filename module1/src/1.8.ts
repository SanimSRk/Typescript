// descrutring 

{
    const user={
        id:12345,
        name:{
            FirstName:"Sanim",
            MedileName:"janina",
            lastName:'Hasan'
        },
        contacNumber:'780494554',
        address:"bangladesh"

    
    }

    const {name:{MedileName}}=user
    console.log(MedileName)

    const myFriends=['aboul','babol','kabol','sabol','dabol']
    const [,c,...rest]=myFriends
    
}