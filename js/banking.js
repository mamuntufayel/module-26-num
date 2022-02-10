/// thinking about diposite button

document.getElementById('deposit-submit-btn').addEventListener('click', function () {
    const dipositInput = document.getElementById('deposit-input');
    const dipositInputValue = parseFloat(dipositInput.value);
    // console.log(dipositInputValue);

    const depositBox = document.getElementById('diposit-total');
    const previousDepositeAmount = parseFloat(depositBox.innerText);

    const finalAmount = previousDepositeAmount + dipositInputValue;
    depositBox.innerText = finalAmount;
    console.log(finalAmount);
    // New balance update

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalInNumber = parseFloat(balanceTotal.innerText);
    const balance = balanceTotalInNumber + dipositInputValue;
    balanceTotal.innerText = balance;
    dipositInput.value = '';
})

///withdraw process

document.getElementById('withwraw-submit-btn').addEventListener('click', function () {
    const withdrawalInput = document.getElementById('wihthdrawl-input');
    const withdrawalValue = parseFloat(withdrawalInput.value);


    const gettingWithdrawal = document.getElementById('withdraw-input-number');
    const gettingAmount = parseFloat(gettingWithdrawal.innerText);

    const totalWithdrawal = gettingAmount + withdrawalValue;
    gettingWithdrawal.innerText = totalWithdrawal;

    ///balance after withdrawal

    const theBalance = document.getElementById('balance-total');
    const theValueOfBalance = parseFloat(theBalance.innerText);
    const remainingBalance = theValueOfBalance - withdrawalValue;
    theBalance.innerText = remainingBalance;


    withdrawalInput.value = '';


})

