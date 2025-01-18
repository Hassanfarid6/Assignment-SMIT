
    // Function to generate a random hex color
    function getRandomHexColor() {
        let hex = '#';
        for (let i = 0; i < 6; i++) {
            hex += Math.floor(Math.random() * 16).toString(16);
        }
        return hex;
    }

    // Set the random color as background and display the hex code
    window.onload = function() {
        let randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
        document.getElementById('colorCode').textContent = randomColor;
    };



