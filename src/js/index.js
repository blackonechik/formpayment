/* eslint-disable import/extensions */
import createForm from "./createForm.js";
import payment from "./payment.js";
import formAnimation from "./animation.js";

const appContainer = document.getElementById("js-app");

const { inputs, formBtn, bankcard, paymentSystemType, cardView } =
  createForm(appContainer);

formAnimation(bankcard);
payment(inputs, formBtn, paymentSystemType, cardView);
