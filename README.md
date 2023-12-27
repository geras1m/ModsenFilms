# Tестовое задание приложение Youtube

## Содержание

- [Техническое задание](#Техническое-задание)
- [API](#API)
- [Необходимый функционал](#Необходимый-функционал)
- [Пример графического представления](#Пример-графического-представления)
- [Используемые технологии](#Используемые-технологии)
- [Тестирование](#Тестирование)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Реализовать приложение, схожее по своей функциональности с поиском фильмов.

## API:

Список API для использования(если представленные API не удовлетворяют каким-либо условиям задания, можно использовать любые
другие открытые API для видео):
- ***[IMDb Top 100 Movies](https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/)*** - топ фильмов по рейтингу imdb.
- ***[Movie Details](https://rapidapi.com/goodmoviesaps/api/movie-details1/)*** - поиск фильмов по imdb id.
- ***[OTT details](https://rapidapi.com/gox-ai-gox-ai-default/api/ott-details/)*** - продвинутый поиск фильмов по параметрам..


## Необходимый функционал

- реализация elastic search
- реализация infinity scroll
- поиск фильмов по введенному названию
- поиск фильмов по категориям
- просмотр фильма
- смена темы приложения

### Дополнительные указания

- При загрузке фильмов необходимо отображать skeleton loaders для фильмов.
- Запросы на сервисы должны кэшироваться для избежания блокировки на бесплатных и публичных провайдерах и снижения трафика.
- Использование любых библиотек для стилей, валидации и так далее - запрещены, кроме тех, которые рекомендуемы в пункте “Используемые технологии”.
- Настроить webpack необходимо самостоятельно.
- Использовать Redux Toolkit Query для реализации асинхронных запросов.
- Использовать Typescript для типизации данных.

## Пример графического представления

Ссылка на макет: [Макет "ModsenFilms"](<https://www.figma.com/file/krzI1oCGjlE4JmGtNj5vJ9/ModsenFilms?node-id=0-1&t=ZFuzpWvjPwYGghYB-0>).


### Также проект предполагает

- Организацию файловой структуры react приложения. Ссылка на структуру: [Cтруктура проекта](https://github.com/mkrivel/structure).
- Деплой приложения на платформу GitHub Pages или иные другие (Netlify, ...).
- Настроить конфигурации ***babel***, ***eslint***, *****prettier*.
- Использование TypeScript для типизирования и уменьшения количества потенциальных багов.
- Обработку ошибок через паттерн ***Error Boundaries***.
- Использование алиасов для импортирования файлов.
- Оптимизацию дизайна под мобильные устройства.
- Покрытие тестами всего приложения (cypress, jest, ...).
- Обязательную анимацию при наведения, нажатии на кнопки, появлении элементов на странице при рендере и скролле.
- Использовать webpack для сборки приложения.

## Описание экранов

В шапке страницы должен быть реализован поиск фильмов и смена темы приложения.
На первом этапе список фильмов отображается рандомно. После того как пользователь ввел название фильма и нажал на кнопку "Enter" или же на поиск, то у него
высвечивается список фильмов,  название которых совпадениет с введенным названием. Если же нет никаких совпадений, то отображается альтернативный текст.
Также должен быть реализован infinity scroll при нажатии на кнопку "Show More", количество погружаемых фильмов - 16.
При поиске фильма должен быть реализован elastic search.
На превью у каждого фильма есть дополнительная информация - название, режиссер и год выпуска фильма.
Также пользователь может искать фильмы по категориям.
При нажатии на видео, должно открываться модальное окно и проигрываться видео с включенным звуком.


## Используемые технологии

### Для react

- ***node.js*** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код).
- ***babel*** - транспайлер, преобразующий код из одного стандарта в другой.
- ***eslint*** - линтер для JavaScript кода.
- ***prettier*** - инструмент для автоформатирования кода.
- ***redux toolkit*** - библиотека управления состоянием приложения.
- ***yarn*** - менеджер пакетов.
- ***react*** - JavaScript-библиотека для создания пользовательских интерфейсов.
- ***typescript*** - строго типизированный язык для уменьшения количества потенциальных багов.
- ***webpack*** -  сборщик модулей, который позволяет скомпилировать JavaScript-модули в единый JS-файл.
- ***styled-components*** - система стилизации react компонентов.
- ***cypress*** — e2e тестирование для веб приложений.
- ***jest*** — интеграционное тестирование для веб приложений.

## Тестирование

Реализовать e2e тестирование и unit-тестирование c полным покрытием функционала приложения:
- Модуль поиска
- Модуль смены темы
- Модуль поиска по категориям
- Модуль отображаемых фильмов


## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[React hooks](https://reactjs.org/docs/hooks-intro.html)

[Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

[Eslint](https://eslint.org/docs/user-guide/configuring)

[Prettier](https://prettier.io/docs/en/install.html)

[Babel](https://babeljs.io/docs/en/configuration)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Тестирование Jest](https://jestjs.io/ru/docs/getting-started)

[Styled-components](https://www.styled-components.com/docs)

[GitHub Actions](https://github.com/features/actions)

[Heroku](https://devcenter.heroku.com/articles/heroku-cli)

[Husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)
