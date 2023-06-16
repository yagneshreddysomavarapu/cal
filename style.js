function appendValue(value) {
    document.getElementById('display').value += value;
  }
  function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('screen').value = '';
  }
  
  function calculate() {
    const expression = document.getElementById('display').value;
    const result = eval(expression);
    document.getElementById('display').value = result;
    document.getElementById('screen').value = expression;
} 