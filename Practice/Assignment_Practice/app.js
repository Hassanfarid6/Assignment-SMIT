function updateTimeBasedTheme() {
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18;
    document.body.className = isDay ? 'day' : 'night';
    document.getElementById('icon').textContent = isDay ? '☀️' : '🌙';
    document.getElementById('greeting').textContent = isDay ? 'Good Day!' : 'Good Night!';
}

function toggleNightMode() {
    document.body.className = 'night';
    document.getElementById('icon').textContent = '🌙';
    document.getElementById('greeting').textContent = 'Good Night!';
}

updateTimeBasedTheme();
setInterval(updateTimeBasedTheme, 3000);