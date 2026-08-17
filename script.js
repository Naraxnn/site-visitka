let clicks = Number(localStorage.getItem('clicks')) || 0;
const button = document.getElementById('click-button');
const counter = document.getElementById('click-counter');

counter.textContent = clicks;

button.addEventListener('click', function () {
    clicks = clicks + 1;
    counter.textContent = clicks;
    localStorage.setItem('clicks', clicks);
});
