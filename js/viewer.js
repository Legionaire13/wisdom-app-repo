'use strict';
(function () {
  const input = document.getElementById("question")
  const output = document.getElementById("answer")

  function clearPlaceholder() {
    return input.setAttribute("placeholder", "")
  }

  function setDefaultPlaceholder() {
    return input.setAttribute("placeholder", "Задай вопрос!")
  }

  (function () {
    input.addEventListener("focus", clearPlaceholder)
    input.addEventListener("blur", setDefaultPlaceholder)
  }());

  return window.viewer = {
    inputField: input,

    renderResult: function (res) {
      return output.innerText = res;
    }
  }
}());