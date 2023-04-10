function updateCountdown() {
  const countdownDisplay = document.getElementById('countdown');

  const targetDate = new Date('January 1, ' + (new Date().getFullYear() + 1) + ' 00:00:00');
  const currentDate = new Date();
  const timeRemaining = targetDate - currentDate;

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  countdownDisplay.innerHTML = `${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
