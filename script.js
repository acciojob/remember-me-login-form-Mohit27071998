//your JS code here. If required.
let userN = document.getElementById('Username').value;
let pass = document.getElementById('Password').value;
let check = document.getElementById('checkbox').checked;


 if (localStorage.getItem("username") && localStorage.getItem("password")) {
      var existingButton = document.createElement("button");
      existingButton.id = "existing";
      existingButton.textContent = "Login as existing user";
      document.body.appendChild(existingButton);
    }


     function handlesubmit(event){
	 event.preventDefault();
		 
	 if(check){
		localStorage.setItem('userName','valu')
		localStorage.setItem('password','valp')
	}
			 
else{
	localStorage.removeItem('userName');
	localStorage.removeItem('password');
}
  alert("Logged in as " + username);
		 
	 }
document.getElementById("loginForm").addEventListener("submit", handleSubmit);
 function handleExistingClick() {
      var savedUsername = localStorage.getItem("username");
      alert("Logged in as " + savedUsername);
    }

if (existingButton) {
      existingButton.addEventListener("click", handleExistingClick);
 }



	