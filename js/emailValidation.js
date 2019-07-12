function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
  {
    alert("Thank you for subscribing!");
    return;
  }
    alert("You have entered an invalid email address!");
    return;
}