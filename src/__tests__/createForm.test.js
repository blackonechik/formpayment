/**
 * @jest-environment jsdom
 */

import createForm from "../js/createForm";

let appContainer; // объявляем здесь, чтобы он был доступен всем тестам

beforeAll(() => {
  appContainer = document.createElement("div"); // создаем новый div элемент
  appContainer.id = "js-app"; // присваиваем ему id 'js-app'
  document.body.appendChild(appContainer); // добавляем к body
});

test("Форма содержит 5 полей", () => {
  const { inputs } = createForm(appContainer);
  expect(inputs.length).toBe(5);
});
