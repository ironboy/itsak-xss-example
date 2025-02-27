// Get the pets from the REST api
let petsRaw = await fetch('/api/pets');
let pets = await petsRaw.json();

// Create html presenting the pets
let html = '';
for (let pet of pets) {
  html += `
    <article>
      <h3>${pet.name}</h3>
      <p>Art: ${pet.species}</p>
    </article>
  `;
}

// Output the pet html to the DOM
document.querySelector('.pet-list').innerHTML = html;