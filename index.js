const animatedContainer = document.getElementsByClassName('animated-container')[0];
const collapseButton = document.getElementById('collapse-button');

const collapseHandler = () => {
  const height = animatedContainer.clientHeight;
  if (height === 90) {
    if (animatedContainer.classList.contains('height-animation-up')) {
      animatedContainer.classList.remove('height-animation-up');
    }
    animatedContainer.classList.add('height-animation-down');
  } else {
    animatedContainer.classList.remove('height-animation-down');
    animatedContainer.classList.add('height-animation-up');
  }
};

collapseButton.addEventListener('click', collapseHandler);
