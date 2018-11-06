import '../assets/styles/reset.scss';
import '../assets/styles/index.scss';


window.addEventListener("DOMContentLoaded", () => {

  sessionStorage.setItem('voice', 'classic');

  // set voice to classic or cello from select option menu
  document.getElementById('voiceSelector').addEventListener('change', function () {
    let currentVoice = document.getElementById('voiceSelector').value;

    sessionStorage.setItem('voice', currentVoice);
  });
  
  const dataKeys = [90, 88, 67, 86, 65, 83, 68, 70, 71, 72, 74, 75, 76, 89, 85,
    73, 79, 80, 81, 87, 69, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48];

  const notes = ['2_f', '2_g', '2_a', '2_b',
  '3_c', '3_d', '3_e', '3_f', '3_g', '3_a', '3_b',
  '4_c', '4_d', '4_e', '4_f', '4_g', '4_a', '4_b',
    '2_fsharp', '2_gsharp', '2_asharp',
    '3_csharp', '3_dsharp', '3_fsharp', '3_gsharp', '3_asharp',
    '4_csharp', '4_dsharp', '4_fsharp', '4_gsharp', '4_asharp'
  ];

  let voices = ['classic', 'cello'];

  function createAudioTag(key, note, voice) {
    let audioElement = document.createElement('audio');

    audioElement.dataset['key'] = key;
    audioElement.src = `../assets/audio/${voice}/${note}.mp3`;
    // audioElement.src = `https://github.com/AmandaMitchell707/PianoPlay/blob/master/assets/audio/${voice}/${note}.mp3`

    return audioElement;
  }

  function setupAudioTags(dataKeys, notes) {
    let audioContainer = document.createElement('div');
    audioContainer.className = 'audio-tags';

    for (let i = 0; i < dataKeys.length; i++) {
      audioContainer.appendChild(createAudioTag(dataKeys[i], notes[i], voices[0]));
      audioContainer.appendChild(createAudioTag(dataKeys[i], notes[i], voices[1]));
    }

    let body = document.querySelector("body");
    body.appendChild(audioContainer);
  }

  setupAudioTags(dataKeys, notes);

  let keyEnabledHash = {};

  window.addEventListener('keydown', (e) => {
    let audio;
    if (sessionStorage.voice === 'classic') {
      audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`)[0];
    } else {
      audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`)[1];
    }
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    if (keyEnabledHash[e.keyCode] == undefined || keyEnabledHash[e.keyCode]) {
      keyEnabledHash[e.keyCode] = false;
      audio.currentTime = 0;
      audio.play();
      key.classList.add("playing");
    }
  });

  window.addEventListener('keyup', (e) => {
    keyEnabledHash[e.keyCode] = true;
  });

  function removeTransition(e) {
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

})


// let audioContext = new (window.AudioContext || window.webkitAudioContext)();
// let oscillatorList = [];
// let masterGainNode = null;

// let keyboard = document.querySelector('.keyboard');
// let waveSelector = document.querySelector("select[name='waveform']");
// let volumeControl = document.querySelector("input[name='volume']");

// let noteFreq = null;
// let customWaveform = null;
// let sineTerms = null;
// let cosineTerms = null;

// function createNoteTable() {
//   let noteFreq = [];
//   for (let i = 0; i < 4; i++) {
//     noteFreq[i] = [];
//   }

//   noteFreq[0]["F"] = 87.307057858;
//   noteFreq[0]["F#"] = 92.498605678;
//   noteFreq[0]["G"] = 97.998858995;
//   noteFreq[0]["G#"] = 103.826174395;
//   noteFreq[1]["A"] = 110.0;
//   noteFreq[1]["A#"] = 116.54094038;
//   noteFreq[1]["B"] = 123.470825314;
//   noteFreq[1]["C"] = 130.81278265;
//   noteFreq[1]["C#"] = 138.591315488;
//   noteFreq[1]["D"] = 146.832383959;
//   noteFreq[1]["D#"] = 155.563491861;
//   noteFreq[1]["E"] = 164.813778456;
//   noteFreq[1]["F"] = 174.614115717;
//   noteFreq[1]["F#"] = 184.997211356;
//   noteFreq[1]["G"] = 195.997717991;
//   noteFreq[1]["G#"] = 207.65234879;
//   noteFreq[2]["A"] = 220.0;
//   noteFreq[2]["A#"] = 233.081880759;
//   noteFreq[2]["B"] = 246.941650628;
//   noteFreq[2]["C"] = 261.6255653;
//   noteFreq[2]["C#"] = 277.182630976;
//   noteFreq[2]["D"] = 293.664767918;
//   noteFreq[2]["D#"] = 311.126983722;
//   noteFreq[2]["E"] = 329.627556912;
//   noteFreq[2]["F"] = 349.228231434;
//   noteFreq[2]["F#"] = 369.994422712;
//   noteFreq[2]["G"] = 391.995435982;
//   noteFreq[2]["G#"] = 415.30469758;
//   noteFreq[3]["A"] = 440.0;
//   noteFreq[3]["A#"] = 466.163761518;
//   noteFreq[3]["B"] = 493.883301256;

//   return noteFreq;
// }

// function setupKeyboard() {
//     noteFreq = createNoteTable();

//     volumeControl.addEventListener("change", changeVolume, false);

//     masterGainNode = audioContext.createGain();
//     masterGainNode.connect(audioContext.destination);
//     masterGainNode.gain.value = volumeControl.value;

//     // create white keys
//     noteFreq.forEach((keys, idx) => {
//       let keyList = Object.entries(keys);
//       let keyboardElement = document.getElementById("piano");
//       // debugger;
//       let keyIndex = 0;
//       keyList.forEach((key) => {
//         if (key[0].length == 1) {
//           keyboardElement.appendChild(createWhiteKey(key[0], idx, key[1], (keyIndex * 100)));
//           idx += 1;
//         }
//       });
//     });
// }

// function changeVolume(e) {
//     masterGainNode.gain.value = volumeControl.value;
// }

// function createWhiteKey(note, octave, freq, xValue) {
//   let keyElement = document.createElement("rect");

//   keyElement.className = "white-key";
//   keyElement.dataset["note"] = note;
//   keyElement.dataset["octave"] = octave;
//   keyElement.dataset["frequency"] = freq;

//   keyElement.x = xValue;
//   keyElement.y = 5;
//   keyElement.rx = 6;
//   keyElement.ry = 6;
//   keyElement.width = 50;
//   keyElement.height = 250;

//   keyElement.addEventListener("keydown", notePressed, false);
//   keyElement.addEventListener("keyup", noteReleased, false);

//   return keyElement;
// }

// setupKeyboard();

