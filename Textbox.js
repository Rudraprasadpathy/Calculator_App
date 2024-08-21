function Print(){
      var x=document.getElementById("uname").value;
      var y=document.getElementById("upass").value;
      if(y=="simplicode")
      {
        alert("Login Sucessful");
      }
      else
      {
        alert("wrong password");
      }
      alert("The name is :"+x+" the password is:"+y);
}