const FUNDS = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './images/save-the-children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './images/svg/02projecthope.svg',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './images/svg/03intermedcorps.svg',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './images/svg/04razom.svg',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './images/svg/05actionaghang.svg',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './images/svg/06sergpritula.svg',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './images/svg/07united24.svg',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './images/svg/08medsansfront.svg',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './images/svg/09worldvision.svg',
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
