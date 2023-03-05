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
  };

  setRootStyles();

  window.addEventListener('resize', setRootStyles);

  textButton.addEventListener('click', () => {
    textContainer.classList.toggle('about__text--shown');
  });
};

export {testFunciton};
