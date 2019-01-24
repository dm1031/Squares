//hide button
const hideButton = document.querySelector('#hide');

hideButton.addEventListener('click', function() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.style.display = 'none');
});
//show button
const showButton = document.querySelector('#show');

showButton.addEventListener('click', function(){
  const squares =    document.querySelectorAll('.square');
  squares.forEach(square => square.style.display = '');
})
//toggle function
function toggleSquare(color) {
  const colorToToggle = document.querySelector('#' + color);
  colorToToggle.style.display = 'none';
}
//red
const toggleRed = document.querySelector('#toggleRed');
toggleRed.addEventListener('click', function() {
  toggleSquare('red')
})
//blue
const toggleBlue = document.querySelector('#toggleBlue');
toggleBlue.addEventListener('click', function() {
  toggleSquare('blue')
})
//green
const toggleGreen = document.querySelector('#toggleGreen');
toggleGreen.addEventListener('click', function() {
  toggleSquare('green')
})
