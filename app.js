const englishKeys = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"],
  ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "return"],
  ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "shift"],
  ["control", "option", "command", " ", "command", "option", "◄", "▼", "►"],
];

// create wrapper for keyboard and output
function createWrapper() {
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("keyboard-wrapper");
  return wrapperElement;
}

// create textarea for output
function createOutput() {
  const outputElement = document.createElement("textarea");
  outputElement.classList.add("keyboard-textarea");
  return outputElement;
}

// create buttons of keyboard
function createKeyboard(keysArray, output) {
  const keyboardElement = document.createElement("div");
  keyboardElement.classList.add("keyboard");

  keysArray.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.classList.add("keyboard-row");

    row.forEach((key) => {
      const keyElement = document.createElement("button");
      keyElement.classList.add("keyboard-key");
      keyElement.textContent = key;

      // add event listener on botton
      keyElement.addEventListener("click", () => {
        if (keyElement.textContent === "delete") {
          output.value = output.value.slice(0, -1);
        } else if (keyElement.textContent === "capslock") {
          keyElement.classList.toggle("active");
          document.querySelectorAll(".keyboard-key").forEach((button) => {
            if (button.textContent.length === 1) {
              button.textContent = button.textContent.toUpperCase();
            }
          });
        } else {
          output.value += keyElement.textContent;
        }
      });

      rowElement.appendChild(keyElement);
    });

    keyboardElement.appendChild(rowElement);
  });

  return keyboardElement;
}

// add keyboard to page
function addKeyboardToPage() {
  const outputElement = createOutput();
  const keyboardElement = createKeyboard(englishKeys, outputElement);
  const wrapperElement = createWrapper();

  wrapperElement.appendChild(outputElement);
  wrapperElement.appendChild(keyboardElement);

  document.body.appendChild(wrapperElement);
}

addKeyboardToPage();
