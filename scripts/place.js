// Footer info
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// Wind Chill Logic
const temp = 10; // Static values from your HTML
const windSpeed = 5;

// Requirement: Function must be one line of code for the calculation
const calculateWindChill = (t, v) => (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1);

function displayWindChill() {
    const wcDisplay = document.getElementById("windchill");

    // Constraint check: Temp <= 10°C AND Wind > 4.8 km/h
    if (temp <= 10 && windSpeed > 4.8) {
        wcDisplay.textContent = calculateWindChill(temp, windSpeed) + "°C";
    } else {
        wcDisplay.textContent = "N/A";
    }
}

// Call on load
displayWindChill();