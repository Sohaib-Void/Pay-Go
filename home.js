const checkPin = 1234;
document.getElementById('add-money').addEventListener('click',function(e)
{
    e.preventDefault();
    const bank = parseInt(document.getElementById('bank').ariaValueMax)
    const accountNumber = document.getElementById('account-number').value
    const addAmount = parseInt(document.getElementById('add-amount').value)
    const pinNumber = parseInt(document.getElementById('pin').value)

   
    
    const balance = parseInt(document.getElementById('balance').innerText)

    if(accountNumber.length < 11)
    {
        alert('Account number is not valid')
        return;
    }
    else if(pinNumber != checkPin)
    {
        alert("Wrong Pin Number");
        return;
    }


    const totalbalance = addAmount + balance;

    document.getElementById('balance').innerText = totalbalance;


})


/** cash out features */
document.getElementById('withdraw-btn').addEventListener('click',function(e)
{
    e.preventDefault()
    const amount =parseInt (document.getElementById('withdraw-amount').value)

    const balance = parseInt(document.getElementById('balance').innerText)

    const totalbalance = balance - amount;
    document.getElementById('balance').innerText = totalbalance;
    if(0 > totalbalance)
    {
        alert("Insufficent Balance");
        return;
    }
    

})

/** Toggling Feature     */           

document.getElementById('add-money-btn').addEventListener('click',function()
{
    document.getElementById('cash-out-card').style.display = 'none'
     document.getElementById('add-money-card').style.display = 'block'
})

document.getElementById('cash-out-btn').addEventListener('click',function()
{
    document.getElementById('add-money-card').style.display = 'none'
     document.getElementById('cash-out-card').style.display = 'block'
})