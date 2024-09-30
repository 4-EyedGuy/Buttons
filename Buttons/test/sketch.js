let doorOpen = false;
let lightOn = false;

let lightColor = '#000043';

let doorButton, lightButton;

function setup() {
  createCanvas(800, 800);

  doorButton = createButton(' ');
  doorButton.position(250, 550);
  doorButton.style('width', '40px');
  doorButton.style('height', '40px');
  doorButton.style('background-color', 'red');
  doorButton.mousePressed(toggleDoor);

  lightButton = createButton(' ');
  lightButton.position(250, 600);
  lightButton.style('width', '40px');
  lightButton.style('height', '40px');
  lightButton.style('background-color', 'white');
  lightButton.mousePressed(toggleLight);
}

function draw() {

  background(40);

  fill(lightColor);
  rect(300, 300, 200, 300);

  drawDoor();
}

function drawDoor() {

  if (doorOpen) {
    fill('#393939');
    rect(300, 0, 200, 300);

    fill('#ffd900');
    rect(300, 0, 200, 40);
    rect(300, 260, 200, 40);

  } else {
    fill('#393939');
    rect(300, 300, 200, 300);

    fill('#ffd900');
    rect(300, 300, 200, 40);
    rect(300, 560, 200, 40);
  }
}


function toggleDoor() {
  doorOpen = !doorOpen;
}

// Функция для включения/выключения света
function toggleLight() {
  lightOn = !lightOn;
  if (lightOn) {
    lightColor = '#cbe5ff'; // Включаем свет (жёлтый)
  } else {
    lightColor = '#000043'; // Выключаем свет (чёрный)
  }
}
