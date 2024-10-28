---
tags: ''
category: 'tilda-widgets'
price: '200'
coverImage: 'http://novo-studio-hub.s3.cloud.ru/tilda-widgets/cursor-firework/0.gif'
description: 'Отлично подойдет для блока, к которому нужно привлечь внимание'
slug: 'cursor-firework'
author:
  name: 'Maksim'
  picture: ''
status: 'published'
title: 'Курсор-фейерверк в Zero-блоке'
publishedAt: '2024-10-28T13:54:11.096Z'
---

## ID шаблона: **57244153**

Инструкция по добавлению шаблона [тут](https://help-ru.tilda.cc/page-template)

## Шаг 1

Создаем Zero-блок и добавляем необходимые элементы

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/cursor-firework/1.png)

## Шаг 2

Добавляем блок html и вставляем в него следующий код

```javascript
<pointer-particles></pointer-particles>

<script>
  const main = () => {
      class PointerParticle {
  constructor(spread, speed, component) {
    const { ctx, pointer, hue } = component;

    this.ctx = ctx;
    this.x = pointer.x;
    this.y = pointer.y;
    this.mx = pointer.mx * 0.1;
    this.my = pointer.my * 0.1;
    this.size = Math.random() + 1;
    this.decay = 0.01;
    this.speed = speed * 0.08;
    this.spread = spread * this.speed;
    this.spreadX = (Math.random() - 0.5) * this.spread - this.mx;
    this.spreadY = (Math.random() - 0.5) * this.spread - this.my;
    this.color = `hsl(${hue}deg 90% 60%)`;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }

  collapse() {
    this.size -= this.decay;
  }

  trail() {
    this.x += this.spreadX * this.size;
    this.y += this.spreadY * this.size;
  }

  update() {
    this.draw();
    this.trail();
    this.collapse();
  }
}

class PointerParticles extends HTMLElement {
  static register(tag = "pointer-particles") {
    if ("customElements" in window) {
      customElements.define(tag, this);
    }
  }

  static css = `
    :host {
      display: grid;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  `;

  constructor() {
    super();

    this.canvas;
    this.ctx;
    this.fps = 60;
    this.msPerFrame = 1000 / this.fps;
    this.timePrevious;
    this.particles = [];
    this.pointer = {
      x: 0,
      y: 0,
      mx: 0,
      my: 0
    };
    this.hue = 0;
  }

  connectedCallback() {
    const canvas = document.createElement("canvas");
    const sheet = new CSSStyleSheet();

    this.shadowroot = this.attachShadow({ mode: "open" });

    sheet.replaceSync(PointerParticles.css);
    this.shadowroot.adoptedStyleSheets = [sheet];

    this.shadowroot.append(canvas);

    this.canvas = this.shadowroot.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setCanvasDimensions();
    this.setupEvents();
    this.timePrevious = performance.now();
    this.animateParticles();
  }

  createParticles(event, { count, speed, spread }) {
    this.setPointerValues(event);

    for (let i = 0; i < count; i++) {
      this.particles.push(new PointerParticle(spread, speed, this));
    }
  }

  setPointerValues(event) {
    let bound = this.canvas.getBoundingClientRect();
    this.pointer.x = event.clientX - bound.left - this.canvas.clientLeft;
    this.pointer.y = event.clientY - bound.top - this.canvas.clientTop;
    // this.pointer.x = event.x - this.offsetLeft;
    // this.pointer.y = event.y - this.offsetTop;
    this.pointer.mx = event.movementX;
    this.pointer.my = event.movementY;
  }

  setupEvents() {
    const parent = this.parentNode;

    parent.addEventListener("click", (event) => {
      this.createParticles(event, {
        count: 300,
        speed: Math.random() + 1,
        spread: Math.random() + 50
      });
    });

    parent.addEventListener("pointermove", (event) => {
      this.createParticles(event, {
        count: 20,
        speed: this.getPointerVelocity(event),
        spread: 1
      });
    });

    window.addEventListener("resize", () => this.setCanvasDimensions());
  }

  getPointerVelocity(event) {
    const a = event.movementX;
    const b = event.movementY;
    const c = Math.floor(Math.sqrt(a * a + b * b));

    return c;
  }

  handleParticles() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();

      if (this.particles[i].size <= 0.1) {
        this.particles.splice(i, 1);
        i--;
      }
    }
  }

  setCanvasDimensions() {
    const rect = this.parentNode.getBoundingClientRect();

    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  animateParticles() {
    requestAnimationFrame(() => this.animateParticles());

    const timeNow = performance.now();
    const timePassed = timeNow - this.timePrevious;

    if (timePassed < this.msPerFrame) return;

    const excessTime = timePassed % this.msPerFrame;

    this.timePrevious = timeNow - excessTime;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.hue = this.hue > 360 ? 0 : (this.hue += 3);

    this.handleParticles();
  }
}

PointerParticles.register();

  };
  if (document.readyState !== 'loading') {
    main();
  } else {
    document.addEventListener('DOMContentLoaded', main);
  }
</script>
```

## Шаг 3

Выставляем html ширину и высоту 100%\
Container: Window Container\
Axis X: Center\
Axis Y: Center\
Также необходимо правильно расставить элементы относительно друг друга. Те элементы, которые будут ниже, чем блок html, будут недоступны для взаимодействия. Текст красивее выглядит, если он находится ниже html, так фейрверк будет виден на нем.

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/cursor-firework/2.png)

## Шаг 4

Публикуем свой проект и смотрим на результат ✌