const collapsible = () => {
  const collapsibleButton = document.querySelector('[data-collapsible-button]');
  const textContainer = document.querySelector('[data-collapsible-container]');
  const displayedContent = document.querySelector('[data-collapsible-displayed]');
  const hiddenContent = document.querySelector('[data-collapsible-hidden]');

  if (collapsibleButton && textContainer && displayedContent && hiddenContent) {
    const setRootStyles = () => {
      document.documentElement.style.setProperty('--collapsible-displayed-height', `${displayedContent.offsetHeight}px`);
      document.documentElement.style.setProperty('--collapsible-hidden-height', `${hiddenContent.offsetHeight}px`);
      document.documentElement.style.setProperty('--collapsible-full-height', `${displayedContent.offsetHeight + hiddenContent.offsetHeight}px`);
    };

    setRootStyles();

    window.addEventListener('resize', setRootStyles);
    collapsibleButton.addEventListener('click', () => {
      textContainer.classList.toggle('about__text--shown');
    });
  }
};

export {collapsible};
