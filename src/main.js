import '../styles/modern.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/util.css';

// get elements
const overviewButton = document.getElementById('overview');
const structureButton = document.getElementById('structure');
const geologyButton = document.getElementById('geology');

const overviewText = document.querySelector('.overview-box');
const structureText = document.querySelector('.interal-structure-box');
const geologyText = document.querySelector('.surface-geology-box');

const overviewImg = document.getElementById('overview-img');
const strucutreImg = document.getElementById('internal-img');
const geologyImg = document.getElementById('geology-img');

// create elements
const pageColors = {
  page1: '#419ebb',
  page2: 'green',
  page3: 'red',
  page4: 'yellow',
  page5: 'purple',
  page6: 'orange',
  page7: 'gray',
  page8: 'black',
};

const pageId = document.body.id;
const mainButton = document.querySelectorAll('.button');
const color = pageColors[pageId];

let previouslyClickedButton = null;

if (color) {
  mainButton.forEach((button) => {
    button.addEventListener('click', () => {
      if (previouslyClickedButton) {
        previouslyClickedButton.style.backgroundColor = '#070724';
      }

      button.style.backgroundColor = color;

      previouslyClickedButton = button;
    });
  });
}

// functions

function structureDisplay() {
  strucutreImg.style.display = ' block';
  overviewImg.style.display = 'none';
  geologyImg.style.display = ' none';

  structureText.style.display = 'block';
  overviewText.style.display = 'none';
  geologyText.style.display = 'none';
  return;
}

function overviewDisplay() {
  strucutreImg.style.display = ' none';
  overviewImg.style.display = 'block';
  geologyImg.style.display = ' none';

  overviewImg.style.display = 'block';
  overviewText.style.display = 'block';
  structureText.style.display = 'none';
  geologyText.style.display = 'none';
}

function geologyDisplay() {
  strucutreImg.style.display = ' none';
  overviewImg.style.display = 'block';
  geologyImg.style.display = ' block';

  geologyText.style.display = 'block';
  overviewText.style.display = 'none';
  structureText.style.display = 'none';
}

// event listeners
overviewButton.addEventListener('click', overviewDisplay);
structureButton.addEventListener('click', structureDisplay);
geologyButton.addEventListener('click', geologyDisplay);
