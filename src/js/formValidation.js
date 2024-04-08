const cardValidator = require("card-validator");
const emailValidator = require("email-validator");

export default function isInputValid(input) {
  switch (input.name) {
    case "number":
      return cardValidator.number(input.value).isValid;
    case "owner":
      return cardValidator.cardholderName(input.value).isValid;
    case "date":
      return cardValidator.expirationDate(input.value, 24).isValid;
    case "cvv":
      return cardValidator.cvv(input.value).isValid;
    case "email":
      return emailValidator.validate(input.value);
    default:
      return true;
  }
}
