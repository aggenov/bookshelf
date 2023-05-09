import saveTheChildren from '../images/svg/01savethechildren.svg';
import projectHope from '../images/svg/02projecthope.svg';
import interMedCorps from '../images/svg/03intermedcorps.svg'
import razom from '../images/svg/04razom.svg';
import actionAgainstHunger from '../images/svg/05actionaghang.svg';
import pritulaFoundation from '../images/svg/06sergpritula.svg';
import united24 from '../images/svg/07united24.svg';
import msf from '../images/svg/08medsansfront.svg';
import worldVision from '../images/svg/09worldvision.svg';

const FUNDS = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: saveTheChildren,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: projectHope,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: interMedCorps,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: actionAgainstHunger,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: pritulaFoundation,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united24,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: msf,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: worldVision,
  },
];

const ulFunds = document.querySelector('.slider-line');
renderFounds(FUNDS);

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const buttonDown = document.querySelector('.slider-down');
const buttonUp = document.querySelector('.slider-up');

buttonDown.addEventListener('click', function () {
  offset = offset - 52;
  if (offset < -260) {
    offset = 0;
    // buttonDown.style.visibility = "hidden";
    // buttonUp.style.visibility = "visible";
  }
  sliderLine.style.top = offset + 'px';
});

function renderFounds(funds) {
  let fundCounter = 1;
  for (const fund of funds) {
    ulFunds.insertAdjacentHTML(
      'beforeend',
      `
  <li>
        <a
          class="number-style"
          href="${fund.url}"
          target="_blank"
        >
          <span class="count-number">0${fundCounter}</span>
          <img
            class="white-text"
            src="${fund.img}"
            alt="${fund.title}"
          />
        </a>
      </li>`
    );
    fundCounter += 1;
  }
}
