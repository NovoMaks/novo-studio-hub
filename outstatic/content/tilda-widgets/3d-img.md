---
tags: 'Бесплатная установка на сайт'
category: 'tilda-widgets'
price: '350'
coverImage: 'http://novo-studio-hub.s3.cloud.ru/tilda-widgets/3d-img/0.gif'
description: 'Картинка в Zero-блоке, которая будет следить за курсором пользователя'
slug: '3d-img'
author:
  name: 'Maksim'
  picture: ''
status: 'published'
title: 'Следящая 3D картинка'
publishedAt: '2024-10-31T12:26:32.954Z'
---

## ID шаблона: **57453073**

Инструкция по добавлению шаблона [тут](https://help-ru.tilda.cc/page-template)

Также мы можем абсолютно бесплатно добавить вам его на сайт и протестировать работоспособность на всех устройствах, просто напишите нам в [телеграм](https://t.me/Aliiishme).

## Шаг 1

Создайте Zero-блок, в который добавьте нужные элементы дизайна и Shape-фигуру, к которую мы в дальнейшем добавим анимацию слежения за курсором. Добавьте к ней фоновое изображение.

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/3d-img/1.png)

## Шаг 2

Нажмите на Shape-фигуру правой кнопкой мыши и выберите  "Add CSS Class Name". Впишите в поле значение "uc-3d-card".

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/3d-img/2.png)

## Шаг 3

Добавьте HTML блок и вынесите его из области видимости (он не будет отображаться на опубликованном проекте)

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/3d-img/3.png)

## Шаг 4

Вставьте в HTM блок следующий код:

```javascript
<script>
  const main = () => {
    const multiple = 10;
    const mouseOverContainer = document.getElementsByTagName('body')[0];
    const element = document.querySelector('.uc-3d-card');

    function transformElement(e) {
      const rotateX = (window.innerHeight - 2 * e.clientY) / 100;
      const rotateY = (window.innerWidth - 2 * e.clientX) / 100;

      element.style.transform = `perspective(1200px) rotateX(${rotateX < -40 ? -20 : rotateX}deg) rotateY(${rotateY}deg) scale3d(1,1,1)`;
    }

    mouseOverContainer.addEventListener('mousemove', (e) => {
      window.requestAnimationFrame(function () {
        transformElement(e);
      });
    });

    // Возвращать в исходное положение, когда курсор вне сайта
    // mouseOverContainer.addEventListener('mouseleave', (e) => {
    //   window.requestAnimationFrame(function () {
    //     element.style.transform = 'rotateX(0) rotateY(0)';
    //   });
    // });
  };
  if (document.readyState !== 'loading') {
    if (!window.matchMedia('(max-width: 900px)').matches) {
      main();
    }
  } else {
    console.log(window.matchMedia('(max-width: 900px)').matches);
    if (!window.matchMedia('(max-width: 900px)').matches) {
      document.addEventListener('DOMContentLoaded', main);
    }
  }
</script>
```

## Шаг 5

Адаптируйте верстку под все устройства. Обратите внимание, что для оптимизации анимация включена только на устройствах с шириной экрана больше 900px.

Публикуем свой проект и смотрим на результат ✌