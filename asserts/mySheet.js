function submitValidation() {
  // alert('hello')
    const username = document.getElementById('username').value;
    let check = false;
let userCheck = false;
let emailCheck = false;
let phoneCheck = false;
let dateCheck = false;
let passwordCheck = false;
let password2Check = false;
let mfCheck = false;
let countryCheck = false;

    //let check = userCheck = emailCheck = phoneCheck = dateCheck = passwordCheck = password2Check = mfCheck= countryCheck = false;
    console.log('username', username)
    
    
    
    if (username.length <= 3 || /\d/.test(username)) {
      // If the length is less than or equal to 3 OR it contains a number
      document.getElementById("username").style.borderColor = "red";
      document.getElementById("usernameErr").style.display = "block";
     userCheck=false
    } else {
     document.getElementById("username").style.borderColor = "green";
      document.getElementById("usernameErr").style.display = "none";
      userCheck=true
    }
    
  // email validation
    const email = document.getElementById('inputEmail').value;
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log('email////////////////////////////////', email)
    if (emailPattern.test(email)) {
      document.getElementById("inputEmail").style.borderColor = "green";
      document.getElementById("emailErr").style.display = "none";
     emailCheck=true
    } else {
      document.getElementById("inputEmail").style.borderColor = "red";
      document.getElementById("emailErr").style.display = "block";
      emailCheck=false
      }
  //phone number
    const pnumber = document.getElementById('inputphonenumber').value;
    let pnumberpattern = /^[6-9]\d{9}$/
    console.log('phone number//////', pnumber)
    if (pnumberpattern.test(pnumber)) {
      document.getElementById("inputphonenumber").style.borderColor = "green";
      document.getElementById("phonenumberErr").style.display = "none";
     phoneCheck=true
  
    }
    else {
      document.getElementById("inputphonenumber").style.borderColor = "red";
      document.getElementById("phonenumberErr").style.display = "block";
      phoneCheck=false
   }
  // dateof birth
    let dob = document.getElementById('dateOfBirth').value;
   
    console.log('dateofbirth///', dob)
    if  (dob == null || dob.trim() === "") {
      document.getElementById("dateOfBirth").style.borderColor = "red";
      document.getElementById("dateOfBirthrErr").style.display = "block";
       dateCheck=false
    }
    else {
      document.getElementById("dateOfBirth").style.borderColor = "green";
      document.getElementById("dateOfBirthrErr").style.display = "none";
      dateCheck=true
    }
    //password
    const password = document.getElementById('exampleInputPassword1').value;
  const password1 = document.getElementById('exampleInputPassword2').value;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  console.log('password///',password )
  if (passwordPattern.test(password)) {
      document.getElementById("exampleInputPassword1").style.borderColor = "green";
      document.getElementById("passwordErr").style.display = "none";
      passwordCheck=true
  } else {
      document.getElementById("exampleInputPassword1").style.borderColor = "red";
      document.getElementById("passwordErr").style.display = "block";
     passwordCheck=false
  }
  
  if (passwordPattern.test(password1)) {
      document.getElementById("exampleInputPassword2").style.borderColor = "green";
      document.getElementById("password2Err").style.display = "none";
       password2Check=true
  
  } else {
      document.getElementById("exampleInputPassword2").style.borderColor = "red";
      document.getElementById("password2Err").style.display = "block";
       password2Check=false
  }
  
  if (password !== password1) {
      document.getElementById("exampleInputPassword2").style.borderColor = "red";
      document.getElementById("password2Err").style.display = "block";
       password2Check=false
  }
  //gender
    const male = document.getElementById('male');
      const female = document.getElementById('female');
  
     console.log('male result',male.checked )
      console.log('female result',female.checked)
      
        if (male.checked == true || female.checked ==true) {
          
          document.getElementById('genderErr').style.display = 'none';
          mfCheck= true
        } else {
         
          document.getElementById('genderErr').style.display = 'block';
          mfCheck = false
        }
      //country
      const country = document.getElementById('country').value;
      
  
     console.log('india //', country)
     if(country.length  == 1){
      document.getElementById("country").style.borderColor = "green";
          document.getElementById("countryErr").style.display = "none";
          countryCheck = true
     }
     else {
          document.getElementById("country").style.borderColor = "red";
          document.getElementById("countryErr").style.display = "block";
          countryCheck = false
      }  
      //checkbox
      const checkbox = document.getElementById("flexCheckChecked");
      const checkErr = document.getElementById("checkErr");
  
      if (checkbox.checked === false) {
          checkbox.style.borderColor = "red";
          checkErr.style.display = "block";
          check=false
      } else {
          checkbox.style.borderColor = "green";
          checkErr.style.display = "none";
          check=true
      }
      
       if(userCheck &&emailCheck &&phoneCheck  && dateCheck && passwordCheck && password2Check && mfCheck &&countryCheck && check ) //countryCheck 
      {
      document.getElementById("popupMsg").style.display = "block";
                document.getElementById('username').value = ""
                document.getElementById('dateOfBirth').value = ""
                 document.getElementById('inputphonenumber').value = ""
                  document.getElementById('inputEmail').value = ""
                document.getElementById('country').value = ""
                 document.getElementById('exampleInputPassword1').value = ""
                 document.getElementById('exampleInputPassword2').value = ""
               document.getElementById("flexCheckChecked").checked = false;
                document.getElementById("male").checked = false;
                document.getElementById("female").checked = false;
               
                setTimeout(function () {
                  window.location.reload();
              }, 1000); 
      }
      
  }