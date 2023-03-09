const contentChanging = () => {
  const changingElements = document.querySelectorAll('[data-content-changing]');
  changingElements.forEach((element) => {
    let originalText = element.textContent;
    let mutatedText = element.getAttribute('data-content-changing');
    let mutateWidth = element.getAttribute('data-content-changing-width');
    if (window.innerWidth >= mutateWidth) {
      element.textContent = originalText;
    } else {
      element.textContent = mutatedText;
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= mutateWidth) {
        element.textContent = originalText;
      } else {
        element.textContent = mutatedText;
      }
    });
  });
};

export {contentChanging};
