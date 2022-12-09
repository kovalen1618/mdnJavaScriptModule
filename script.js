const paragraph = document.querySelector('p');

// Adds a click event to the paragraph element
paragraph.addEventListener('click', updateName);

function updateName() {
  // Prompts user to replace name with another one  
  const name = prompt('Enter a new name');
  paragraph.textContent = `Player 1: ${name}`;
}