"use strict";
import appData from "./appData.js";
import viewer from "./viewer.js";

(function () {
  let recentAnswers = [];

  function rememberRecentAnswer(phrase) {
    if (!recentAnswers.includes(phrase)) {
      recentAnswers.unshift(phrase);
    }
    if (recentAnswers.length >= 10) recentAnswers.length = 10;
    // console.log("answer remembered!", phrase, recentAnswers)
  }

  // viewer.renderResult();
  function userInputHandler() {
    let userInput = viewer.getInputValue().toLowerCase();

    // рандомный ответ из нескольких подходящих
    function _getRandowmAnswer(arr) {
      return arr[Math.floor((Math.random() * 10) % arr.length)]
    }

    function _findMaxRatedAnswers(arr, propName) {
      let rateArr = arr.map((item) => item[propName]),
          maxRate = Math.max(...rateArr)
      return arr.filter((obj) => obj.rate == maxRate)
    }

    function _checkForRecentAnswers(arr) {
      if (arr.length <= 0) return arr;
      return arr.map((obj) => {
        if (recentAnswers.includes(obj.phrase)) {
            (obj.rate > 2) ? obj.rate = 1 : obj.rate--;
        }
        return obj;
      });
    }

    if (userInput) {

      let pullOfAnswers = [];

      appData.answers.forEach((obj) => {
        // mock:
        // {
        //   phrase: "Большой зелёный барабан",
        //   keywords: ["подарок", "загадал", "похож", "инструмент", "лежит"]
        // }

        const currentObj = {
          phrase: obj.phrase,
          rate: 0
        }

        obj.keywords.forEach((keyword) => {
          if (userInput.includes(keyword)) return currentObj.rate++
        })

        if (currentObj.rate > 0) return pullOfAnswers.push(currentObj)
      })

      if (recentAnswers.length > 0) {
        pullOfAnswers = _checkForRecentAnswers(pullOfAnswers)
      }

      console.log("Input: \n", userInput, "\n\nRecent Answers: \n", recentAnswers, "\n\nRated answers: \n", pullOfAnswers.sort((a, b) => b.rate - a.rate));

      // если pullOfAnswers не пустой:
      if (pullOfAnswers.length > 0) {

        pullOfAnswers = _findMaxRatedAnswers(pullOfAnswers, "rate")
          .map((obj) => obj.phrase)

        let answer = _getRandowmAnswer(pullOfAnswers)
        viewer.renderResult(answer)
        rememberRecentAnswer(answer)
        // console.log("not empty, recent answers: ", recentAnswers)
        // console.log("resulting array of answers:\n" + pullOfAnswers)

      } else {
        // pullOfAnswers пустой:
        pullOfAnswers = appData.fallback;

        // возможно стоит фильтровать здесь так
        pullOfAnswers = pullOfAnswers.filter((obj) => !(recentAnswers.includes(obj.phrase)))
        let answer = _getRandowmAnswer(pullOfAnswers)
        viewer.renderResult(answer)
        rememberRecentAnswer(answer)
      }
    }
  }

  // общий обработчик на input
  document.getElementById("question").addEventListener("change", userInputHandler)

}());