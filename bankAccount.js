class BankAccount {
    constructor(accountName, accountType, openingBalance) {
        this.accountName = accountName;
        this.accountType = accountType;
        this.openingBalance = openingBalance;
        

    }
    getBalance() {
        return this.accountBalance;
    }
    open(accountName, accountType, openingBalance) {
        this.accountName = accountName;
        this.accountType = accountType;
        this.openingBalance = openingBalance;


    }
    credit(deposit) {
        console.log(`creditng account.......`)
        this.accountBalance = this.accountBalance + deposit
        console.log(`Your account has been credited by${deposit} your new balance is:${this.accountBalance}`)

    }



    debitAccount(withdrawAmount) {
        if (withdrawAmount < this.accountBalance) {
            if ((this.accountBalance - withdrawAmount) >= 50) {
                this.accountBalance = this.accountBalance - withdrawAmount
            }
            else {
                console.log("Minimum balance can not be less than 50");
                return false;
            }
        }
        else {
            console.log("you cant withdraw more than what you currently have")
            return false;
        }
    }
    close(balance) {
        this.accountBalance = 0;
        console.log("closing account")
    }
}


