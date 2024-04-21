import {Howl} from "howler"

export default function GenerateAudioContext() {
  let sfxVolume = 0.5;
  let musicVolume = 0.5;

  const sfx = {
    highScore: new Howl({
      src: ['../../public/sfx/highscore.mp3'],
      volume: sfxVolume,
    }),
    gameover: new Howl({
      src: ['../../public/sfx/gameover.mp3'],
      volume: sfxVolume,
    }),
    success: new Howl({
      src: ['../../public/sfx/success.mp3'],
      volume: sfxVolume,
    }),
    click: new Howl({
      src: ['../../public/sfx/click.mp3'],
      volume: sfxVolume,
    }),
    cheers1: new Howl({
      src: ['../../public/sfx/cheers1.mp3'],
      volume: sfxVolume,
    }),
    cheers2: new Howl({
      src: ['../../public/sfx/cheers2.mp3'],
      volume: sfxVolume,
    }),
  }
  
  const music = {
    dreamers: new Howl({
      src: ['../../public/music/Dreamers.mp3'],
      loop: true,
      volume: musicVolume,
    })
  }

  const updateSFXVolume= (value) => sfxVolume = value;
  const updateMusicVolume = (value) => musicVolume = value;

  return {
    sfx,
    music,
    updateMusicVolume,
    updateSFXVolume,
  }
}
