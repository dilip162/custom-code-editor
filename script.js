const output = document.querySelector("#output");

let htmlCode,
  cssCode,
  jsCode = "";

const allInput = document.querySelectorAll("textarea");

allInput.forEach((elem, index) => {
  elem.addEventListener("keyup", () => {
    if (index == 0) {
      htmlCode = elem.value;
    }
    if (index == 1) {
      cssCode = elem.value;
    }
    if (index == 2) {
      jsCode = elem.value;
    }

    output.contentDocument.body.innerHTML = htmlCode;
    output.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;
    output.contentWindow.eval(jsCode);
  });
});
