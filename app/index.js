window.addEventListener("DOMContentLoaded", () => {

  const dataKeys = [90, 88, 67, 86, 65, 83, 68, 70, 71, 72, 74, 75, 76, 89, 85,
    73, 79, 80, 81, 87, 69, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48];
    
    const notes = ['2_f', '2_g', '2_a', '2_b',
    '3_c', '3_d', '3_e', '3_f', '3_g', '3_a', '3_b',
    '4_c', '4_d', '4_e', '4_f', '4_g', '4_a', '4_b',
    '2_fsharp', '2_gsharp', '2_asharp',
    '3_csharp', '3_dsharp', '3_fsharp', '3_gsharp', '3_asharp',
    '4_csharp', '4_dsharp', '4_fsharp', '4_gsharp', '4_asharp'
  ];
  
  const blackKeyXValues = [45, 95, 145, 245, 295, 395, 445, 495, 595, 645, 745, 795, 845];
  
  let voices = ['classic', 'cello'];
  
  let svgNS = "http://www.w3.org/2000/svg";

  // set default voice to classic
  sessionStorage.setItem('voice', 'classic');

  // set voice to classic or cello from select options menu
  document.getElementById('voiceSelector').addEventListener('change', function () {
    let currentVoice = document.getElementById('voiceSelector').value;

    sessionStorage.setItem('voice', currentVoice);
  });
  
  function createAudioTag(key, note, voice) {
    let audioElement = document.createElement('audio');

    audioElement.dataset['key'] = key;
    // audioElement.src = `../assets/audio/${voice}/${note}.mp3`;
    audioElement.src = `/PianoPlay/assets/audio/${voice}/${note}.mp3`;

    return audioElement;
  }
  
  function createWhiteKey(key, idx) {
    let keyElement = document.createElementNS(svgNS, 'rect');
    let xValue = idx * 50 + 10;

    keyElement.classList.add('key', 'white-key');
    keyElement.dataset['key'] = key;
    keyElement.setAttribute('x', `${xValue}`);
    keyElement.setAttribute('y', 5);
    keyElement.setAttribute('rx', 6);
    keyElement.setAttribute('ry', 6);
    keyElement.setAttribute('width', 50);
    keyElement.setAttribute('height', 250);

    return keyElement;
  }

  function createBlackKey(key, xValue) {
    let keyElement = document.createElementNS(svgNS, "rect");;

    keyElement.classList.add("key", "black-key");
    keyElement.dataset["key"] = key;
    keyElement.setAttribute("x", `${xValue}`);
    keyElement.setAttribute("y", 5);
    keyElement.setAttribute("rx", 6);
    keyElement.setAttribute("ry", 6);
    keyElement.setAttribute("width", 30);
    keyElement.setAttribute("height", 150);

    return keyElement;
  }

  function setupWhiteKeys(dataKeys) {
    let keyContainer = document.getElementById('piano');

    for (let i = 0; i < 18; i++) {
      keyContainer.appendChild(createWhiteKey(dataKeys[i], i));
    }
  }

  function setupBlackKeys(dataKeys, xValues) {
      let keyContainer = document.getElementById('piano');
      for (let i = 0; i < 13; i++) {
          keyContainer.appendChild(createBlackKey(dataKeys[i + 18], xValues[i]));
      }
  }

  function setupAudioTags(dataKeys, notes) {
    let audioContainer = document.createElement('div');
    audioContainer.className = 'audio-tags';

    for (let i = 0; i < dataKeys.length; i++) {
      audioContainer.appendChild(createAudioTag(dataKeys[i], notes[i], voices[0]));
      audioContainer.appendChild(createAudioTag(dataKeys[i], notes[i], voices[1]));
    }

    let body = document.querySelector('body');
    body.appendChild(audioContainer);
  }

  setupAudioTags(dataKeys, notes);
  setupWhiteKeys(dataKeys);
  setupBlackKeys(dataKeys, blackKeyXValues);

  let keyEnabledHash = {};

  window.addEventListener('keydown', (e) => {
    let audio;

    if (sessionStorage.voice === 'classic') {
      audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`)[0];
    } else {
      // else voice is cello
      audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`)[1];
    }

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (audio === undefined) return;
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
  keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', (e) => {
      let dataKey = e.currentTarget.getAttribute('data-key');
      let audio;

      if (sessionStorage.voice === 'classic') {
        audio = document.querySelectorAll(`audio[data-key="${dataKey}"]`)[0];
      } else {
        // else voice is cello
        audio = document.querySelectorAll(`audio[data-key="${dataKey}"]`)[1];
      }

      if (audio === undefined) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add("playing");
    });
  });

  let whiteKeyLabels = ['Z', 'X', 'C', 'V', 'A', 'S', 'D', 'F',
    'G', 'H', 'J', 'K', 'L', 'Y', 'U', 'I', 'O', 'P'
  ];

  function createWhiteKeyLabels() {
    let labelContainer = document.querySelector('.white-key-labels');
    whiteKeyLabels.forEach(label => {
      let labelElement = document.createElement('KBD');
      labelElement.innerHTML = `${label}`;
      labelContainer.appendChild(labelElement);
    });
  }

  createWhiteKeyLabels();
});
