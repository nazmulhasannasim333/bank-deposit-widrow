document.getElementById('submit-btn').addEventListener('click', function(){
    // Input field Validation
    let nameField = document.getElementById('name-field');
    let emailField = document.getElementById('email-field');
    let psw1Field = document.getElementById('psw1-field');
    let psw2Field = document.getElementById('psw2-field');

    // Error Massage Show
    let nameErrMsg =  document.getElementById('nameMsg');
    let emailErrMsg =  document.getElementById('emailMsg');
    let psw1ErrMsg =document.getElementById('pswMsg');
    let psw2ErrMsg =document.getElementById('pawRepeatMsg');

    // Acoount create succes massage
    let display = document.getElementById('display-success');

    // Check validation, Condition...
    if(nameField.value === ''){
        nameErrMsg.innerText = 'Please Fill The Name*';
    }else if(!isNaN(nameField.value)){
        nameErrMsg.innerText = 'Only Characters are allowed*';
    }else{
        nameErrMsg.innerText = '';
      }

    if(emailField.value === ''){
        emailErrMsg.innerText = 'Please Fill The Email*';
      }else if(!isNaN(emailField.value)){
        emailErrMsg.innerText = 'Only Characters are allowed*';
      }else{
        emailErrMsg.innerText = '';
      }


     if(psw1Field.value === ''){
        psw1ErrMsg.innerText = 'Enter the password please!*';
      }else if(psw1Field.value.length < 8){
        psw1ErrMsg.innerText = 'Password length must be atleast 8 characters*';
      } else if(psw1Field.value.length >= 15){
        psw1ErrMsg.innerText = 'Password length must not exceed 15 characters*';
      }else{
        psw1ErrMsg.innerText = '';
      }

      if(psw2Field.value === ''){
        psw2ErrMsg.innerText = 'Enter the confirm password*';
      }

      if(psw1Field.value !== psw2Field.value){
        psw2ErrMsg.innerText = 'Passwords are not same*';
      } 

      if(nameField.value !== '' && isNaN(emailField.value) === true && emailField.value !== '' && isNaN(emailField.value) === true && psw1Field.value !== '' && psw1Field.value.length >= 8 && psw1Field.value.length <= 15 && psw2Field.value !== '' && psw1Field.value === psw2Field.value){
        display.innerText = 'Account created has been succesful';
        setTimeout(function(){
          alert('Account created succesful')
        }, 500)
        setTimeout(function(){
          window.location.href = "login.html"
        }, 2000)
      } else{
        display.innerText = 'Please fill up all requirements'
        display.style.color = '#ff0f0fd3';
      }
      
})

