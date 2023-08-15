
// step-1: add click event handler with the submit button
// step-2: get the email address inside the email input field
// always remember to use .value to get text from an input field
// step-3: get password
    // 3.a: set id on the html element 
    // 3.b: get the element
    // 3.c: get the value from the element

// DANGER: DO NOT VERIFY email password on the client side 
    // step-4: verify email and password and check whether valid user or not


    // work 1
    document.getElementById('btn-submit').addEventListener('click', function(){
        // work 2
        const emailInput = document.getElementById('user-email');
        const email = emailInput.value;
        // work 3
        const passwordInput = document.getElementById('user-password');
        const password = passwordInput.value;

        // work 4
        if(email === 'mybankaccount@email.com' && password === 'idontknow22'){
            window.location.href = 'main.html';
        }

    })
