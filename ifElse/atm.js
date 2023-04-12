

let accountNumber = "101213456"
let accountName = "Adenike Adeyemi Olayinka"
let balance = 0.00


function getCustomerDetails() {
    let accountDetails = "AccountNumber: " + accountNumber + "\n"+
                         "AccountName: " + accountName +"\n"+
                         "Balance: " + balance + "\n"
    return accountDetails
}



function deposit(amountToDeposit) {
    let newBalanace = balance + amountToDeposit
    balance = newBalanace
    return newBalanace
}

function withdraw(amountToWithdraw) {
    
    if(balance > amountToWithdraw){
    let newBalance = balance - amountToWithdraw

    balance = newBalance

    return balance
    }else{
        return "Insufficient Balance..."
    }
}


console.log(getCustomerDetails())

deposit(2000)
// deposit(50000)
// deposit(2)
// deposit(4000)

console.log(getCustomerDetails())

console.log(withdraw(5000))

console.log(getCustomerDetails())