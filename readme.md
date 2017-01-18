[![Build Status](https://travis-ci.org/alanev/starter.svg?branch=master)](https://travis-ci.org/alanev/starter)
[![devDependencies Status](https://david-dm.org/alanev/starter/dev-status.svg)](https://david-dm.org/alanev/starter?type=dev)

## CSS
- CSS разбит на модули
- Изоляция осуществляется при помощи BEM-нейминга
- Модули импортируются во входной точке [src/styles.css](src/styles.css)
- Используется синтаксис *SCSS*
- Используются возможности новых стандартов CSS (cssnext) и функции препроцессора (if, mixin, nested, extend, vars, each)
- Стили обрабатываются при помощи *PostCSS*-плагинов [tasks/styles.js](tasks/styles.js)
- CSS линтится при помощи Stylelint [.stylelint.json](.stylelint.json)
- Все основные переменные (цвета, размеры, медиа выражения, шрифты) выделены в отдельные файлы [modules/i-vars](modules/i-vars)
- Используются современные возможности (flexbox, calc, transform, transition, filter) и поэтому поддерживаются только современные браузеры, остальным выдается [сообщение](modules/g-errors) о необходимости обновиться

## HTML
- HTML разбит на модули
- Обработка html (в том числе сборка модулей) делается при помощи [PostXML-плагинов](tasks/templates.js).

## JS
- JS разбит на модули. Используется CommonJS подход
- Входной точкой является [src/defer.js](src/defer.js)
- Сборка происходит при помощи *webpack* [webpack.config.js](webpack.config.js)
- Для написания JS используется стандарт ES2015
- JS линтится при помощи ESLint [.eslintrc.json](.eslintrc.json)
- Так же отдельно собирается кастомный modernizr (для определения возможностей браузера) по конфигу [.modernizr.json](.modernizr.json)

## Сборка
- Для сборки используются инструменты напрямую без оберток
- Все файлы сборки разбиты по сущностям, которые они обрабатывают, и хранятся в папке [tasks](tasks)
- Все сборка написана по стандарту ES2015, поэтому для сборки нужна версия NodeJS больше 6

## Тестирование
- Тестируются основыные команды (сборка) на наличие необходимых файлов после выполнения [test/tasks.js](test/tasks.js)
- Все тесты и линтинг запускаются автоматически при изменениях на Github при помощи Travis CI [.travis.yml](.travis.yml)

## Команды
- `npm run styles` - сборка стилей
- `npm run templates` - сборка html
- `npm run scripts` - сборка скриптов
- `npm run images` - минификация и копирование изображений
- `npm run watch` - отслеживание файлов
- `npm run build` - полная сборка проекта
- `npm run modernizr` - сборка modernizr
- `npm run test` - тестирование
- `npm run deploy` - загрузка собранной версии на surge
