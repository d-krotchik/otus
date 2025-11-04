const fs = require("fs");

function initDOM() {
  document.body.innerHTML = fs.readFileSync("index.html", "utf-8");
}
describe("Тесты для д.з. по скрытой кнопке и добавляемым параграфам", () => {
  beforeEach(() => {
    initDOM();
  });

  test("1. Есть ли заголовок (h2) с описанием", () => {
    let paragraph = document.querySelector("h2");
    expect(paragraph).toBeDefined();
  });

  test("2. Проверка существования поля ввода", () => {
    let input = document.querySelector('[data-name="new-paragraph-text"]');
    expect(input).toBeDefined();
  });

  test("3. Проверка существования кнопки", () => {
    let button = document.querySelector('[data-name="new-paragraph-button"]');
    expect(button).toBeDefined();
  });

  test("4. СПроверка существования параграфа", () => {
    let paragraph = document.querySelector("p");
    expect(paragraph).toBeDefined();
  });

  test("5. Параграфов по умолчанию должно быть 3", () => {
    let paragraphs = document.querySelectorAll("p");
    expect(paragraphs.length).toBe(3);
  });

  test("6. Кнопки не должно быть видно", () => {
    let button = document.querySelector('[data-name="new-paragraph-button"]');
    expect(button.hasAttribute("hidden")).toBe(true);
  });

  test("7. Кнопки должна быть видна, когда заполнено поле ввода", () => {
    let button = document.querySelector('[data-name="new-paragraph-button"]');
    let input = document.querySelector('[data-name="new-paragraph-text"]');

    input.value = "Some text";

    expect(button.hasAttribute('[hidden="hidden"]')).toBe(false);
  });

  test("8. Пустое ли поле ввода по умолчанию", () => {
    let input = document.querySelector('[data-name="new-paragraph-text"]');
    expect(input.value = "").toBe("");
  });

  test("9. При очистке поля ввода, кнопка должна скрываться", () => {
    let button = document.querySelector('[data-name="new-paragraph-button"]');
    let input = document.querySelector('[data-name="new-paragraph-text"]');

    input.value = "Some text";
    input.value = "";

    expect(button.hasAttribute("hidden")).toBe(true);
  });

  test("10. Существует ли div, для вставки новых параграфов", () => {
    let divElement = document.querySelector("div");
    expect(divElement).toBeDefined();
  });

});