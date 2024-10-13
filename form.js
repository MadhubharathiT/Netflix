// function login()
// {
//     let usernameVal = document.getElementById("email").value;
//     let passwardVal = document.getElementById("password").value;
   
//     if(usernameVal=="" && passwardVal==""){
//           alert("Please enter your details")
//     }

//     if(usernameVal=="Entri Elevate" && passwardVal=="admin123")
//     {
//         window.location.assign("https://www.netflix.com/in/");
//         alert("Login successfull")
       
//     }
//     else
//     {
//         alert("Login Failed")
//      }
// }

// function forget()
// {
//     let a=prompt("Enter login E-Mail:");
//     window.alert("Verification link sent to your email.Thank You!");
// }


document.getElementById("formDetails").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("email:", email);
    console.log("Password:", password);
    // alert("Form submitted successfully!"); // Placeholder for actual submission logic
});

document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = "index.html"; // Navigate back to signin.html
});