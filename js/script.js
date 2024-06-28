const red = document.querySelector('.red');

red.addEventListener('click', () => {
  const div = document.createElement('div');

  div.classList.add('r');

  const divbox = document.querySelector('.box_container');

  divbox.appendChild(div);
});

const green = document.querySelector('.green');

green.addEventListener('click', () => {
  const div = document.createElement('div');

  div.classList.add('g');

  const divbox = document.querySelector('.box_container');

  divbox.appendChild(div);
});

const blue = document.querySelector('.blue');

blue.addEventListener('click', () => {
  const div = document.createElement('div');

  div.classList.add('b');

  const divbox = document.querySelector('.box_container');

  divbox.appendChild(div);
});
