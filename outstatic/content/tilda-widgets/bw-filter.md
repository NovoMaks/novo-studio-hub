---
tags: ''
category: 'tilda-widgets'
price: '100'
coverImage: 'http://novo-studio-hub.s3.cloud.ru/tilda-widgets/bw-filter/0.gif'
description: 'Привлеките внимание к своим блокам с эффектом цветной картинки при наведении'
slug: 'bw-filter'
author:
  name: 'Maksim'
  picture: ''
status: 'published'
title: 'Чб-фильтр на Zero-блок'
publishedAt: '2024-10-23T08:10:15.916Z'
---

## ID шаблона: **56969877**

Инструкция по добавлению шаблона [тут](https://help-ru.tilda.cc/page-template)

## Шаг 1

Создайте Zero-блок, выставите ему ширину 100%, высоту 150px и поставьте Scale grid container = Autoscale to window width, чтобы блок был всегда на всю ширину.

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/bw-filter/1.png)

## Шаг 2

Добавьте на Zero-блок Shape, удалите у него фоновый цвет, выставите ширину и высоту в 100% и установите необходимое цветное изображение на фон. Также можно добавить текст по центру и выставить ссылку.

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/bw-filter/2.png)

## Шаг 3

Сохраните блок и выйдите из режима редактирования.\
Нажмите на настройки у Zero-блока и впишите в BLOCK CSS CLASS NAME значение uc-black-filter

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/bw-filter/3.png)

## Шаг 4

Продублируйте Zero-блок и установите другие фоновые изображения у Shape. В моем случае это еще 2 блока.

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/bw-filter/4.png)

## Шаг 5

Добавьте html блок ниже всех блоков и впишите туда следующий код

```javascript
<style>
    .uc-black-filter {
        filter: grayscale();
        transition: filter 0.4s;
    }
    .uc-black-filter:hover {
        filter: none;
    }
    
    .uc-black-filter .t-bgimg {
        background-size: 100% !important;
        transition: all 0.3s ease-in-out; 
    }
    
    .uc-black-filter:hover .t-bgimg {
        background-size: 110% !important;
    }
</style>
```

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/bw-filter/5.png)

## Шаг 6

Публикуем свой проект и смотрим на результат ✌