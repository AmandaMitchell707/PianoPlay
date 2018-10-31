/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let oscillatorList = [];
let masterGainNode = null;

let keyboard = document.querySelector('.keyboard');
let waveSelector = document.querySelector("select[name='waveform']");
let volumeControl = document.querySelector("input[name='volume']");

let noteFreq = null;
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;

function createNoteTable() {
  let noteFreq = [];
  for (let i = 0; i < 3; i++) {
    noteFreq[i] = {};
  }

  noteFreq[0]["F"] = 87.307057858;
  noteFreq[0]["F#"] = 92.498605678;
  noteFreq[0]["G"] = 97.998858995;
  noteFreq[0]["G#"] = 103.826174395;
  noteFreq[1]["A"] = 110.0;
  noteFreq[1]["A#"] = 116.54094038;
  noteFreq[1]["B"] = 123.470825314;
  noteFreq[1]["C"] = 130.81278265;
  noteFreq[1]["C#"] = 138.591315488;
  noteFreq[1]["D"] = 146.832383959;
  noteFreq[1]["D#"] = 155.563491861;
  noteFreq[1]["E"] = 164.813778456;
  noteFreq[1]["F"] = 174.614115717;
  noteFreq[1]["F#"] = 184.997211356;
  noteFreq[1]["G"] = 195.997717991;
  noteFreq[1]["G#"] = 207.65234879;
  noteFreq[2]["A"] = 220.0;
  noteFreq[2]["A#"] = 233.081880759;
  noteFreq[2]["B"] = 246.941650628;
  noteFreq[2]["C"] = 261.6255653;
  noteFreq[2]["C#"] = 277.182630976;
  noteFreq[2]["D"] = 293.664767918;
  noteFreq[2]["D#"] = 311.126983722;
  noteFreq[2]["E"] = 329.627556912;
  noteFreq[2]["F"] = 349.228231434;
  noteFreq[2]["F#"] = 369.994422712;
  noteFreq[2]["G"] = 391.995435982;
  noteFreq[2]["G#"] = 415.30469758;
  noteFreq[3]["A"] = 440.0;
  noteFreq[3]["A#"] = 466.163761518;
  noteFreq[3]["B"] = 493.883301256;
}
