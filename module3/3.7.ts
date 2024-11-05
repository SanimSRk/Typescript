{
    // gatter setter

class BankAccount{
public readonly id:number;
public name:string;
private balance:number

    constructor(id:number,name:string, balance:number){
        this.id=id,
        this.name=name,
        this.balance=balance

    }
    ;
//     addDeposite(amount:number){
// this.balance=this.balance+amount
//     }

//     balanceWidtho(amount:number){
// this.balance=this.balance-amount
//     }

get getBalance(){
return this.balance
}


set deposite(amount:number){
this.balance=this.balance+amount
}

//     getBalance(){
//         return this.balance
//     }

}


const goribMonushAccount=new BankAccount(243,'Sanim',438)

// const addBalance=goribMonushAccount.addDeposite(500)
// const remobBalance=goribMonushAccount.balanceWidtho(900)
// const getBalance=goribMonushAccount.getBalance()

const setterBallace=goribMonushAccount.deposite=1000

const getBalance=goribMonushAccount.getBalance



console.log(getBalance)
    // 
}