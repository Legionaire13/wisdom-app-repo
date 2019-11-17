'use strict';
(function () {
  const answersArray = [{
      phrase: "Большой зелёный барабан",
      keywords: [
        "подарок",
        "машина",
        "тачка",
        "авто",
        "дарить",
        "загадал",
        "похож",
        "инструмент",
        "лежит",
        "музыка",
        "что"
      ]
    },
    {
      phrase: "Буль-буль-буль, Буль-буль-буль, \nСмолкла рыбка: Раз, два, три",
      keywords: [
        "чушь",
        "позвонит",
        "тонуть",
        "тонет",
        "ко дну",
        "тишина",
        "рыб"
      ]
    },
    {
      phrase: "В сказках летать возможно, да!",
      keywords: [
        "мысль",
        "мечта",
        "летать",
        "можно",
        "сон",
        "сны",
        "снится",
        "цели",
        "смогу",
        "научусь",
        "получится",
        "ковер самолет",
        "ковер-самолет"
      ]
    },
    {
      phrase: "Во всем успешна и прилежная к наукам",
      keywords: [
        "жена",
        "подруга",
        "бумага",
        "тетрадь",
        "она",
        "какой буду",
        "какая",
        "женщина",
        "девочка",
        "школьница"
      ]
    },
    {
      phrase: "Вся жизнь – один рабочий коленвал",
      keywords: [
        "процесс",
        "смысл",
        "образ",
        "жизнь",
        "будет",
        "будущее",
        "бесконечно",
        "долго ли еще",
        "новая",
        "работа",
        "что",
        "доколе",
        "до каких пор",
        "когда",
        "устал"
      ]
    },
    {
      phrase: "Выход простой - вам на еБайки Ком",
      keywords: [
        "ку",
        "что",
        "делать",
        "куда",
        "идти",
        "выход",
        "как",
        "где",
        "найти",
        "пойти",
        "поехать",
        "ссылк",
        "сайт",
        "ресурс",
        "ответ"
      ]
    },
    {
      phrase: "Где ждет любовь уже на первом этаже",
      keywords: [
        "лирика",
        "конец",
        "попса",
        "сопли",
        "девки",
        "бабы",
        "где",
        "место",
        "куда"
      ]
    },
    {
      phrase: "Где реки синие утонут в синеве океанов",
      keywords: [
        "путешествие",
        "остров",
        "шведки",
        "где",
        "место",
        "куда"
      ]
    },
    {
      phrase: "Где-то между Пить-не-надо и Морской...",
      keywords: [
        "где",
        "пить",
        "трезвость",
        "питер",
        "дача",
        "место",
        "куда"
      ]
    },
    {
      phrase: "Глазки кулачком не три",
      keywords: [
        "детство",
        "ребенок",
        "сон",
        "сны",
        "обида",
        "слеза",
        "плакать"
      ]
    },
    {
      phrase: "Звонить им, - 112",
      keywords: [
        "общее",
        "поможет",
        "подскажет",
        "кто"
      ]
    },
    {
      phrase: "Искусно от укусов скройте хвост и плавники",
      keywords: [
        "проблема",
        "конфликт",
        "дурак",
        "гад",
        "козел",
        "как",
        "что делать",
        "нападает",
        "договориться",
        "обижает"
      ]
    },
    {
      phrase: "Как попало",
      keywords: [
        "как",
        "куда",
        "каким",
        "каким образом",
        "добиться",
        "способ"
      ]
    },
    {
      phrase: "Когда познаешь все на кой",
      keywords: [
        "смысл",
        "когда",
        "зачем",
        "учить",
        "знать",
        "через сколько"
      ]
    },
    {
      phrase: "Крепче объятия, скоро кончатся муки",
      keywords: [
        "что",
        "будет",
        "завтра",
        "конец",
        "дружба",
        "долго",
        "устал",
        "надоело",
        "когда",
        "через сколько"
      ]
    },
    {
      phrase: "Крутнись ещё, мотор пока не стар",
      keywords: [
        "нива",
        "уаз",
        "дед",
        "возраст",
        "тоска",
        "ещё",
        "раз",
        "заново",
        "повторить",
        "опять",
        "сколько попыток",
        "сколько раз"
      ]
    },
    {
      phrase: "Кто-то встал не с той ноги,/ Гы-гы",
      keywords: [
        "неудача",
        "провал",
        "меня",
        "мне",
        "ему",
        "ей",
        "его",
        "зол",
        "не получается",
        "бесит",
        "плачу",
        "депрессия"
      ]
    },
    {
      phrase: "Ламбады хоровод",
      keywords: [
        "это",
        "что",
        "такое",
        "ремонт",
        "завтра",
        "будущее",
        "происходит",
        "что ждет",
        "называется",
        "делать",
        "танцевать"
      ]
    },
    {
      phrase: "Лопух - в колючках, в шипах розы",
      keywords: [
        "или",
        "выбор",
        "выбрать",
        "выбирать",
        "разница",
        "почему",
        "мужчина",
        "женщина",
        "взаимопонимание",
        "суть",
        "смысл"
      ]
    },
    {
      phrase: "Миг погружений заветных настал",
      keywords: [
        "неужели",
        "вдруг",
        "внезапно",
        "ого",
        "опана",
        "когда",
        "жду",
        "знак",
        "время"
      ]
    },
    {
      phrase: "Мышке с кошкой тесно, плата за разбой",
      keywords: [
        "расстаться",
        "быть",
        "вместе",
        "зверь",
        "отношение",
        "почему",
        "причина",
        "за что",
        "ругаться",
        "конфликт"
      ]
    },
    {
      phrase: "На вопрос любой ответ: задолбали, задолбали, задолбали",
      keywords: [
        "вопрос",
        "ответ",
        "сосед",
        "работа",
        "люди",
        "устал",
        "надоело",
        "выбрать",
        "доколе",
        "терпеть"
      ]
    },
    {
      phrase: "Наша пробка хороша, начинай сначала",
      keywords: [
        "москва",
        "мкад",
        "питер",
        "кольцо",
        "дорога",
        "пробка",
        "путь",
        "долго",
        "ждать",
        "терпеть",
        "начинай",
        "начало",
        "застря"
      ]
    },
    {
      phrase: "Небо Блю, а травка грин",
      keywords: [
        "лето",
        "отдых",
        "море",
        "бали",
        "цвет",
        "английский",
        "небо",
        "трава",
        "опишите",
        "окном"
      ]
    },
    {
      phrase: "Платите денежку баран, прибудут письма счастья вам",
      keywords: [
        "налоги",
        "капитал",
        "путин",
        "выборы",
        "развал",
        "нарушила",
        "слишком",
        "опаздала",
        "расплатиться",
        "возмездие",
        "компенсировать"
      ]
    },
    {
      phrase: "Пора решительно срезать букеты",
      keywords: [
        "что",
        "делать",
        "конец",
        "финал",
        "выбор",
        "выбрать",
        "выбирать",
        "когда",
        "ждать",
        "время",
        "перерыв",
        "затянутое",
        "длительное"
      ]
    },
    {
      phrase: "Поэт на час",
      keywords: [
        "кто",
        "он",
        "поболтать",
        "разговор",
        "человек"
      ]
    },
    {
      phrase: "Прогонят сон, зевоту от дремоты, \nСпокойные и знойные мужчины",
      keywords: [
        "кого",
        "позвать",
        "гости",
        "пригласить",
        "огонек",
        "кто",
        "устала",
        "скучаю",
        "бессонница",
        "спать",
        "засыпаю",
        "внук",
        "внучата",
        "мечта"
      ]
    },
    {
      phrase: "Сними усталость, я – готов!",
      keywords: [
        "вечер",
        "поздно",
        "гости",
        "друзья",
        "позвать",
        "устала",
        "жду",
        "принц",
        "см"
      ]
    },
    {
      phrase: "Судьбу искать на дне моря",
      keywords: [
        "отпуск",
        "что",
        "делать",
        "куда",
        "идти",
        "где",
        "встречу",
        "найти",
        "отыскать",
        "истина",
        "судьба"
      ]
    },
    {
      phrase: "Точно рассосется",
      keywords: [
        "печаль",
        "грусть",
        "делать",
        "пробка",
        "засор",
        "будет",
        "закончится",
        "финал",
        "болит",
        "ушиб",
        "рана",
        "ссадина",
        "операция"
      ]
    },
    {
      phrase: "Уже кипит душа, забытого в глуши, поэта?",
      keywords: [
        "как",
        "тебе",
        "это",
        "илон",
        "относишься",
        "отношение",
        "поэт",
        "душа"
      ]
    },
    {
      phrase: "Что скажут нам на это люди и соседи?",
      keywords: [
        "ремонт",
        "купить",
        "взять",
        "сделать",
        "брать",
        "предлагаю",
        "владимир",
        "давайте",
        "хотите",
        "стены",
        "перфоратор"
      ]
    },
    {
      phrase: "Чтобы любой на свете ветер обуздать,Достаточно суть паруса в себе познать",
      keywords: [
        "забота",
        "перемен",
        "волнуюсь",
        "тревожит",
        "закончится",
        "хочу",
        "сделать"
      ]
    },
    {
      phrase: "Шесть, семь, восемь, девять, десять, засыпаем дружно вместе",
      keywords: [
        "ней",
        "ее",
        "она",
        "женщина",
        "подруга",
        "бабы",
        "девки",
        "спать",
        "могу",
        "бессонници",
        "завал",
        "катастрофа",
        "тревожусь"
      ]
    },
    {
      phrase: "Это настроение такое",
      keywords: [
        "происходит",
        "мной",
        "волнует",
        "почему",
        "связи",
        "причина",
        "источник"
      ]
    },
    {
      phrase: "Я краснею, я краснею, от игривых фраз твоих",
      keywords: [
        "сказать",
        "девушке",
        "имя",
        "мужчина",
        "хотите",
        "желать",
        "предлагаю",
        "приглашать"
      ]
    },
    {
      phrase: "Страстью исказило лица",
      keywords: [
        "любовь",
        "эмоция",
        "угар",
        "чувство",
        "желание",
        "думать",
        "мысль",
        "почему",
        "чувствует",
        "причина"
      ]
    },
    {
      phrase: "Строго. Индивидуально",
      keywords: [
        "закон",
        "услуга",
        "товар",
        "стоимость",
        "кредит",
        "банк",
        "как",
        "привет",
        "как"
      ]
    },
    {
      phrase: "Кощеево царство в ожидании героя",
      keywords: [
        "сказка",
        "страна",
        "дно",
        "вечность",
        "надежда",
        "ждать",
        "выглядить",
        "смотреться",
        "россия",
        "ждет",
        "выборы"
      ]
    },
    {
      phrase: "Человек имеет законное право на вольнодумство и ожидание чуда в равной мере",
      keywords: [
        "вопрос",
        "смысл",
        "ремонт",
        "образ",
        "фантастика",
        "иметь",
        "быть",
        "привет",
        "жду",
        "выборы",
        "поступить"
      ]
    },
    {
      phrase: "А кто ответит за базар?",
      keywords: [
        "философия",
        "политика",
        "религия",
        "речь",
        "слово",
        "базар",
        "говорить",
        "думать",
        "делать",
        "хочу",
        "мечта",
        "готов",
        "спор",
        "предлагаю"
      ]
    },
    {
      phrase: "Насчитали ровно восемь",
      keywords: [
        "деньги",
        "попытка",
        "шанс",
        "счет",
        "сколько",
        "всего",
        "сколько"
      ]
    },
    {
      phrase: "Шесть на шесть",
      keywords: [
        "карты",
        "драка",
        "спор",
        "спорт",
        "играть",
        "масть",
        "сколько"
      ]
    },
    {
      phrase: "Крылья, ноги, много рук",
      keywords: [
        "мультфильм",
        "страус",
        "чубакка",
        "он",
        "ты",
        "я",
        "выглядить",
        "что",
        "тело"
      ]
    },
    {
      phrase: "Божественный замысел о человеке - ухаживать за садом и пасти скот",
      keywords: [
        "смысл",
        "бог",
        "думать",
        "бабушка",
        "делать",
        "фильм",
        "кино",
        "жизни",
        "сад",
        "скот",
        "призвание",
        "миссия",
        "задача"
      ]
    },
    {
      phrase: "Сложно быть богом, трудно человеком, глупо быть человеком, пытающимся занять на Земле место Бога",
      keywords: [
        "сложно",
        "зачем",
        "наука",
        "математика",
        "жизнь",
        "сила",
        "мечтаю",
        "стать",
        "заработать",
        "убедить",
        "заставить",
        "хочу",
        "планровать"
      ]
    },
    {
      phrase: "А кто руки не решится протянуть — тот протянет ноги",
      keywords: [
        "дать",
        "жизнь",
        "образ",
        "готов",
        "работа",
        "помощь",
        "команда",
        "сочувствие"
      ]
    },
    {
      phrase: "А готов ли ты стать богом или гвоздиком для подвески \"Галактика\" в отдельной ячейке камеры хранения?",
      keywords: [
        "мода",
        "жизнь",
        "зачем",
        "борьба",
        "работа",
        "смысл",
        "мечта",
        "план",
        "цель",
        "хочу",
        "задача"
      ]
    },
    {
      phrase: "Кому камень, кому крест, кому с курицей насест",
      keywords: [
        "весело",
        "шутка",
        "женщина",
        "жена",
        "будущее",
        "подарок",
        "наследство",
        "результат",
        "итог"
      ]
    },
    {
      phrase: "Результат человеческого труда не имеет положительного результата, когда миром правят алчные идиоты",
      keywords: [
        "работа",
        "труд",
        "политика",
        "дело",
        "борьба",
        "деньги",
        "богат",
        "сделать",
        "заняться",
        "работать",
        "совершить",
        "поступить"
      ]
    },
    {
      phrase: "В гуще листвы случайности кружений, не верю я в случайность совпадений",
      keywords: [
        "осень",
        "будет",
        "случиться",
        "случай",
        "фарт",
        "удача",
        "везение",
        "погода",
        "совпадение",
        "почему",
        "специально",
        "план",
        "случайность",
        "знак",
        "знамение"
      ]
    },
    {
      phrase: "К чему накал этих египетских страстей, осенних марафонов грусти и соплей?",
      keywords: [
        "печаль",
        "ли",
        "плохо",
        "грусть",
        "болезнь",
        "девки",
        "бабы",
        "женщина",
        "смысл",
        "жизнь",
        "бытие",
        "осень",
        "слякоть",
        "депрессия",
        "погода",
        "суть"
      ]
    },
    {
      phrase: "Самый простой - решиться и бросить от отвращения",
      keywords: [
        "курить",
        "пить",
        "вино",
        "пиво",
        "самогон",
        "девки",
        "бабы",
        "бросить",
        "закончить",
        "прервать",
        "остановиться",
        "перестать",
        "отменить",
        "способ"
      ]
    },
    {
      phrase: "Нужно лечить, а не публично выпрашивать милость на очередную затяжку",
      keywords: [
        "курить",
        "пить",
        "деньги",
        "возраст",
        "дедушка",
        "пенсия",
        "болезнь",
        "бросить",
        "перестать",
        "мзбавиться",
        "делать"
      ]
    },
    {
      phrase: "После восемнадцати отброшенных лет смотрю на курв спокойно",
      keywords: [
        "жизнь",
        "скука",
        "интернет",
        "онлайн",
        "девки",
        "бабы",
        "фильм",
        "кино",
        "курва",
        "женщина",
        "как",
        "относитесь",
        "думаете"
      ]
    },
    {
      phrase: "В любом случае дело в мерах добра и зла",
      keywords: [
        "что",
        "смысл",
        "дело",
        "разное",
        "как",
        "почему",
        "причина",
        "корень",
        "основа",
        "источник"
      ]
    },
    {
      phrase: "Есть в отражениях и девочки, и мальчики",
      keywords: [
        "жена",
        "думать",
        "пошлые",
        "мысли",
        "видеть",
        "разное",
        "какой",
        "пол",
        "ребенка",
        "кто",
        "отражение"
      ]
    },
    {
      phrase: "Возможно, человек и не один такой дурак",
      keywords: [
        "мы",
        "они",
        "друзья",
        "вместе",
        "быть",
        "марсе",
        "нло",
        "вселенной",
        "эволюция",
        "космос"
      ]
    },
    {
      phrase: "Фанатики ненавидят тех, кто думает иначе, а власть - тех, кто думает",
      keywords: [
        "политика",
        "страна",
        "за",
        "нет",
        "они",
        "власть",
        "президент",
        "выборы",
        "коррупция",
        "полиция",
        "закон"
      ]
    },
    {
      phrase: "О языке и варварских обычаях говорить можно беЗконечно, но некоторые звуки вырываются инстинктивно, несмотря на многовековое табуирование человеческой лексики",
      keywords: [
        "что",
        "сказать",
        "слово",
        "говор",
        "закон",
        "язык",
        "похмелье",
        "застолье",
        "праздник",
        "отпраздновать",
        "шашлык",
        "вечеринка",
        "дискотека",
        "бар",
        "рыбалка",
        "баня"
      ]
    },
    {
      phrase: "О дикарях и русских варварах",
      keywords: [
        "мы",
        "они",
        "разница",
        "о чем",
        "телевизор",
        "ящик",
        "книга",
        "сон",
        "мечта",
        "сожаление"
      ]
    },
    {
      phrase: "Языковеды скромно умалчивают о происхождении слова дикарь",
      keywords: [
        "дача",
        "образ",
        "пить",
        "пиво",
        "самогон",
        "дикарь",
        "я",
        "характер",
        "сущность",
        "талант",
        "навык",
        "ключевой"
      ]
    },
    {
      phrase: "И золотые рыбки ведутся клюнуть на выкрутасы обычного земляного червя",
      keywords: [
        "я",
        "крутой",
        "делать",
        "девки",
        "бабы",
        "женщина",
        "привлечь",
        "женщины",
        "внимание",
        "соблазнить",
        "завоевать",
        "знакомиться"
      ]
    },
    {
      phrase: "Доагностика кармы пиарщика похмельем",
      keywords: [
        "будет",
        "со",
        "мной",
        "ок",
        "сложно",
        "практика",
        "книга",
        "фильм",
        "пиарщик",
        "общественность",
        "как",
        "последстви",
        "бодун",
        "карма",
        "ожида"
      ]
    },
    {
      phrase: "Мяу-Мяу-Мур Мяу-Мур!",
      keywords: [
        "говорит",
        "кошка",
        "котенок",
        "помяукайте"
      ]
    },
    {
      phrase: "Останется секрет секретом!",
      keywords: [
        "почему",
        "как",
        "когда",
        "сколько",
        "зачем",
        "кто",
        "какие",
        "секрет"
      ]
    },
    {
      phrase: "По-тру-бе, Бе-бе-бе!",
      keywords: [
        "как",
        "образом",
        "способом",
        "решение",
        "выход",
        "залезать"
      ]
    }
  ]

  // не более 10
  const fallbackPhrases = [
    "А кто ответит за базар?",
    "К чему накал этих египетских страстей, \nОсенних марафонов грусти и соплей?",
    "В любом случае дело в мерах добра и зла",
    "Звоните 112",
    "Буль-буль-буль, Буль-буль-буль,Смолкла рыбка",
    "Уже кипит душа, забытого в глуши поэта",
    "Останется секрет секретом!",
    "Что скажут нам на это люди и соседи?",
    "Мяу-Мяу-Мур Мяу-Мур",
    "Бе-бе-бе, По-тру-бе"
  ]

  return window.appData = {
    answers: answersArray,
    fallback: fallbackPhrases
  };
})();