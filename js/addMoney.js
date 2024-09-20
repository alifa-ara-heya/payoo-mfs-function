document.getElementById("btn-add-money").           addEventListener('click', function (event) {
    event.preventDefault();
    console.log('add money button clicked');
    // getinputFieldbyId();
    const addMoney = getinputFieldValuebyId('input-add-money');
    const pinNumber = getinputFieldValuebyId("input-pin-number");
    console.log('add money value', addMoney);
    console.log('pin number', pinNumber);

})



