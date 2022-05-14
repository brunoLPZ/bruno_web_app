const workData = [
  {
    work: 'APOYO A LA INVESTIGACION',
    place: 'CiTiUS',
    date: '2018',
  },
  {
    work: 'DESARROLLADOR FULLSTACK\n(CINFONI)',
    place: 'Imatia Innovation',
    date: '2019 - 2021',
  },
  {
    work: 'DESARROLLADOR FULLSTACK\n(BCP)',
    place: 'Imatia Innovation',
    date: '2021 - ?',
  },
];
let currentIdx = 0;
let progress = 0;

async function run() {
  await animateKeyboard();
}

async function animateKeyboard() {
  const workDiv = document.getElementById('work');
  const placeDiv = document.getElementById('place');
  const dateDiv = document.getElementById('date');
  workDiv.innerText = '';
  placeDiv.innerText = '';
  dateDiv.innerText = '';
  const data = workData[currentIdx];

  if (window.innerWidth > 620) {
    const keys = Array.from(document.getElementsByClassName('key'));

    let newText = '';

    for (let letter of data.work) {
      let key;
      let additionalKey;
      if (letter === ' ') {
        key = document.getElementsByClassName('space').item(0);
      } else if (letter === '\n') {
        key = document.getElementsByClassName('enter').item(0);
      } else if (letter === '(' || letter === ')') {
        key = keys.find((k) => k.innerText.includes(letter));
        additionalKey = document.getElementsByClassName('may').item(0);
      } else {
        key = keys.find((k) => k.innerText === letter);
      }
      key.classList.add('pulse');
      if (additionalKey) {
        additionalKey.classList.add('pulse');
      }
      newText += letter;
      workDiv.innerText = newText;
      await new Promise((r) => setTimeout(r, 200));
      key.classList.remove('pulse');
      if (additionalKey) {
        additionalKey.classList.remove('pulse');
      }
    }
  } else {
    const arrow = document.getElementById('arrow-right');
    arrow.classList.add('pulse');
    await new Promise((r) => setTimeout(r, 200));
    arrow.classList.remove('pulse');

    workDiv.innerText = data.work;
  }

  placeDiv.innerText = data.place;
  dateDiv.innerText = data.date;

  currentIdx++;
  if (workData.length === currentIdx) {
    currentIdx = 0;
  }
  const timer = setInterval(() => {
    progress += 25;
    document.getElementById('timer-progress').style.width = `${progress}%`;
  }, 1000);
  setTimeout(async () => {
    progress = 0;
    document.getElementById('timer-progress').style.width = `${progress}%`;
    clearInterval(timer);
    await animateKeyboard();
  }, 5000);
}
document.addEventListener('DOMContentLoaded', run);
