
// document.getElementById('Id').addEventListener('click', fun)

// step-01 set eventHandler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step-02 prevent default behavior(prevent reloading browser)
    event.preventDefault();
    console.log('login button clicked')

    // step:03 Get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})