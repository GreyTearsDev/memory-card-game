import {Howl} from "howler"

export default function GenerateAudioContext() {
  let initialVolume = 0.5;

  const sfx = {
    highScore: new Howl({
      src: ['/sfx/highscore.mp3'],
      volume: initialVolume,
    }),
    gameover: new Howl({
      src: ['/sfx/gameover.mp3'],
      volume: initialVolume,
    }),
    click: new Howl({
      src: ['/sfx/click.mp3'],
      volume: initialVolume,
    }),
  }
  
  const music = {
    dreamers: new Howl({
      src: ['/music/paw-theme.mp3'],
      loop: true,
      volume: initialVolume,
    })
  }

  

  const playMusic = (bool) => {
    if (bool) {
      if (!music.dreamers.playing()) music.dreamers.play();
    music.dreamers.fade(0,initialVolume, 300)
      music.dreamers.volume(initialVolume);
    } else {
    music.dreamers.fade(initialVolume, 0, 500)
    }
  }

  const stopPlayingMusic = () => {
    music.dreamers.fade(initialVolume, 0, 500)
    music.dreamers.stop()
  };

  const playSFX = (bool) =>  {
    for (let sound in sfx) {
      sfx[sound].volume(bool ? initialVolume : 0);
    }
  }
  const playSFXSound = (target) => sfx[target].play();
  

  return {
    playMusic,
    playSFX,
    playSFXSound,
    stopPlayingMusic,
  }
}
