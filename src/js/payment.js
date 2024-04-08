/* eslint-disable indent */
/* eslint-disable no-new */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";
import isInputValid from "./formValidation";

const cardValidator = require("card-validator");

export default function paymentSystem(
  inputs,
  submitButton,
  paymentSystemType,
  cardView,
) {
  const formData = {};
  const validInputs = {};

  const errorClass = "form__input--error";

  inputs.forEach((input) => {
    formData[input.name] = input;
  });
  const { number, owner, date, cvv, email } = formData;

  inputs.forEach((input) => {
    validInputs[input.name] = false;
  });

  number.addEventListener("input", () => {
    // Форматирование номера карты
    number.value = number.value
      .replace(/[^0-9\s]/g, "")
      .replace(/(\d{4}(?!\s))/g, "$1 ")
      .trim();
  });

  date.addEventListener("input", () => {
    // Форматироватие даты срока действия карты
    date.value = date.value
      .replace(/[^0-9\s]/g, "")
      .replace(/(\d{2}(?!\s))/, "$1/");
  });

  function changeStateSumbitButton() {
    submitButton.disabled = !Object.values(validInputs).every(
      (input) => input !== false,
    );
    console.log(Object.values(validInputs).every((input) => input !== false));
    console.log(validInputs);
  }

  function handleError(error) {
    new Notify({
      status: "error",
      title: "Ошибка",
      text: error.message,
      position: "right bottom",
    });
    console.log(error);
  }
  number.addEventListener("blur", () => {
    try {
      if (!isInputValid(number)) {
        number.classList.add(errorClass);
        validInputs[number.name] = false;
        throw new TypeError("Вы ошиблись при вводе номера карты");
      }
      number.classList.remove(errorClass);
      validInputs[number.name] = true;
      import(
        `../assets/images/card-types/${cardValidator.number(number.value).card.type}.svg`
      ).then((image) => {
        const icon = new Image();
        icon.src = image.default;
        paymentSystemType.innerHTML = icon.outerHTML;
      });
      cardView[0].textContent = number.value;
    } catch (error) {
      handleError(error);
    } finally {
      changeStateSumbitButton();
    }
  });

  owner.addEventListener("blur", () => {
    try {
      if (!isInputValid(owner)) {
        owner.classList.add(errorClass);
        validInputs[owner.name] = false;
        throw new TypeError("Вы ошиблись при вводе владельца карты");
      }
      owner.classList.remove(errorClass);
      validInputs[owner.name] = true;
      cardView[1].textContent = owner.value.toUpperCase();
    } catch (error) {
      handleError(error);
    } finally {
      owner.value = owner.value.toUpperCase();
      changeStateSumbitButton();
    }
  });

  date.addEventListener("blur", () => {
    try {
      if (!isInputValid(date)) {
        date.classList.add(errorClass);
        validInputs[date.name] = false;
        throw new TypeError("Вы ошиблись при вводе даты истечения срока карты");
      }
      date.classList.remove(errorClass);
      validInputs[date.name] = true;
      cardView[2].textContent = date.value;
    } catch (error) {
      handleError(error);
    } finally {
      changeStateSumbitButton();
    }
  });

  cvv.addEventListener("blur", () => {
    try {
      if (!isInputValid(cvv)) {
        cvv.classList.add(errorClass);
        validInputs[cvv.name] = false;
        throw new TypeError("Вы ошиблись при вводе CVV");
      }
      cvv.classList.remove(errorClass);
      validInputs[cvv.name] = true;
    } catch (error) {
      handleError(error);
    } finally {
      changeStateSumbitButton();
    }
  });

  email.addEventListener("blur", () => {
    try {
      if (!isInputValid(email)) {
        email.classList.add(errorClass);
        validInputs[email.name] = false;
        throw new TypeError("Вы ошиблись при вводе почты");
      }
      email.classList.remove(errorClass);
      validInputs[email.name] = true;
    } catch (error) {
      handleError(error);
    } finally {
      changeStateSumbitButton();
    }
  });

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Оплата прошла");
  });
}
