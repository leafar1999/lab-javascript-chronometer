const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime(minutes, seconds) {
 printMinutes(minutes);
 printSeconds(seconds);
}

function printMinutes(minutes) {
  try {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
  } catch (error) {
    console.log(error);
  }
}

function printSeconds(seconds) {
  try {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
  } catch (error) {
    console.log(error);
  }
}

function printMilliseconds(miliseconds) {
  try {
    milDec.innerHTML = miliseconds[0];
    milUni.innerHTML = miliseconds[1];
  } catch (error) {
    console.log(error);
  }
}

function printSplit(time) {
  try {
    let ulSplits = document.getElementById('splits');
    let newLi = document.createElement('li');
    let timeText = document.createTextNode(time);

    newLi.appendChild(timeText);

    ulSplits.appendChild(newLi);
  } catch (error) {
    console.log(error);
  }
}
function clearSplits() {
  let ulSplits = document.getElementById('splits');
  ulSplits.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerHTML = 'STOP';
  btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  // ... your code goes here
  btnRigh.innerHTML = 'SPLIT';
  btnRigh.setAttribute('class', 'btn split');
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML = 'RESET';
  btnRigh.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML === 'START') {
    chronometer.start();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();
    clearSplits();
  } else {
    chronometer.splitClick();
  }
});