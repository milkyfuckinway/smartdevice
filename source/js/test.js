const nonBrSpace = String.fromCharCode(160);

const buttonAnchor = document.querySelector('.header__button--anchor');

const anchorButtonText = () => {
  if (window.innerWidth >= 768) {
    buttonAnchor.textContent = 'Получить бесплатную консультацию';
  } else {
    buttonAnchor.textContent = 'бесплатная консультация';
  }
};

anchorButtonText();

const services = document.querySelector('.services__container');
const servicesHeading = services.querySelector('h2');

const servicesHeadingText = () => {
  if (window.innerWidth >= 768) {
    servicesHeading.textContent = 'Smart Device предлагает следующие товары и услуги';
  } else {
    servicesHeading.textContent = `Товары и услуги Smart${nonBrSpace}Device`;
  }
};

servicesHeadingText();

const testFunciton = () => {
  const textButton = document.querySelector('.button--transparent-blue');
  const textContainer = document.querySelector('.about__text');
  const displayedText = document.querySelector('.about__displayed');
  const hiddenText = document.querySelector('.about__hidden');
  const header = document.querySelector('.header__top');

  const setRootStyles = () => {
    document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    document.documentElement.style.setProperty('--displayed-text-height', `${displayedText.offsetHeight}px`);
    document.documentElement.style.setProperty('--hidden-text-height', `${hiddenText.offsetHeight}px`);
    document.documentElement.style.setProperty('--full-text-height', `${displayedText.offsetHeight + hiddenText.offsetHeight}px`);
    anchorButtonText();
    servicesHeadingText();
  };

  setRootStyles();

  window.addEventListener('resize', setRootStyles);

  textButton.addEventListener('click', () => {
    textContainer.classList.toggle('about__text--shown');
  });
};

export {testFunciton};
