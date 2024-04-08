/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable indent */
/* eslint-disable no-new */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import "../styles/main.scss";
import { el, mount } from "redom";

export default function createForm(appContainer) {
  const bankcard = el(
    "div.selection#js-bankcard",
    el("h2.selection__title", "Оплата банковской картой"),
    el(
      "span.selection__descr",
      "Поддерживается оплата всеми видами банковских карт",
    ),
    el("span.selection__icon"),
  );

  // Создание отдельных элементов кнопки и инпутов
  const labels = [
    el("span.form__descr", "Номер карты"),
    el("span.form__descr", "Владелец карты"),
    el("span.form__descr", "Срок действия карты"),
    el("span.form__descr", "CVV"),
    el("span.form__descr", "Email"),
  ];

  const inputs = [
    el("input.form__input", {
      name: "number",
      type: "text",
      placeholder: "1234 1234 1234 1234",
    }),
    el("input.form__input", {
      name: "owner",
      type: "text",
      placeholder: "IVAN IVANOV",
    }),
    el("input.form__input.form__input_date", {
      name: "date",
      type: "text",
      placeholder: "11/24",
    }),
    el("input.form__input.form__input_cvv", {
      name: "cvv",
      type: "text",
      placeholder: "***",
    }),
    el("input.form__input", {
      name: "email",
      type: "text",
      placeholder: "example@example.com",
    }),
  ];

  const cardView = [
    el("span.card__number", "3298 5023 2510 5085"),
    el("span.card__owner", "FUWHF OIFGHWIOH"),
    el("span.card__date", "15/14"),
  ];

  const formBtn = el("button.form__button", { disabled: true }, "Оплатить");
  const paymentSystemType = el("span.card__contactless-payment");

  // Создание элементов HTML через RE:DOM
  const section = el(
    "section.payment",
    el(
      "div.container.payment__container",
      bankcard,
      el(
        "form.form",
        el(
          "div.form__top",
          el(
            "div.form__left",
            el("label.form__label", labels[0], inputs[0]),
            el("label.form__label", labels[1], inputs[1]),
            el(
              "div.form__numbers",
              el("label.form__label", labels[2], inputs[2]),
              el("label.form__label", labels[3], inputs[3]),
            ),
            el("label.form__label", labels[4], inputs[4]),
          ),
          el(
            "div.form__right",
            el(
              "div.card.card_preview",
              el("div.card__top", paymentSystemType),
              el("div.card__bottom", ...cardView),
            ),
            el("span.form__info", "Ваши данные в безопасности"),
          ),
        ),
        formBtn,
      ),
    ),
  );

  // Монтирование секции в body документа
  mount(appContainer, section);

  return {
    inputs,
    formBtn,
    bankcard,
    paymentSystemType,
    cardView,
  };
}
