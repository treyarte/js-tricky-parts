/**
 * Write a function that accepts a pin and an amount and creates a bank account
 * the function should be an object with 4 methods on it
 * checkBalance
 * deposit
 * withdraw
 * changePin
 * @param {*} pin 
 * @param {*} amount 
 */

function createAccount(pin, amount = 0) {

    function checkBalance(pin){
        if(pin !== this.pin) return "Invalid PIN."
        
        return '$'+ this.balance
    }
    
    function deposit(pin, amount){

        if(pin !== this.pin) return "Invalid PIN."

        this.balance += amount

        return `Successfully deposited $${amount}. Current balance: $${this.balance}.`
    }

    function withdraw(pin, amount){
        if(pin !== this.pin) return "Invalid PIN."
        
        if(amount > this.balance) return "Withdrawal amount exceeds account balance. Transaction cancelled."
        
        this.balance -= amount
        
        return `Successfully withdrew $${amount}. Current balance: $${this.balance}.`
    }
    
    function changePin(pin, newPin){
        if(pin !== this.pin) return "Invalid PIN."
        this.pin = newPin;
        return "PIN successfully changed!"
    }

    account = {
        pin,
        balance: amount,
        checkBalance,
        deposit,
        withdraw,
        changePin
    }

    return account
}

module.exports = { createAccount };
