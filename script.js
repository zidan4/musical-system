document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convert-btn');
    const numberInput = document.getElementById('number');
    const output = document.getElementById('output');

    convertBtn.addEventListener('click', () => {
        const inputValue = numberInput.value.trim();
        
        if (!inputValue) {
            showError('Please enter a valid number');
            return;
        }

        if (!/^-?\d+$/.test(inputValue)) {
            showError('Please enter a valid integer');
            return;
        }

        const number = parseInt(inputValue, 10);
        
        if (number < 1) {
            showError('Please enter a number greater than or equal to 1');
        } else if (number >= 4000) {
            showError('Please enter a number less than or equal to 3999');
        } else {
            const roman = convertToRoman(number);
            showResult(roman); // Removed prefix text
        }
    });

    function showError(message) {
        output.className = 'error';
        output.textContent = message;
    }

    function showResult(result) {
        output.className = 'result';
        output.textContent = result;
    }

    function convertToRoman(num) {
        const romanNumerals = [
            [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
            [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
            [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
        ];
        
        let result = '';
        for (const [value, symbol] of romanNumerals) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }
        return result;
    }
});
