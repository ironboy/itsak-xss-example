// Grab the login form add store in a variable
let form = document.forms.loginForm;

// Add an event handler that listens when the user
// submits the form
form.addEventListener('submit', async event => {
  // Prevent the page from reloading
  // (the default web browser behavior when submitting forms)
  event.preventDefault();
  let email = form.elements.email.value;
  let password = form.elements.password.value;

  // Send the email and password to our REST-api
  // in order to perform the login
  let rawResponse = await fetch('/api/login', {
    // use POST as request method
    method: 'POST',
    // tell the server that we are sending the request body as JSON
    headers: { 'Content-Type': 'application/json' },
    // encode the data to send as json and send as a request body
    body: JSON.stringify({ email, password })
  });

  // "Unpack" the response from the response from json to JavaScript data
  let response = await rawResponse.json();

  // Logging the response from the REST-api to the console
  console.log(response);

  // If we were to continue building a frontend application
  // we would write more JavaScript that ask the user for fill in the form again
  // if the login fails - and shows other info on the page if the login succeeds
  // (information that should only be shown after you login)

  // If log in successful - then goto the create-pet page
  // other wise report error
  if (!response.error) {
    location.href = 'create-pet.html';
  }
  else {
    alert(response.error);
  }

});