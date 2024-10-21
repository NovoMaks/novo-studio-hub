---
category: 'tilda-widgets'
price: '300'
coverImage: 'http://novo-studio-hub.s3.cloud.ru/tilda-widgets/cursor-water/0.gif'
description: 'Курсор в форме капли с эффектом негатива при наведении на объекты'
slug: 'cursor-water'
author:
  name: 'Maksim'
  picture: 'https://avatars.githubusercontent.com/u/116797616?v=4'
status: 'published'
title: 'Курсор-капля'
publishedAt: '2024-10-21T07:51:19.201Z'
---

# Курсор-капля

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/cursor-water/0.gif)

## Шаг 1

В самом низу страницы добавляем html-блок, и вставляем туда код, который представлен ниже.\
Также можно сделать, чтобы курсор был сразу на всех ваших страницах, для этого добавьте код в подвал сайта. Как создать общий подвал (footer) для всех страниц, читайте [тут](https://help-ru.tilda.cc/header-footer).

```javascript
<svg xmlns="http://www.w3.org/2000/svg" class="gosss" version="1.1" width="100%">
  <defs>
    <filter id="gosss">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
        result="gosss"
      ></feColorMatrix>
      <feComposite in="SourceGraphic" in2="gosss" operator="atop"></feComposite>
    </filter>
  </defs>
</svg>
<div id="bubble-cursor" class="bubble-cursor"></div>

<style>
  svg:not(:root) {
    overflow: hidden;
    display: none;
  }
  .gosss {
    position: absolute;
    top: 0;
  }
  .bubble-cursor {
    pointer-events: none;
    position: fixed;
    display: block;
    border-radius: 0;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    mix-blend-mode: difference;
    top: 0;
    left: 0;
    z-index: 1000;
    -webkit-filter: url(#gosss);
    filter: url(#gosss);
  }
  .bubble-cursor span {
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 20px;
    background-color: #fff;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
<script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
<script>
  const main = () => {
    let cursorInit = !1;
    const cursor = document.getElementById('bubble-cursor'),
      amount = 30,
      sineDots = Math.floor(0.3 * amount),
      width = 36,
      idleTimeout = 150;
    let timeoutID = 200,
      hoverButton,
      hoverTL,
      lastFrame = 0,
      mousePosition = { x: 0, y: 0 },
      dots = [],
      idle = !1;
    class HoverButton {
      constructor(e) {
        console.log('hover ' + e);
        (this.hovered = !1),
          (this.animatingHover = !1),
          (this.forceOut = !1),
          (this.timing = 0.65),
          (this.el = document.getElementById(e));
      }
      onMouseEnter() {
        this.hoverInAnim();
      }
      hoverInAnim() {
        this.hovered ||
          ((this.hovered = !0),
          (this.animatingHover = !0),
          (this.forceOut = !1),
          TweenMax.fromTo(
            this.bg,
            this.timing,
            {
              x: '-112%',
            },
            {
              x: '-12%',
              ease: Power3.easeOut,
              onComplete: () => {
                (this.animatingHover = !1),
                  this.forceOut && ((this.foceOut = !1), this.hoverOutAnim());
              },
            },
          ));
      }
      onMouseLeave() {
        this.animatingHover ? (this.forceOut = !0) : this.hoverOutAnim();
      }
      hoverOutAnim() {
        (this.hovered = !1),
          TweenMax.to(this.bg, this.timing, {
            x: '100%',
            ease: Power3.easeOut,
            onComplete: () => {},
          });
      }
    }
    class Dot {
      constructor(e = 0) {
        (this.index = e),
          (this.anglespeed = 0.05),
          (this.x = 0),
          (this.y = 0),
          (this.scale = 1 - 0.05 * e),
          (this.range = width / 2 - (width / 2) * this.scale + 2),
          (this.limit = 0.75 * width * this.scale),
          (this.element = document.createElement('span')),
          TweenMax.set(this.element, { scale: this.scale }),
          cursor.appendChild(this.element);
      }
      lock() {
        (this.lockX = this.x),
          (this.lockY = this.y),
          (this.angleX = 2 * Math.PI * Math.random()),
          (this.angleY = 2 * Math.PI * Math.random());
      }
      draw(e) {
        !idle || this.index <= sineDots
          ? TweenMax.set(this.element, {
              x: this.x,
              y: this.y,
            })
          : ((this.angleX += this.anglespeed),
            (this.angleY += this.anglespeed),
            (this.y = this.lockY + Math.sin(this.angleY) * this.range),
            (this.x = this.lockX + Math.sin(this.angleX) * this.range),
            TweenMax.set(this.element, {
              x: this.x,
              y: this.y,
            }));
      }
    }
    class Circle {
      constructor(e) {
        const t = document.getElementById(e);
        t.parentElement.removeChild(t);
      }
    }

    function init() {
      window.addEventListener('mousemove', onMouseMove),
        window.addEventListener('touchmove', onTouchMove),
        (hoverButton = new HoverButton('button')),
        (lastFrame += new Date()),
        buildDots(),
        render();
    }

    function startIdleTimer() {
      (timeoutID = setTimeout(goInactive, idleTimeout)), (idle = !1);
    }

    function resetIdleTimer() {
      clearTimeout(timeoutID), startIdleTimer();
    }

    function goInactive() {
      idle = !0;
      for (let e of dots) e.lock();
    }

    function buildDots() {
      for (let e = 0; e < amount; e++) {
        let t = new Dot(e);
        dots.push(t);
      }
    }
    const onMouseMove = (e) => {
        (mousePosition.x = e.clientX - width / 2),
          (mousePosition.y = e.clientY - width / 2),
          resetIdleTimer();
      },
      onTouchMove = () => {
        (mousePosition.x = event.touches[0].clientX - width / 2),
          (mousePosition.y = event.touches[0].clientY - width / 2),
          resetIdleTimer();
      },
      render = (e) => {
        positionCursor(e - lastFrame), (lastFrame = e), requestAnimationFrame(render);
      },
      positionCursor = (e) => {
        let t = mousePosition.x,
          i = mousePosition.y;
        dots.forEach((o, s, n) => {
          let h = n[s + 1] || n[0];
          if (((o.x = t), (o.y = i), o.draw(e), !idle || s <= sineDots)) {
            const e = 0.35 * (h.x - o.x),
              s = 0.35 * (h.y - o.y);
            (t += e), (i += s);
          }
        });
      },
      inkTablet = window.matchMedia('(max-width: 991px)'),
      inkMobile = window.matchMedia('(max-width: 479px)'),
      inkMediaObserver = () => {
        inkMobile.matches || inkTablet.matches || cursorInit || ((cursorInit = !0), init());
      };
    inkMediaObserver(),
      inkTablet.addListener(inkMediaObserver),
      inkMobile.addListener(inkMediaObserver);
  };

  if (document.readyState !== 'loading') {
    main();
  } else {
    document.addEventListener('DOMContentLoaded', main);
  }
</script>
```

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/cursor-water/1.png)

## Шаг 2

Публикуем свой проект и смотрим на результат ✌