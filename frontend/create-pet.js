// Check if logged in otherwise return to login/start page
let user = await(await fetch('/api/login')).json();
if (user.error) { location.replace('/'); }

// Grab the login form add store in a variable
let form = document.forms.createPetForm;

// Add an event handler that listens when the user
// submits the form
form.addEventListener('submit', async event => {
  // Prevent the page from reloading
  // (the default web browser behavior when submitting forms)
  event.preventDefault();
  let name = form.elements.name.value;
  let species = form.elements.species.value;

  // Send the email and password to our REST-api
  // in order to perform the login
  let rawResponse = await fetch('/api/pets', {
    // use POST as request method
    method: 'POST',
    // tell the server that we are sending the request body as JSON
    headers: { 'Content-Type': 'application/json' },
    // encode the data to send as json and send as a request body
    body: JSON.stringify({ name, species })
  });

  // "Unpack" the response from the response from json to JavaScript data
  let response = await rawResponse.json();

  // Logging the response from the REST-api to the console
  console.log(response);

  // If we were to continue building a frontend application
  // we would show a message "Success you have created the pet" etc...
});