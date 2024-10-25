---
tags: ''
category: 'tilda-widgets'
price: '150'
coverImage: 'http://novo-studio-hub.s3.cloud.ru/tilda-widgets/anim-laptop/0.gif'
description: 'Анимация начинается, когда объект появляется в видимой области, при наведении на экран можно поставить любое свое изображение'
slug: 'anim-laptop'
author:
  name: 'Maksim'
  picture: ''
status: 'published'
title: 'Анимированный ноутбук'
publishedAt: '2024-10-25T09:00:30.998Z'
---

## ID шаблона: **57101961**

Инструкция по добавлению шаблона [тут](https://help-ru.tilda.cc/page-template)

## Шаг 1

Создайте Zero-блок и добавьте изображение, которое хотите видеть при наведении на экран ноутбука. После добавления кликните на него правой кнопкой мыши и выберите "Copy Image Url". Запишите его куда-нибудь, он пригодится в следующем шаге.\
Вынесите изображение из области видимости, оно нужно только для того, чтобы получить ссылку.

## Шаг 2

Создайте блок html, выставите ему ширину 228 и высоту 260. Перенесите в нужное место. 

## Шаг 3

Вставьте следующий код в html-блок. Также необходимо заменить url изображения фона на свой. В коде место отмечено комментарием.

```javascript
<div class="macbook-wrap">
  <div class="macbook">
    <div class="macbook__topBord">
      <div class="macbook__display">
        <div class="macbook__load"></div>
      </div>
    </div>
    <div class="macbook__underBord">
      <div class="macbook__keybord">
        <div class="keybord">
          <div class="keybord__touchbar"></div>
          <ul class="keybord__keyBox">
            <li class="keybord__key key--01"></li>
            <li class="keybord__key key--02"></li>
            <li class="keybord__key key--03"></li>
            <li class="keybord__key key--04"></li>
            <li class="keybord__key key--05"></li>
            <li class="keybord__key key--06"></li>
            <li class="keybord__key key--07"></li>
            <li class="keybord__key key--08"></li>
            <li class="keybord__key key--09"></li>
            <li class="keybord__key key--10"></li>
            <li class="keybord__key key--11"></li>
            <li class="keybord__key key--12"></li>
            <li class="keybord__key key--13"></li>
          </ul>
          <ul class="keybord__keyBox--under">
            <li class="keybord__key key--14"></li>
            <li class="keybord__key key--15"></li>
            <li class="keybord__key key--16"></li>
            <li class="keybord__key key--17"></li>
            <li class="keybord__key key--18"></li>
            <li class="keybord__key key--19"></li>
            <li class="keybord__key key--20"></li>
            <li class="keybord__key key--21"></li>
            <li class="keybord__key key--22"></li>
            <li class="keybord__key key--23"></li>
            <li class="keybord__key key--24"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  const main = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const macbook = entry.target.querySelector('.macbook');
        if (entry.isIntersecting) {
          macbook.classList.add('macbook-animation');
          return;
        }
        macbook.classList.remove('macbook-animation');
      });
    });

    observer.observe(document.querySelector('.macbook-wrap'));
  };
  if (document.readyState !== 'loading') {
    main();
  } else {
    document.addEventListener('DOMContentLoaded', main);
  }
</script>

<style>
  .macbook {
    position: relative;
    width: 228px;
    height: 260px;
  }
  .macbook ul {
    list-style: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .macbook-animation .macbook__topBord {
    position: absolute;
    z-index: 0;
    top: 34px;
    left: 0;
    width: 128px;
    height: 116px;
    border-radius: 6px;
    transform-origin: center;
    background: linear-gradient(-135deg, #c8c9c9 52%, #8c8c8c 56%);
    transform: scale(0) skewY(-30deg);
    animation: topbord 0.4s 1.7s ease-out;
    animation-fill-mode: forwards;
  }
  .macbook-animation .macbook__topBord::before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 8px;
    left: 6px;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background: #000;
  }
  .macbook-animation .macbook__topBord::after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: -7px;
    left: 8px;
    width: 168px;
    height: 12px;
    transform-origin: left bottom;
    transform: rotate(-42deg) skew(-4deg);
    background: linear-gradient(-135deg, #c8c9c9 52%, #8c8c8c 56%);
  }
  .macbook-animation .macbook__display {
    position: absolute;
    z-index: 10;
    top: 17px;
    left: 12px;
    z-index: 2;
    width: calc(100% - 12px);
    height: calc(100% - 18px);
    background: linear-gradient(45deg, #3ba9ff, #c82aff);
  }
  /* Вставьте url своего изображения */
  .macbook-animation .macbook__display:hover {
    background-image: url('https://static.tildacdn.com/tild3864-3064-4061-a637-333637646534/Novo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .macbook-animation .macbook__display::before {
    content: '';
    position: absolute;
    z-index: 5;
    top: -9px;
    left: -6px;
    width: calc(100% + 12px);
    height: calc(100% + 18px);
    border-radius: 6px;
    background: linear-gradient(60deg, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.3) 60%);
  }
  .macbook-animation .macbook__load {
    position: relative;
    width: 100%;
    height: 100%;
    background: #222;
    animation: display 0.4s 4.3s ease;
    opacity: 1;
    animation-fill-mode: forwards;
  }
  .macbook-animation .macbook__load:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 80px;
    height: 6px;
    border-radius: 3px;
    box-sizing: border-box;
    border: solid 1px #fff;
  }
  .macbook-animation .macbook__load:after {
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    bottom: 0;
    margin: auto;
    width: 0;
    height: 6px;
    border-radius: 3px;
    background: #fff;
    animation: load 2s 2s ease-out;
    animation-fill-mode: forwards;
  }
  .macbook-animation .macbook__underBord {
    position: relative;
    left: 42px;
    bottom: -145px;
    width: 150px;
    height: 90px;
    border-radius: 6px;
    transform-origin: center;
    transform: rotate(-30deg) skew(30deg);
    background: linear-gradient(-45deg, #c8c9c9 61%, #8c8c8c 66%);
    animation: modal 0.5s 1s ease-out;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  .macbook-animation .macbook__underBord::before {
    content: '';
    position: absolute;
    z-index: 3;
    top: -8px;
    left: 8px;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background: #dcdede;
  }
  .macbook-animation .macbook__underBord::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: -8px;
    left: 12px;
    width: 170px;
    height: 15px;
    transform-origin: top left;
    background: linear-gradient(-45deg, #c8c9c9 61%, #8c8c8c 66%);
    transform: rotate(31deg) skew(-16deg);
  }
  .macbook-animation .macbook__keybord {
    position: relative;
    top: 0;
    left: 16px;
    z-index: 3;
    border-radius: 3px;
    width: calc(100% - 16px);
    height: 45px;
    background: #c8c9c9;
  }
  .macbook-animation .macbook__keybord::before {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 40px;
    height: 25px;
    border-radius: 3px;
    background: #c8c9c9;
  }
  .macbook-animation .keybord {
    position: relative;
    top: 2px;
    left: 2px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 3px);
    height: calc(100% - 4px);
  }
  .macbook-animation .keybord__touchbar {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: #000;
  }
  .macbook-animation .keybord__keyBox {
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 24px;
    margin: 1px 0 0 0;
    padding: 0 0 0 1px;
    box-sizing: border-box;
    list-style: none;
  }
  .macbook-animation .keybord__key {
    position: relative;
    width: 8px;
    height: 7px;
    margin: 1px;
    background: #000;
  }
  .macbook-animation .keybord__keyBox .keybord__key {
    transform: translate(60px, -60px);
    animation: key 0.2s 1.4s ease-out;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .macbook-animation .keybord__keyBox .keybord__key::before,
  .macbook-animation .keybord__keyBox .keybord__key::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
  }
  .macbook-animation .keybord__key::before {
    top: 8px;
    transform: translate(20px, -20px);
    animation: key1 0.2s 1.5s ease-out;
    animation-fill-mode: forwards;
  }
  .macbook-animation .keybord__key::after {
    top: 16px;
    transform: translate(40px, -40px);
    animation: key2 0.2s 1.6s ease-out;
    animation-fill-mode: forwards;
  }
  .macbook-animation .keybord__keyBox .key--12::before {
    width: 10px;
  }
  .macbook-animation .keybord__keyBox .key--13::before {
    height: 10px;
  }
  .macbook-animation .key--01 {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  .macbook-animation .key--02 {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
  .macbook-animation .key--03 {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
  }
  .macbook-animation .key--04 {
    grid-row: 1 / 2;
    grid-column: 4 / 5;
  }
  .macbook-animation .key--05 {
    grid-row: 1 / 2;
    grid-column: 5 / 6;
  }
  .macbook-animation .key--06 {
    grid-row: 1 / 2;
    grid-column: 6 / 7;
  }
  .macbook-animation .key--07 {
    grid-row: 1 / 2;
    grid-column: 7 / 8;
  }
  .macbook-animation .key--08 {
    grid-row: 1 / 2;
    grid-column: 8 / 9;
  }
  .macbook-animation .key--09 {
    grid-row: 1 / 2;
    grid-column: 9 / 10;
  }
  .macbook-animation .key--10 {
    grid-row: 1 / 2;
    grid-column: 10 / 11;
  }
  .macbook-animation .key--11 {
    grid-row: 1 / 2;
    grid-column: 11 / 12;
  }
  .macbook-animation .key--12 {
    grid-row: 1 / 2;
    grid-column: 12 / 13;
  }
  .macbook-animation .key--13 {
    grid-row: 1 / 2;
    grid-column: 13 / 14;
  }
  .macbook-animation .keybord__keyBox--under {
    margin: 0;
    padding: 0 0 0 1px;
    box-sizing: border-box;
    list-style: none;
    display: flex;
  }
  .macbook-animation .keybord__keyBox--under .keybord__key {
    transform: translate(80px, -80px);
    animation: key3 0.3s 1.6s linear;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .macbook-animation .key--19 {
    width: 28px;
  }
  @keyframes topbord {
    0% {
      transform: scale(0) skewY(-30deg);
    }
    30% {
      transform: scale(1.1) skewY(-30deg);
    }
    45% {
      transform: scale(0.9) skewY(-30deg);
    }
    60% {
      transform: scale(1.05) skewY(-30deg);
    }
    75% {
      transform: scale(0.95) skewY(-30deg);
    }
    90% {
      transform: scale(1.02) skewY(-30deg);
    }
    100% {
      transform: scale(1) skewY(-30deg);
    }
  }
  @keyframes display {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes load {
    0% {
      width: 0;
    }
    20% {
      width: 40px;
    }
    30% {
      width: 40px;
    }
    60% {
      width: 60px;
    }
    90% {
      width: 60px;
    }
    100% {
      width: 80px;
    }
  }

  @keyframes modal {
    0% {
      transform: scale(0) rotate(-30deg) skew(30deg);
      opacity: 0;
    }
    30% {
      transform: scale(1.1) rotate(-30deg) skew(30deg);
      opacity: 1;
    }
    45% {
      transform: scale(0.9) rotate(-30deg) skew(30deg);
      opacity: 1;
    }
    60% {
      transform: scale(1.05) rotate(-30deg) skew(30deg);
      opacity: 1;
    }
    75% {
      transform: scale(0.95) rotate(-30deg) skew(30deg);
      opacity: 1;
    }
    90% {
      transform: scale(1.02) rotate(-30deg) skew(30deg);
      opacity: 1;
    }
    100% {
      transform: scale(1) rotate(-30deg) skew(30deg);
      opacity: 1;
    }
  }

  @keyframes key {
    0% {
      transform: translate(60px, -60px);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
  @keyframes key1 {
    0% {
      transform: translate(20px, -20px);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
  @keyframes key2 {
    0% {
      transform: translate(40px, -40px);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
  @keyframes key3 {
    0% {
      transform: translate(80px, -80px);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
</style>
```

## Шаг 4

Публикуем свой проект и смотрим на результат ✌