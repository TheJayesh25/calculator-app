const display = document.getElementById('display');

const handleButtonClick = (value) => {
  console.log(`Button clicked: ${value}`);
  display.textContent = value;
}