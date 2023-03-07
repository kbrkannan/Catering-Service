function validate(){
  debugger;
    let name_pattern=/[a-zA-Z]/g;
    let username_pattern=/[a-zA-Z0-9]/g;
    let password_pattern=/[a-zA-Z0-9]{8}/g;
    let email_pattern=/[A-Za-z0-9_]+@[a-z]+\.[a-z/]+/g;
    let confpassword_pattern=/[a-zA-Z0-9]{8}/g;
    
    let name_input=document.getElementById("name").value;
    let user_input=document.getElementById("username").value;
    let password_input=document.getElementById("password").value;
    let conf_input=document.getElementById("confpassword").value;
    let email_input=document.getElementById("email").value;
    
    
    if(name_input.match(name_pattern)==null)
    {
      document.getElementById("validate").innerHTML="Invalid Name";
    }
    else if(user_input.match(username_pattern)==null) {
      document.getElementById("validate").innerHTML="Invalid UserName";
    }
    else if(password_input.match(password_pattern)==null)
    {
      document.getElementById("validate").innerHTML="Invalid Password";

    }
    else if(conf_input.match(password_input)==null)
    {
      document.getElementById("validate").innerHTML="Password doesn't match";
    }
    else if(email_input.match(email_pattern)==null)
    {
      document.getElementById("validate").innerHTML="Invalid Email";
    }
    else{
      document.getElementById("validate").innerHTML="Registered Successfully";
      window.location.href="selectevent.html";
    }
  }

  function login()
  {
    debugger;
    let username_pattern=/[a-zA-Z0-9]/g;
    let password_pattern=/[a-zA-Z0-9]{8}/g;

    let user_input=document.getElementById("username1").value;
    let password_input=document.getElementById("password1").value;


    if(user_input.match(username_pattern)==null)
    {
      document.getElementById("display_item").innerHTML="Invalid Username";
      
    }
    else if (password_input.match(password_pattern)==null)
    {
      document.getElementById("display_item").innerHTML="Invalid Password";
      
    }
    else{
      alert("Validated Successfully");
      window.location.href="selectevent.html";
    }

}

function feed()
{
  debugger;
  let name_pattern=/[a-zA-Z]/g;
  let email_pattern=/[a-z0-9_]+@[a-z]+\.[a-z/]+/g;
  let feedback_pattern=/[a-zA-Z0-9]/g;

  let input_name=document.getElementById("name").value;
  let input_email=document.getElementById("email").value;
  let input_feedback=document.getElementById("feedback_content").value;

  if(input_name.match(name_pattern)==null)
  {
    document.getElementById("newfeed").innerHTML="*Invalid Name";
  }
  else if(input_email.match(email_pattern)==null)
  {
    document.getElementById("newfeed").innerHTML="*Invalid Email";
  }
  else if(input_feedback.match(feedback_pattern)==null)
  {
    document.getElementById("newfeed").innerHTML="*Invalid Detail";
  }
  else{
    document.getElementById("newfeed").innerHTML="Thanks for your Feedback";
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("feedback_content").value="";
  }

}

function table_validate()
{
  debugger;
  let name_pattern=/[a-zA-Z]/g;
  let email_pattern=/[A-Za-z0-9_]+@[a-z]+\.[a-z/]+/g;
  let number_pattern=/[0-9]{10}/g;
  let advance_pattern=/[0-9]/g;
  let card_pattern=/[0-9]{16}/g;
  let cvv_pattern=/[0-9]{3}/g;

  let input_name=document.getElementById("name").value;
  let input_email=document.getElementById("email").value;
  let input_number=document.getElementById("mobilenumber").value;
  let input_advance=document.getElementById("advance").value;
  let input_card=document.getElementById("card").value;
  let input_cvv=document.getElementById("cvv").value;

  if(input_name.match(name_pattern)==null)
  document.getElementById("display").innerHTML="Invalid Name";
  else if(input_number.match(number_pattern)==null)
  document.getElementById("display").innerHTML="Invalid Mobile Number"
  else if(input_email.match(email_pattern)==null)
  document.getElementById("display").innerHTML="Invalid Email";
  else if(input_advance<=3000)
  document.getElementById("display").innerHTML="Invalid Amount";
  else if(input_card.match(card_pattern)==null)
  document.getElementById("display").innerHTML="Invalid Card Number";
  else if(input_cvv.match(cvv_pattern)==null)
  document.getElementById("display").innerHTML="Invalid CVV";
  else
  {
    alert("Order Placed with the Advance Amount of "+input_advance);
    document.getElementById("display").innerHTML=""
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("mobilenumber").value="";
    document.getElementById("advance").value="";
    document.getElementById("card").value="";
    document.getElementById("cvv").value="";
    window.location.href="food.html";
  }

}


function table_validate2(){
  debugger;
  document.getElementById("display").innerHTML=""
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("mobilenumber").value="";
    document.getElementById("advance").value="";
    document.getElementById("card").value="";
    document.getElementById("cvv").value="";

}