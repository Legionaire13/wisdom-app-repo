(function () {
  // window.viewer.renderResult();
  function userInputHandler() {
    let userInput = window.viewer.getInputValue().toLowerCase();

    // рандомный ответ из нескольких подходящих
    function getAnswer(arr) {
      return arr[Math.floor((Math.random() * 10) % arr.length)]
    }

    function findMaxRatedAnswers(arr, name) {
      let rateArr = arr.map((it) => it[name])
      let maxRate = Math.max(...rateArr)
      return arr.filter((obj) => obj.rate == maxRate)
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
          if (userInput.includes(keyword)) {
            currentObj.rate++
          }
        })

        if (currentObj.rate > 0) {
          pullOfAnswers.push(currentObj)
        }
      })

      console.log("Array of answers:\n", pullOfAnswers.sort((a, b) => b.rate - a.rate));
      
      // pullOfAnswers пустой? - дефолтные фразы, нет? - находим с максимальным рейтингом и выбираем любой из одинаковых если не один
      if (pullOfAnswers.length < 1) {
        window.viewer.renderResult(getAnswer(window.appData.fallback));
      } else {
        pullOfAnswers = findMaxRatedAnswers(pullOfAnswers, "rate")
          .map((obj) => obj.phrase)

        // сюда дописать дополнительные условия
        window.viewer.renderResult(getAnswer(pullOfAnswers));
        // console.log("resulting array of answers:\n" + pullOfAnswers)
      }


      //   // проверка на вопрос
      //   if (!userInput.endsWith("?")) return window.viewer.renderResult("А это точно вопрос? Какой вопрос - такой ответ!")
    }
  }

  // общий обработчик на input
  window.viewer.inputField.addEventListener("change", userInputHandler)

}());