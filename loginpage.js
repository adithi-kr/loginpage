function loginUser() {
  let user = document.getElementById("USN").value;
  let pass = document.getElementById("password").value;

  // Just a demo check
  if(user === "test" && pass === "1234"){
    alert("Login Successful! 🎉");
  } else {
    alert("Invalid credentials 😭");
  }
  
  return false; // prevents page refresh
}
