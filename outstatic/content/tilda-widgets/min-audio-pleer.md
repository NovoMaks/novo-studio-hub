---
category: 'tilda-widgets'
price: '350'
coverImage: 'http://novo-studio-hub.s3.cloud.ru/tilda-widgets/min-audio-pleer/0.gif'
description: 'Аудио плеер для плейлистов и одиночных треков'
slug: 'min-audio-pleer'
author:
  name: 'Maksim'
  picture: ''
status: 'draft'
title: 'Минималистичный аудио плеер'
publishedAt: '2024-10-20T16:48:41.275Z'
---

# Минималистичный аудио плеер

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/min-audio-pleer/0.gif)

## Шаг 1

Создаем блок html в нужном месте на сайте

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/min-audio-pleer/1.png)

## Шаг 2

Вставляем в блок следующий код

```javascript
<div class="player-root">
  <div class="music-player">
    <h1>Title</h1>
    <p>Song Name</p>

    <audio id="song">
      <source src="song-list/Luke-Bergs-Gold.mp3" type="audio/mpeg" />
    </audio>

    <input type="range" value="0" id="progress" />

    <div class="controls">
      <button class="backward">
        <i class="fa-solid fa-backward"></i>
      </button>
      <button class="play-pause-btn">
        <i class="fa-solid fa-play" id="controlIcon"></i>
      </button>
      <button class="forward">
        <i class="fa-solid fa-forward"></i>
      </button>
    </div>
  </div>
</div>

<script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script>
  const main = () => {
    const rootClass = '.player-root';

    // title - название песни, name - автор, source - ссылка на музыку
    const songs = [
      {
        title: 'All Time Low',
        name: 'Jon Bellion, Stormzy',
        source:
          'https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/music/All_Time_Low.mp3',
      },
      {
        title: 'Weak when ur around',
        name: 'Blackbear',
        source:
          'https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/music/Blackbear.mp3',
      },
    ];

    const rootEl = document.querySelector(rootClass);
    const progress = rootEl.querySelector('#progress');
    const song = rootEl.querySelector('#song');
    const controlIcon = rootEl.querySelector('#controlIcon');
    const playPauseButton = rootEl.querySelector('.play-pause-btn');
    const forwardButton = rootEl.querySelector('.controls button.forward');
    const backwardButton = rootEl.querySelector('.controls button.backward');
    const songName = rootEl.querySelector('.music-player h1');
    const artistName = rootEl.querySelector('.music-player p');

    if (songs.length > 1) {
      rootEl.insertAdjacentHTML(
        'beforeend',
        '<div class="pl-wrap"><ul class="pl-list"></ul></div>',
      );
      const plList = rootEl.querySelector('.pl-list');
      songs.map((song, i) => {
        plList.insertAdjacentHTML(
          'beforeend',
          '<li> \
            <div class="pl-item"> \
              <span class="pl-num">' +
            (i + 1) +
            '.</span> \
              <span class="pl-title">' +
            song.title +
            ' - ' +
            song.name +
            '</span> \
            </div> \
          </li>',
        );
      });
      const pListItems = rootEl.querySelectorAll('.pl-list li');
      pListItems.forEach((item, i) => {
        item.addEventListener('click', () => {
          currentSongIndex = i;
          updateSongInfo();
          playPause();
        });
      });
    } else {
      forwardButton.style.display = 'none';
      backwardButton.style.display = 'none';
    }

    let currentSongIndex = 0;

    function updateSongInfo() {
      songName.textContent = songs[currentSongIndex].title;
      artistName.textContent = songs[currentSongIndex].name;
      song.src = songs[currentSongIndex].source;
      if (songs.length > 1) {
        const plListItems = rootEl.querySelectorAll('.pl-list li');
        songs.map((_, i) => plListItems[i].classList.remove('active'));
        plListItems[currentSongIndex].classList.add('active');
      }
      song.addEventListener('loadeddata', function () {});
    }

    song.addEventListener('timeupdate', function () {
      if (!song.paused) {
        progress.value = song.currentTime;
      }
    });

    song.addEventListener('loadedmetadata', function () {
      progress.max = song.duration;
      progress.value = song.currentTime;
    });

    song.addEventListener('ended', function () {
      if (currentSongIndex < songs.length - 1) {
        currentSongIndex = currentSongIndex + 1;
        updateSongInfo();
        playPause();
      }
    });

    function pauseSong() {
      song.pause();
      controlIcon.classList.remove('fa-pause');
      controlIcon.classList.add('fa-play');
    }

    function playSong() {
      song.play();
      controlIcon.classList.add('fa-pause');
      controlIcon.classList.remove('fa-play');
    }

    function playPause() {
      if (song.paused) {
        playSong();
      } else {
        pauseSong();
      }
    }

    playPauseButton.addEventListener('click', playPause);

    progress.addEventListener('input', function () {
      song.currentTime = progress.value;
    });

    progress.addEventListener('change', function () {
      playSong();
    });

    forwardButton.addEventListener('click', function () {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      updateSongInfo();
      playPause();
    });

    backwardButton.addEventListener('click', function () {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      updateSongInfo();
      playPause();
    });

    updateSongInfo();
  };

  if (document.readyState !== 'loading') {
    main();
  } else {
    document.addEventListener('DOMContentLoaded', main);
  }
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600&display=swap');

  :root {
    /* Основной цвет плеера */
    --main-clr: rgb(0, 0, 0);

    /* Цвет для плейлиста */
    --main-clr-opacity: rgb(0, 0, 0, 0.2);

    --primary-clr: black;
  }

  #allrecords {
    background-color: transparent !important;
  }

  .player-root * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .player-root {
    font-family: 'Nunito', sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  /* Music Player */

  .music-player {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--primary-clr);
    width: 350px;
    max-width: 95%;
    padding: 10px;
  }

  .music-player h1 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.6;
  }

  .music-player p {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.6;
  }

  /* Music Player Progress */

  #progress {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 7px;
    background: rgba(163, 162, 164, 0.4);
    border-radius: 4px;
    margin: 32px 0 24px;
    cursor: pointer;
  }

  #progress::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    background: rgba(255, 255, 255, 0.9);
    width: 20px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 4px solid var(--main-clr);
    box-shadow: 0 6px 10px rgba(5, 36, 28, 0.3);
  }

  /* Music Player Controls */

  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .controls button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    aspect-ratio: 1/1;
    margin: 10px;
    background: white;
    color: var(--main-clr);
    border-radius: 50%;
    border: 1px solid var(--main-clr);
    outline: 0;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s linear;
  }

  .controls button:is(:hover, :focus-visible) {
    transform: scale(0.96);
  }

  .controls button:nth-child(2) {
    transform: scale(1.3);
  }

  .controls button:nth-child(2):is(:hover, :focus-visible) {
    transform: scale(1.25);
  }

  .pl-wrap {
    width: 95% !important;
    margin-top: 10px;
    max-width: 600px;
    border: 1px solid #d9d7d7;
    border-radius: 10px;
    max-height: 300px;
    overflow-y: auto;
  }

  .pl-list {
    list-style-type: none;
    margin: 0;
    padding: 0px !important;
    margin-bottom: 0px !important;
  }

  .pl-list li {
    color: black;
    cursor: pointer;
    margin: 0;
    padding: 5px 10px;
  }

  .pl-list li:hover,
  .pl-list .active {
    background-color: var(--main-clr-opacity);
  }
</style>
```

## Шаг 3

После сохранения кода и публикации, вы должны увидеть плеер с плейлистом из двух песен

![](http://novo-studio-hub.s3.cloud.ru/tilda-widgets/min-audio-pleer/2.png)

## Шаг 4

Найдите фрагмент, который представлен ниже, и измените песни на свои по аналогии с примером. Их может быть любое количество. Если песня одна, то в плеере не будет отображаться плейлист и кнопки переключения.\
Обратите внимание, что ссылка на песню "прямая" (в конце стоит .mp3 или любой другой формат). Облачные диски, например Яндекс Диск, такой ссылки не предоставляют.\
На данный момент самым выгодным и простым является Vk Cloud - Облачное S3 хранилище. Это платно, но зависит от количества прослушиваний на сайте, в среднем около 150 рублей в месяц.  [Здесь](https://cloud.vk.com/storage/#benefits) вы можете про него прочитать.\
Если вам нужна подробная инструкция о том, как загрузить свою музыку и получить прямую ссылку, пишите нам в [телеграмм](https://t.me/novms), мы вышлем бесплатную видео-инструкцию.

```javascript
    // title - название песни, name - автор, source - ссылка на музыку
    const songs = [
      {
        title: 'All Time Low',
        name: 'Jon Bellion, Stormzy',
        source:
          'https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/music/All_Time_Low.mp3',
      },
      {
        title: 'Weak when ur around',
        name: 'Blackbear',
        source:
          'https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/music/Blackbear.mp3',
      },
    ];
```

## Шаг 5

Если необходимо, можете добавить выше блока html, блок с изображением и изменить его ширину на 3 колонки. Таким образом, эта картинка будет выглядеть как обложка песни/плейлиста.