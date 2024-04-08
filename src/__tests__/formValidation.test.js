import isInputValid from "../js/formValidation";

// Тест номера карты

test("Валидация номера карты пропускает корректный номер карты.", () => {
  expect(isInputValid({ name: "number", value: "5469300911178470" })).toBe(
    true,
  );
});

test("Валидация номера карты не пропускает произвольную строку, содержащую любые нецифровые символы", () => {
  expect(isInputValid({ name: "number", value: "546930091117847a" })).toBe(
    false,
  );
  expect(isInputValid({ name: "number", value: "5469300911178!>{" })).toBe(
    false,
  );
  expect(isInputValid({ name: "number", value: "5469300911FH8470" })).toBe(
    false,
  );
});

test("Валидация номера карты не пропускает строку с недостаточным количеством цифр.", () => {
  expect(isInputValid({ name: "number", value: "54693009111784" })).toBe(false);
});

test("Валидация номера карты не пропускает строку со слишком большим количеством цифр", () => {
  expect(isInputValid({ name: "number", value: "546930091117847022" })).toBe(
    false,
  );
});

// Тест CVV

test("Валидация CVV/CVC пропускает строку с тремя цифровыми символами", () => {
  expect(isInputValid({ name: "cvv", value: "546" })).toBe(true);
});

test("Валидация CVV/CVC не пропускает строки с 1-2 цифровыми символами", () => {
  expect(isInputValid({ name: "cvv", value: "5" })).toBe(false);
  expect(isInputValid({ name: "cvv", value: "56" })).toBe(false);
});

test("Валидация CVV/CVC не пропускает строки с 4+ цифровыми символами", () => {
  expect(isInputValid({ name: "cvv", value: "5457" })).toBe(false);
  expect(isInputValid({ name: "cvv", value: "47277" })).toBe(false);
});

test("Валидация CVV/CVC не пропускает строки с тремя нецифровыми символами (латиница, кириллица и знаки препинания).", () => {
  expect(isInputValid({ name: "cvv", value: "54Ж" })).toBe(false);
  expect(isInputValid({ name: "cvv", value: "1OF" })).toBe(false);
  expect(isInputValid({ name: "cvv", value: "3!>" })).toBe(false);
});
