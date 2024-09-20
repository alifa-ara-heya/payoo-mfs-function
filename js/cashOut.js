document.getElementById("btn-cash-out").
    addEventListener('click', function (event) {
        event.preventDefault();
        console.log('inside the click handler');

        const cashOut = getinputFieldValuebyId('input-cash-out');
        console.log(cashOut);

        const pinNumber = getinputFieldValuebyId('input-cash-out-pin');
        console.log(pinNumber);

        // validation
        if(isNaN(cashOut )){
            alert('Failed to cash out');
            return; //to stop the progressing of the function
        }
        if (pinNumber === 1234) {
            const balance = getTextFieldValuebyId('account-balance');

            if (cashOut > balance){
                alert("You do not have enough money to cash out");
                return;
            }
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
            <h4 class = "text-2xl font-bold">Cash Out</h4>
            <p> Withdrawn money is ${cashOut}. New Balance is ${newBalance}</p>
            `;
            document.getElementById('transaction-container').appendChild(div)
        } else {
            alert('Wrong PIN')
        }
    })