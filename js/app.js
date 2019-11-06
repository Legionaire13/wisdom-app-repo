(function () {
  // window.viewer.renderResult();

  function userInputHandler() {
    let result, userInput = window.viewer.getInputValue().toLowerCase();

    if (userInput) {

    // mock:
    // {
    //   keywords: ["что"],
    //   phrases: [
    //     // "Большой зелёный барабан!",
    //     // "Звонить им, - Сто двенадцать!",
    //     "Ламбады хоровод!"
    //   ]
    // }

      // рандомный ответ из нескольких подходящих
      function getAnswer(arr) {
        return arr[Math.floor((Math.random() * 10) % arr.length)]
      }

      result = window.appData.keywordsAndPhrasesSet.find((obj) => userInput.includes(obj.keywords));

      // проверка на вопрос
      if (!userInput.endsWith("?")) return window.viewer.renderResult("А это точно вопрос? Какой вопрос - такой ответ!")

      // вывод результата
      return (result !== undefined) ? window.viewer.renderResult(getAnswer(result.phrases)) :
        window.viewer.renderResult(getAnswer(window.appData.fallbackPhrasesSet))
    }
  }

  // общий обработчик на input
  window.viewer.inputField.addEventListener("change", userInputHandler)

}());