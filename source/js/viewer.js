'use strict';
(function () {
  const input = document.getElementById("question")
  const output = document.getElementById("answer")

  function _clearPlaceholder() {
    return input.setAttribute("placeholder", "")
  }

  function _setDefaultPlaceholder() {
    return input.value = ""
    // return input.setAttribute("placeholder", "")
  }

  (function () {
    input.addEventListener("focus", _clearPlaceholder)
    input.addEventListener("blur", _setDefaultPlaceholder)
  }());

  return window.viewer = {
    getInputValue: function () {
      return input.value;
    },

    renderResult: function (res) {
      return output.innerText = `"${res}"`;
    }
  }
}());