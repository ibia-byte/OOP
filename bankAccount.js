class Bankaccount {
    constructor(name, acNumber, type, balance) {
        this.name = name
        this.acNumber = acNumber
        // this.min = 50000
        this.type = type
        this.balance = balance
    }
    create(name, acNumber, balance, min) {
        /* this.name       = name
        this.acNumber    = acNumber
        this.balance    =   balance
        this.type   =   type */
    }
    //depositing an amount into an account
    credit(deposit) {
        console.log(`crediting account by${deposit}`)
        console.log(`your account has been credited by${deposit}. your balance is ${this.balance + deposit}`)
        this.balance = this.balance + deposit   
    }
     //bank debits a given account
    debit(withdraw) {
        console.log(`debiting account by${withdraw}`)
        //comparing the withdraw amount with the account balance
        if (withdraw > this.balance) {

            console.log("cannot withdraw more than your balance")
            return false
        }
        if ((this.balance - withdraw) < 50000) {
            console.log("balance cannot fall below 50000")
            return false
        }
        this.balance = this.balance - withdraw
        console.log(`your account has been debited by${withdraw}. your balance is ${this.balance}`)
    }

    close(balance) {
        console.log("closing account")
        this.balance = this.balance - balance
    }

    checkBal() {
        console.log(Number.parseFloat(this.balance))
    }
}
//instantiating Gorretti account with 100000
const GorrettiAC = new Bankaccount("Gorretti", 0001, "fixed", 100000)
//crediting Gorretti account with 200000
GorrettiAC.credit(200000)
GorrettiAC.checkBal()
//debiting Gorretti account with 50000
GorrettiAC.debit(50000)
GorrettiAC.checkBal()
GorrettiAC.debit(60000)
GorrettiAC.checkBal()
GorrettiAC.debit(100000)
GorrettiAC.checkBal()

