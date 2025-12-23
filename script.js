let audio;

function playAudio(audioName) {
  if (audio) audio.pause();
  audio = new Audio(`./sounds/${audioName}`);
  audio.volume = 0.1; // 30% do volume
  audio.play();
}

const giftsArray = [
  {
    element: document.querySelector(".audio1"),
    audioName: "1.mp3",
  },
  {
    element: document.querySelector(".audio2"),
    audioName: "2.mp3",
  },
  {
    element: document.querySelector(".audio3"),
    audioName: "3.mp3",
  },
  {
    element: document.querySelector(".audio4"),
    audioName: "4.mp3",
  },
  {
    element: document.querySelector(".audio5"),
    audioName: "5.mp3",
  },
];

giftsArray.forEach((gift) => {
  gift.element.addEventListener("click", () => {
    playAudio(gift.audioName);
  });
});
   const star = document.querySelector('.star');

  star.addEventListener('click', () => {
    const rect = star.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');

      confetti.style.left = centerX + 'px';
      confetti.style.top = centerY + 'px';

      // cores
      const colors = ['#e3e703', '#db0404', '#24b400', '#113fb7', '#ba2c70'];
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      // ângulo + distância
      const angle = Math.random() * Math.PI * 2; // 0–360°
      const distance = Math.random() * 250 + 50;

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      confetti.style.setProperty('--x', `${x}px`);
      confetti.style.setProperty('--y', `${y}px`);

      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 1500);
    }
  });

  const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const confettiContainer = document.querySelector(".confetti-container");
let confettiPlayed = false;

function getNextChristmas() {
  const now = new Date();
  let year = now.getFullYear();
  const christmas = new Date(year, 11, 25, 0, 0, 0);

  if (now > christmas) {
    year++;
  }

  return new Date(year, 11, 25, 0, 0, 0);
}

function updateCountdown() {
  const now = new Date();
  const christmas = getNextChristmas();
  const diff = christmas - now;

  if (diff <= 0 && !confettiPlayed) {
    launchConfetti();
    confettiPlayed = true;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = "50%";
    confetti.style.top = "50%";

    const colors = ["#e3e703", "#db0404", "#24b400", "#113fb7", "#ba2c70"];
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 350 + 50;

    confetti.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    confetti.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1800);
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
