---
tags: ''
category: 'tilda-widgets'
price: '350'
coverImage: 'http://novo-studio-hub.s3.cloud.ru/tilda-widgets/before-after/0.gif'
description: 'Слайдер До-После поможет показать результат ваших работ'
slug: 'before-after'
author:
  name: 'Maksim'
  picture: 'https://avatars.githubusercontent.com/u/116797616?v=4'
status: 'published'
title: 'Блок До-После'
publishedAt: '2024-10-24T11:37:02.281Z'
---

## ID шаблона: **57051003**

Инструкция по добавлению шаблона [тут](https://help-ru.tilda.cc/page-template)

## Шаг 1

Создаем Zero-блок и внутри него добавляем 2 изображения, переносим их из области видимости блока.\
Загружаем необходимые изображения до-после.

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/before-after/1.png)

## Шаг 2

Теперь нужно получить ссылки для изображений. Для этого кликаем правой кнопкой мыши по добавленному изображению и нажимаем "Copy Image Url". Сделайте так для двух изображений и запишите url в заметку.

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/before-after/2.png)

## Шаг 3

Добавляем блок html и вставляем в него следующий код. Замените в коде url на те, которые скопировали в предыдущем шаге.

```javascript
<script defer src="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/styles.css"
/>

<img-comparison-slider>
  <!--Вставьте свой url изображения до-->
  <img
    slot="first"
    src="https://static.tildacdn.com/tild6365-3662-4562-b838-323263623363/before-cgi.jpg"
  />
  <!--Вставьте свой url изображения после-->
  <img
    slot="second"
    src="https://static.tildacdn.com/tild3363-3334-4733-b262-376166643438/after-cgi.jpg"
  />
</img-comparison-slider>

<style>
  img-comparison-slider {
    outline: none;
  }

  img-comparison-slider img {
    width: 100%;
  }
</style>
```

## Шаг 4

Теперь необходимо поставить нужную ширину и высоту для html блока на всех типах устройства. Очень важно, чтобы она была пропорциональна оригинальным размерам изображения. У меня в примере изображения квадратные, поэтому и блок html на всех устройствах будет квадратным. Нельзя выставлять в %.

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/before-after/3.png)

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/before-after/4.png)

## Шаг 5

Публикуем свой проект и смотрим на результат ✌