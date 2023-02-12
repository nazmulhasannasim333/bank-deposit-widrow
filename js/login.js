document.getElementById('login-btn').addEventListener('click', function(){
    // Input field Validation
    let emailField = document.getElementById('email-field');
    let psw1Field = document.getElementById('psw1-field');

    // Error Massage Show
    let emailErrMsg =  document.getElementById('emailMsg');
    let psw1ErrMsg =document.getElementById('pswMsg');

    // Login succes massage
    let display = document.getElementById('display-success');

    // Check validation, Condition...
    if(emailField.value == ''){
        emailErrMsg.innerText = 'Please Fill The Email*';
      }else if(!isNaN(emailField.value)){
        emailErrMsg.innerText = 'Only Characters are allowed*';
      }else{
        emailErrMsg.innerText = '';
      }


     if(psw1Field.value === ''){
        psw1ErrMsg.innerText = 'Enter the password please!*';
      }else{
        psw1ErrMsg.innerText = '';
      }

      if(emailField.value === 'nasim@gmail.com' && psw1Field.value === '123456789'){
        display.innerText = 'Login succesful';
        setTimeout(function(){
          alert('Login succesful')
        }, 500)
        setTimeout(function(){
          window.location.href = "deposit-widrow.html"
        }, 1500)
      } else{
        display.innerText = 'invalid user'
        display.style.color = '#ff0f0fd3'
        console.log('invalid')
      }
      
})
