
// document.getElementById('Id').addEventListener('click', fun)

// step-01 set eventHandler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step-02 prevent default behavior(prevent reloading browser)
    event.preventDefault();
    console.log('login button clicked')

    // step:03 Get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

    // step-04: validate phone and pin

    if(phoneNumber === '5' && pinNumber === '1234')
    {
        console.log('You are logged in');
        window.location.href = '/home.html'
        // step-05: allow user to use the website
    }
    else{
        alert('Wrong Phone Number or Pin');
    }
})