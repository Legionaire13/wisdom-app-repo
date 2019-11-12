'use strict';
(function () {
  const input = document.getElementById("question")
  const output = document.getElementById("answer")

  function clearPlaceholder() {
    return input.setAttribute("placeholder", "")
  }

  function setDefaultPlaceholder() {
    input.value = ""
    return input.setAttribute("placeholder", "задай мне вопрос")
  }

  (function () {
    input.addEventListener("focus", clearPlaceholder)
    input.addEventListener("blur", setDefaultPlaceholder)
  }());

  return window.viewer = {
    inputField: input,

    getInputValue: function () {
      return input.value;
    },

    renderResult: function (res) {
      return output.innerText = `"${input.value}"

       - "${res}"`;
    }
  }
}());