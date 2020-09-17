// Get the Sign in / Sign up header selection from formSettings.
const formSettings = document.querySelectorAll("#formSettings h3");
// Get signin-form-inputs
const signInForm = document.getElementById("signin-form-inputs");
// Get second form
const signUpForm = document.getElementById("form2");
// Get the social buttons
const socialButtons = document.getElementById("social-logins");

// Get each h3 elements
const signIn = formSettings[0];
const signUp = formSettings[1];

// When user clicks sign up, close sign in and show sign up form.
const showSignUp = () => {
    signUpForm.style.display = "block";
    signInForm.style.display = "none";
    signIn.style.borderBottom = "none";
    signUp.style.borderBottom = "3px solid #3f82ff";
    socialButtons.style.display = "none";
}
signUp.addEventListener("click", showSignUp, false);

const showSignIn = () => {
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
    signInForm.style.display = "flex";
    signUp.style.borderBottom = "none";
    signIn.style.borderBottom = "3px solid #3f82ff";
    socialButtons.style.display = "block";
}
signIn.addEventListener("click", showSignIn, false);