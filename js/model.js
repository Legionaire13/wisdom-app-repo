'use strict';
(function () {
  const KEYWORDS_AND_PHRASES = [{
    keywords: ["c кем"],
    phrases: [
      "Сними усталость, я – готов!"
    ]
  },
  {
    keywords: ["через сколько"],
    phrases: [
      "Крепче объятия, скоро кончатся муки.",
      "Пора решительно срезать букеты!"
    ]
  },
  {
    keywords: ["как"],
    phrases: [
      "Искусно от укусов скройте хвост и плавники..",
      "Пора решительно срезать букеты!"
    ]
  }
  ]

  return (function (prop) {
    return window.appModel = prop;
  })(KEYWORDS_AND_PHRASES)
})();