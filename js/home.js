
// step-01: add an event handler to the add money button inside the form

document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // step-02: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)

    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)

    // step-03: verify the pin number

    if(pinNumberInput === '1234'){
        console.log('Adding money to your account')
        // step-04: get the current balance
        const balance = document.getElementById('account-balance').innerText
        console.log(balance)

        // step-05: add addMoneyInput with balance
       const addMoneyNumber = parseFloat(addMoneyInput)
       const balanceNumber = parseFloat(balance)
       const newBalance = addMoneyNumber + balanceNumber
       console.log(newBalance)

        // step-05: update the balance in the UI/Dom
        document.getElementById('account-balance').innerText = newBalance
    }
    else{
        console.log('Failed to add money. Please try again')
    }

   


})