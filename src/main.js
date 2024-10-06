import '../styles/modern.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/util.css';

// get elements
const overviewButtonOne = document.getElementById('overview-one');
const structureButtonOne = document.getElementById('structure-one');
const geologyButtonOne = document.getElementById('geology-one');

const overviewButton = document.getElementById('overview');
const structureButton = document.getElementById('structure');
const geologyButton = document.getElementById('geology');

const overviewText = document.querySelector('.overview-box');
const structureText = document.querySelector('.interal-structure-box');
const geologyText = document.querySelector('.surface-geology-box');

const overviewImg = document.getElementById('overview-img');
const strucutreImg = document.getElementById('internal-img');
const geologyImg = document.getElementById('geology-img');

const mobileMenuButton = document.querySelector('.drop-down-icon');
const mobileNavMenu = document.querySelector('.mobile-nav');

const headerBoxButton = document.querySelector('.button-box-one');
const heroSection = document.querySelector('.hero');
const infoSection = document.querySelector('.info');

// create elements
const pageColors = {
  page1: '#419ebb',
  page2: ' #eda249',
  page3: '#6f2ed6',
  page4: '#d83a34',
  page5: '#d83a34',
  page6: '#ea580c',
  page7: '#14b8a6',
  page8: '#2d68f0',
};

const pageId = document.body.id;
const mainButton = document.querySelectorAll('.button');

const color = pageColors[pageId];

let previouslyClickedButton = null;

if (color) {
  document.documentElement.style.setProperty('--hover-color', color);
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

function displayMobile() {
  if (mobileNavMenu.style.display === 'block') {
    mobileNavMenu.style.display = 'none';
    headerBoxButton.style.borderBottom = ' 0.1px solid #38384f';
    headerBoxButton.style.display = 'flex';
    heroSection.style.display = 'block';
    infoSection.style.display = 'block';
  } else {
    infoSection.style.display = 'none';
    heroSection.style.display = 'none';
    headerBoxButton.style.display = 'none';
    headerBoxButton.style.borderBottom = '0px';
    mobileNavMenu.style.display = 'block';
  }
}

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

overviewButtonOne.addEventListener('click', overviewDisplay);
structureButtonOne.addEventListener('click', structureDisplay);
geologyButtonOne.addEventListener('click', geologyDisplay);

mobileMenuButton.addEventListener('click', displayMobile);
