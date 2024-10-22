---
category: 'tilda-widgets'
price: '350'
coverImage: '/images/untitled-A1Nz.gif'
description: 'Очень эффектный фон для главного экрана'
slug: 'particles-main-bg'
author:
  name: ''
  picture: ''
status: 'published'
title: 'Анимированный фон (particles.js)'
isFree: ''
publishedAt: '2024-10-14T08:11:03.485Z'
---

# Анимированный фон для главного экрана (particles.js)

![](/images/untitled-M1Nj.gif)

## ID шаблона: **56716579**

(Инструкция по добавлению шаблона [тут](https://help-ru.tilda.cc/page-template))

## Шаг 1

Создаем Zero-блок, задаем ему высоту, фон и добавляем текст. Эффектнее всего смотрятся настройки на весь экран. После того, как сохранили, запишите его id, в дальнейшем он нам пригодится.

![](/images/screenshot-2024-10-19-at-11.39.45-c3ND.png)

## Шаг 2

Переходим опять в редактирование Zero-блока и добавляем пустой блок с Html кодом. Его можно разместить в любом удобном месте, чтобы не мешал дальнейшему дизайну (он не будет отображаться в опубликованной версии)

![](/images/screenshot-2024-10-19-at-11.46.54-QxMT.png)

## Шаг 3

Переходим на сайт [particles.js](https://vincentgarreau.com/particles.js/) и выставляем наиболее подходящие настройки. Можно установить количество точек, их скорость, фон и многое другое. Также можно выбрать уже готовые решения, например, с бегущим Nyan cat на фоне.\
Чуть ниже также будет код с моим примером настроек.

![](/images/screenshot-2024-10-19-at-11.48.57-U4MT.png)

## Шаг 4

После того, как выставили все необходимые настройки, нажимаем кнопку "CodePen" в правом верхнем углу. Откроется страница со сгенерированным кодом. Нам нужны будут блоки css и js.

![](/images/screenshot-2024-10-19-at-12.42.42-Y1Nz.png)

## Шаг 5

Переходим обратно в наш Zero-блок и заходим в созданный html, вставляем следующий код и заменяем код css и js на свой. В коде есть комментарии, где что нужно вставлять.\
Также необходимо вписать свой id Zero-блока (см. 1 шаг).\
Если хотите оставить все, как в моем примере, то ничего менять не нужно, кроме своего id.

```javascript
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
  const main = () => {
    const particlesWrap = document.createElement('div');
    particlesWrap.setAttribute('id', 'particles-js');

    //В следующей строке, вместо #rec813313392 нужно вписать свой id (.t396__filter необходимо оставить)
    const zBlock = document.querySelector('#rec813313392 .t396__filter');

    zBlock.append(particlesWrap);

    //Заменить на свой код js из codepen
    particlesJS('particles-js', {
      'particles': {
        'number': { 'value': 327, 'density': { 'enable': true, 'value_area': 800 } },
        'color': { 'value': '#7cd24a' },
        'shape': {
          'type': 'circle',
          'stroke': { 'width': 0, 'color': '#000000' },
          'polygon': { 'nb_sides': 5 },
          'image': { 'src': 'img/github.svg', 'width': 100, 'height': 100 },
        },
        'opacity': {
          'value': 0.5,
          'random': false,
          'anim': { 'enable': false, 'speed': 1, 'opacity_min': 0.1, 'sync': false },
        },
        'size': {
          'value': 3,
          'random': true,
          'anim': { 'enable': false, 'speed': 40, 'size_min': 0.1, 'sync': false },
        },
        'line_linked': {
          'enable': true,
          'distance': 150,
          'color': '#7cd24a',
          'opacity': 0.4,
          'width': 1,
        },
        'move': {
          'enable': true,
          'speed': 1,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': { 'enable': false, 'rotateX': 600, 'rotateY': 1200 },
        },
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': { 'enable': true, 'mode': 'grab' },
          'onclick': { 'enable': true, 'mode': 'push' },
          'resize': true,
        },
        'modes': {
          'grab': { 'distance': 191.80819180819182, 'line_linked': { 'opacity': 1 } },
          'bubble': { 'distance': 400, 'size': 40, 'duration': 2, 'opacity': 8, 'speed': 3 },
          'repulse': { 'distance': 200, 'duration': 0.4 },
          'push': { 'particles_nb': 4 },
          'remove': { 'particles_nb': 2 },
        },
      },
      'retina_detect': true,
    });
    var count_particles, stats, update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function () {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };
  //Конец кода js из codepen

  if (document.readyState !== 'loading') {
    main();
  } else {
    document.addEventListener('DOMContentLoaded', main);
  }
</script>

<style>
  /* Заменить на свой код css из codepen */
  body {
    margin: 0;
    font:
      normal 75% Arial,
      Helvetica,
      sans-serif;
  }
  canvas {
    display: block;
    vertical-align: bottom;
  } /* ---- particles.js container ---- */
  #particles-js {
    position: absolute;
    width: 120%;
    margin-left: -10%;
    height: 100%;
    background-color: #000000;
    background-image: url('');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  } /* ---- stats.js ---- */
  .count-particles {
    background: #000022;
    position: absolute;
    top: 48px;
    left: 0;
    width: 80px;
    color: #13e8e9;
    font-size: 0.8em;
    text-align: left;
    text-indent: 4px;
    line-height: 14px;
    padding-bottom: 2px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
  }
  .js-count-particles {
    font-size: 1.1em;
  }
  #stats,
  .count-particles {
    -webkit-user-select: none;
    margin-top: 5px;
    margin-left: 5px;
  }
  #stats {
    border-radius: 3px 3px 0 0;
    overflow: hidden;
  }
  .count-particles {
    border-radius: 0 0 3px 3px;
  }
  /* Конец кода css из codepen */
</style>
```

## Шаг 6

Публикуем свой проект и смотрим на результат ✌

![](/images/screenshot-2024-10-19-at-12.58.35-UzMj.png)