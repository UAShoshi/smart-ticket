function getRendomAlphabet() {
  const alphabets = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"];
  console.log(alphabets);

  const randomNumber = Math.random() * 8;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  console.log(alphabet);
  // return alphabet;
}


function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}





function play() {
  const seatSection = document.getElementById('seat-section');
  seatSection.classList.add('hidden');

  const successSetion = document.getElementById('success-setion');
  successSetion.classList.remove('hidden');
  console.log('play Now pro');
}