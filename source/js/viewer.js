'use strict';
const input = document.getElementById("question")
const output = document.getElementById("answer")
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

  renderResult: function (res) {
    return output.innerText = `"${res}"`;
  }
}