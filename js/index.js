var count = 0;
function play() {

  var x;
  if (x === 1) {
    count = count + 1;
  } if (count === 1) {
    document.getElementById('change-color').style.background = '#1DD100';
  }


  const currentNameElement = document.getElementById('current-name');
  const currentName = currentNameElement.innerText;
  const expectedName = currentName.toLowerCase();
  console.log(expectedName);

  const currentSeatElement = document.getElementById('current-Seat');
  const currentSeatText = currentSeatElement.innerText;
  const currentSeat = parseFloat(currentSeatText);
  console.log(currentSeat);

  const newSeat = currentSeat + 1

  currentSeatElement.innerText = newSeat;


  const minasScoreElement = document.getElementById('minas-score');
  const minasScoreText = minasScoreElement.innerText;
  const minasScore = parseFloat(minasScoreText);
  console.log(minasScore);

  const newMinasScore = minasScore - 1

  minasScoreElement.innerText = newMinasScore;

}


function next() {
  const seatSection = document.getElementById('seat-section');
  seatSection.classList.add('hidden');

  const successSetion = document.getElementById('success-setion');
  successSetion.classList.remove('hidden');
  console.log('next New pro');
}