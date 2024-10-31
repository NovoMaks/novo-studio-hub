---
tags: ''
category: 'tilda-widgets'
price: ''
coverImage: 'http://novo-studio-hub.s3.cloud.ru/tilda-widgets/future-btn/0.gif'
description: 'Футуристичная кнопка для привлечения внимания к целевому действию'
slug: 'future-btn'
author:
  name: 'Maksim'
  picture: ''
status: 'published'
title: 'Футуристичная кнопка'
publishedAt: '2024-10-21T07:18:20.173Z'
---

## ID шаблона: **56813301**

(Инструкция по добавлению шаблона [тут](https://help-ru.tilda.cc/page-template))

## Шаг 1

Создаем новый Zero-блок или заходим в существующий и добавляем в него кнопку. Выставляем прозрачный фон для кнопки, необходимый размер и цвет текста (в моем случае это #1BFD9C).

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/future-btn/1.png)

## Шаг 2

Нажимаем правой кнопкой мыши на кнопку и выбираем "Add CSS Class Name". Выставляем новое значение класса future-btn.

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/future-btn/2.png)

## Шаг 3

Добавляем в Zero-блок html код, ставим его в любое удобное место, чтобы не мешал дальнейшему дизайну (на опубликованном проекте его видно не будет). Вписываем в него код, который представлен ниже. Комментарием в коде написано, где нужно изменить цвет кнопки на ваш (желательно использовать то же цвет, что и для текста).

```javascript
<style>
  .future-btn {
    --future-btn-color: #1bfd9c;
    cursor: pointer;
    font-size: 15px;
    padding: 0.7em 2.7em;
    letter-spacing: 0.06em;
    position: relative;
    font-family: inherit;
    border-radius: 0.6em;
    overflow: hidden;
    transition: all 0.3s;
    line-height: 1.4em;
    border: 2px solid var(--future-btn-color);
    background: linear-gradient(
      to right,
      rgba(27, 253, 156, 0.1) 1%,
      transparent 40%,
      transparent 60%,
      rgba(27, 253, 156, 0.1) 100%
    );
    color: var(--future-btn-color);
    box-shadow:
      inset 0 0 10px rgba(27, 253, 156, 0.4),
      0 0 9px 3px rgba(27, 253, 156, 0.1);
  }

  .future-btn:hover {
    color: #82ffc9;
    box-shadow:
      inset 0 0 10px rgba(27, 253, 156, 0.6),
      0 0 9px 3px rgba(27, 253, 156, 0.2);
  }

  .future-btn:before {
    content: '';
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(27, 253, 156, 0.1) 40%,
      rgba(27, 253, 156, 0.1) 60%,
      transparent 100%
    );
  }

  .future-btn:hover:before {
    transform: translateX(15em);
  }
</style>
```

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/future-btn/3.png)

## Шаг 4

Публикуем свой проект и смотрим на результат ✌\
Мы также можем помочь вам изменить любую кнопку из стандартных блоков, просто напишите нам об этом в [телеграм](https://t.me/Aliiishme).
