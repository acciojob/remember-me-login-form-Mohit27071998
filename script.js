//your JS code here. If required.
let userN = document.getElementById('username').value;
let pass = document.getElementById('password').value;
let check = document.getElementById('checkbox').checked;


 if (localStorage.getItem("userName") && localStorage.getItem("password")) {
      var existingButton = document.createElement("button");
      existingButton.id = "existing";
      existingButton.textContent = "Login as existing user";
      document.body.appendChild(existingButton);
    }


     function handleSubmit(event){
	 event.preventDefault();
		 
	 if(check){
		localStorage.setItem('userName','valu')
		localStorage.setItem('password','valp')
	}
			 
else{
	localStorage.removeItem('userName');
	localStorage.removeItem('password');
}
  alert("Logged in as " + userN);
		 
	 }
document.getElementById("loginForm").addEventListener("submit", handleSubmit);
 function handleExistingClick() {
      var savedUsername = localStorage.getItem("userName");
      alert("Logged in as " + savedUsername);
    }

if (existingButton) {
      existingButton.addEventListener("click", handleExistingClick);
 }



	