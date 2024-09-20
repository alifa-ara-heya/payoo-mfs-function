document.getElementById("btn-add-money").addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getinputFieldValuebyId("input-add-money");
    console.log('Added money is', addMoney);
    const pinNumber = getinputFieldValuebyId("input-pin-number");
    console.log('pin in addMoney2.js is', pinNumber);

    // validation

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return; //to stop the progressing of the function
    }

    if (pinNumber === 1234) {
        const balance = getTextFieldValuebyId("account-balance");
        console.log(balance);  
        const newBalance = balance +  addMoney;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added ${addMoney}Tk. New Balance is ${newBalance}.`;
        console.log(p);

        // should be a common function
        document.getElementById('transaction-container').appendChild(p)
    } else {
        alert('failed to add the money.')
    }

})