'use strict';
const input = document.getElementById("question")
const output = document.getElementById("answer")
const exclamation = document.getElementById("exclamation")
let val;

function _clearPlaceholder() {
  input.value = ""
  return input.setAttribute("placeholder", "")
}

function _setDefaultPlaceholder() {
  val = val || "";
  return input.value = `${ val }`
  // return input.setAttribute("placeholder", "")
}

(function () {
  input.addEventListener("focus", _clearPlaceholder)
  input.addEventListener("blur", _setDefaultPlaceholder)
}());


export default {
  getInputValue: function () {
    val = input.value;
    return input.value;
  },

  toggleExclamation: function() {
    if (exclamation.classList.contains("app__exclamation--visible")) {
      return exclamation.classList.remove("app__exclamation--visible")
    }
    return exclamation.classList.add("app__exclamation--visible")
  },

  renderResult: function (res) {
    return output.innerText = `"${res}"`;
  }
}