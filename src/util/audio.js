import {Howl} from "howler"

export default function GenerateAudioContext() {
  let initialVolume = 0.5;

  const sfx = {
    highScore: new Howl({
      src: ['../../public/sfx/highscore.mp3'],
      volume: initialVolume,
    }),
    gameover: new Howl({
      src: ['../../public/sfx/gameover.mp3'],
      volume: initialVolume,
    }),
    click: new Howl({
      src: ['../../public/sfx/click.mp3'],
      volume: initialVolume,
    }),
  }
  
  const music = {
    dreamers: new Howl({
      src: ['../../public/music/paw-theme.mp3'],
      loop: true,
      volume: initialVolume,
    })
  }

  
  const playMusic = (bool) => {
    if (bool) {
      if (!music.dreamers.playing()) music.dreamers.play();
      music.dreamers.volume(initialVolume);
    } else {
      music.dreamers.volume(0);
    }
  }

  const stopPlayingMusic = () => music.dreamers.stop();

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
