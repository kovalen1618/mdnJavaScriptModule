// External JavaScript

function createParagraph() {
  const para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  // Event listener for the click event   
  button.addEventListener('click', createParagraph);
}

