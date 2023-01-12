## en

Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'

Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied

---

## ru

BA вашего стартапа сообщил маркетологам, что у вашего веб-сайта большая аудитория в Скандинавии и соседних странах. Маркетинг считает, что было бы здорово приветствовать посетителей сайта на их родном языке. К счастью, вы уже используете API, который определяет местоположение пользователя, так что это легкая победа.

Задание
Подумайте о способе хранения языков в виде базы данных (например, объекта). Языки перечислены ниже, так что вы можете копировать и вставлять!
Напишите функцию «приветствия», которая принимает параметр «язык» (всегда строка) и возвращает приветствие, если оно есть в вашей базе данных. По умолчанию должен быть английский, если языка нет в базе данных или в случае неверного ввода.
База данных
английский: «Добро пожаловать»,
чешский: «Витейте»,
датский: «Велкомст»,
голландский: «Велком»,
эстонский: «Тере тулемаст»,
финский: «Терветулоа»,
фламандский: «Welgekomen»,
французский: «Бьенвеню»,
немецкий: «Willkommen»,
ирландский: «Failte»,
итальянский: «Бенвенуто»,
латышский: «Гайдитс»,
литовский: «Лаукиамас»,
польский: 'Witamy',
испанский: «Бьенвенидо»,
шведский: «Валкоммен»,
валлийский: «Крозо»
Возможные недопустимые входные данные включают:

IP_ADDRESS_INVALID — недопустимый IP-адрес ipv4 или ipv6.
IP_ADDRESS_NOT_FOUND - IP-адрес отсутствует в базе данных
IP_ADDRESS_REQUIRED — IP-адрес не указан
