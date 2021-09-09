const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm["email"].value;
  const password = signupForm["password"].value;
  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    const modal = document.querySelector("#signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("Log out");
  });
});

const loginForm = document.querySelector("#signin-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    const signInModal = document.querySelector("#signin");
    M.Modal.getInstance(signInModal).close();
    loginForm.reset();
  });
});
