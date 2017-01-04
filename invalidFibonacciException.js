class InvalidFibonacciException extends Error {
  constructor(message) { 
    super(message);
    this.name = 'InvalidFibonacciException';
    this.message = message;
  }
}

module.exports = InvalidFibonacciException