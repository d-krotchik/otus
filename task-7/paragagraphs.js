export function pApp(el) {
  el.innerHTML = `
    <input />
    <button hidden>Add</button>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  `;

  const input = el.querySelector("input");
  const button = el.querySelector("button");

  input.addEventListener("input", () => {
    button.hidden = button.hidden = input.value.length === 0;
  });

  button.addEventListener("click", () => {
    const newP = document.createElement("p");
    newP.innerHTML = input.value;
    el.appendChild(newP);
    input.value = "";

    const pList = el.querySelectorAll("p");
    if (pList.length > 5) {
      pList[0].remove();
    }
  });
}