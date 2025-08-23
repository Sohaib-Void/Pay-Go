document.getElementById('login').addEventListener('click',function(e)
{
    e.preventDefault();
    const mobile  = 1743742317
    const pin   = 1234
    
    const mobileValue = document.getElementById('mobile-number').value 
    const mobileConverted = parseInt(mobileValue);

    const pinValue = document.getElementById('pin-number').value 
    const pinConverted = parseInt(pinValue);

    if(mobileConverted === mobile && pinConverted === pin)
    {
        window.location.href ='./home.html'
    }
    else
    {
        alert('Wrong Number or Pin');
    }
    
})