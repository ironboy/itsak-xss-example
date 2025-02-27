// Check if logged in
let user = await(await fetch('/api/login')).json();

// Create and display the menu
let header = document.createElement('header');
// Note we are using ternary operators to choose which menu items
// to display if you are logged in or not logged in (a short form of if/else)
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
header.innerHTML = `
  <nav>
    ${user.error ? `<a href="/">Logga in</a>` : ''}
    <a href="pet-list.html">Visa alla husdjur</a>
    ${!user.error ? `<a href="create-pet.html">Lägg till ett husdjur</a>` : ''}
    ${!user.error ? `<a href="#" onclick="logout()">Logga ut</a>` : ''}
  </nav>
`;
document.body.prepend(header);

// Perform logout
window.logout = async () => {
  await fetch('/api/login', { method: 'DELETE' });
  location.href = '/';
}