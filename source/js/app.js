"use strict";
(function () {
  let recentAnswers = [];

  function rememberRecentAnswer(phrase) {
    if (!recentAnswers.includes(phrase)) {
      recentAnswers.unshift(phrase);
    }
    if (recentAnswers.length >= 10) recentAnswers.length = 10;
    // console.log("answer remembered!", phrase, recentAnswers)
  }

  // window.viewer.renderResult();
  function userInputHandler() {
    let userInput = window.viewer.getInputValue().toLowerCase();

    // рандомный ответ из нескольких подходящих
    function getRandowmAnswer(arr) {
      return arr[Math.floor((Math.random() * 10) % arr.length)]
    }

    function findMaxRatedAnswers(arr, name) {
      let rateArr = arr.map((item) => item[name])
      let maxRate = Math.max(...rateArr)
      return arr.filter((obj) => obj.rate == maxRate)
    }

    function checkForRecentAnswers(arr) {
      if (arr.length <= 0) return arr;
      return arr.map((obj) => {
        if (recentAnswers.includes(obj.phrase)) {
          // console.log("obj  : ", obj);
            (obj.rate > 2) ? obj.rate = 1 : obj.rate--;
        }
        return obj;
      });
    }

    if (userInput) {

      let pullOfAnswers = [];

      window.appData.answers.forEach((obj) => {
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
        pullOfAnswers = checkForRecentAnswers(pullOfAnswers)
      }

      console.log(recentAnswers);
      console.log("Rated answers: \n", pullOfAnswers.sort((a, b) => b.rate - a.rate));

      // если pullOfAnswers не пустой:
      if (pullOfAnswers.length > 0) {

        pullOfAnswers = findMaxRatedAnswers(pullOfAnswers, "rate")
          .map((obj) => obj.phrase)

        let answer = getRandowmAnswer(pullOfAnswers)
        window.viewer.renderResult(answer)
        rememberRecentAnswer(answer)
        // console.log("not empty, recent answers: ", recentAnswers)
        // console.log("resulting array of answers:\n" + pullOfAnswers)

      } else {  // pullOfAnswers пустой:
        pullOfAnswers = window.appData.fallback;

        // возможно стоит фильтровать здесь так
        pullOfAnswers = pullOfAnswers.filter((obj) => !(recentAnswers.includes(obj.phrase)))
        let answer = getRandowmAnswer(pullOfAnswers)
        window.viewer.renderResult(answer)
        rememberRecentAnswer(answer)
      }
    }
  }

  // общий обработчик на input
  window.viewer.inputField.addEventListener("change", userInputHandler)

}());