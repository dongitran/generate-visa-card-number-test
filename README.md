# Credit Card Generator

A simple Node.js package to generate random credit card information such as card numbers, expiration dates, and CVV codes for testing purposes.

## Installation

To use this package in your Node.js project, install it via npm:

```bash
npm install credit-card-generator
```

## Usage
```javascript
const generateCreditCard = require('credit-card-generator');

// Generate a random credit card information
const creditCard = generateCreditCard();
console.log(creditCard);
// { number: '4152115120832302', cvv: '011', exp: '6-2026' }
```
The generateCreditCard() function returns an object containing a randomly generated credit card number, expiration date, and CVV code.

Optionally, you can provide a Bank Identification Number (BIN) as an argument to generateCreditCard() to create a card number starting with a specific BIN:
```javascript
const generateCreditCard = require('credit-card-generator');

// Generate a random credit card information
const generateCreditCard = require('credit-card-generator');

// Generate a credit card with a specific BIN (Bank Identification Number)
const bin = '400314'; // Replace with your desired BIN
const creditCard = generateCreditCard(bin);
console.log(creditCard);
// { number: '4003140365828386', cvv: '011', exp: '6-2026' }
```


## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.