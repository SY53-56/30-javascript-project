

    const display = document.getElementById('display');
    let currentInput = '0';
    let operator = null;
    let previousInput = null;
    let shouldResetScreen = false;

    function updateDisplay() {
      display.textContent = currentInput;
    }

    function appendNumber(number) {
      if (shouldResetScreen) {
        currentInput = number === '.' ? '0.' : number;
        shouldResetScreen = false;
        return;
      }

      if (number === '.' && currentInput.includes('.')) return;

      if (currentInput === '0' && number !== '.') {
        currentInput = number;
      } else {
        currentInput += number;
      }
    }

    function chooseOperator(op) {
      if (operator !== null) calculate();
      previousInput = currentInput;
      operator = op;
      shouldResetScreen = true;
    }

    function calculate() {
      if (operator === null || shouldResetScreen) return;
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);
      if (isNaN(prev) || isNaN(current)) return;

      let result;
      switch (operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          if (current === 0) {
            alert("Can't divide by zero!");
            clear();
            return;
          }
          result = prev / current;
          break;
        default:
          return;
      }

      currentInput = result.toString();
      operator = null;
      previousInput = null;
    }

    function clear() {
      currentInput = '0';
      operator = null;
      previousInput = null;
      shouldResetScreen = false;
    }

    // Event Listeners
    document.querySelectorAll('[data-number]').forEach(button => {
      button.addEventListener('click', () => {
        appendNumber(button.getAttribute('data-number'));
        updateDisplay();
      });
    });

    document.querySelectorAll('.operator').forEach(button => {
      button.addEventListener('click', () => {
        chooseOperator(button.getAttribute('data-operator'));
      });
    });

    document.getElementById('equals').addEventListener('click', () => {
      calculate();
      updateDisplay();
      shouldResetScreen = true;
    });

    document.getElementById('clear').addEventListener('click', () => {
      clear();
      updateDisplay();
    });

    // Initialize display
    updateDisplay();