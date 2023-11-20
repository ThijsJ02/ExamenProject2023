// Light- darkmode switch variable
const modeSwitchBtn = document.getElementById("switchBtn");

// Default and current mode, 0 = dark mode, 1 = light mode
const defaultMode = 0;
let currentMode;

// function for checking current mode when the page loads
function checkCurrentMode() {
    currentMode = defaultMode;
}

// alert("Voor de beste ervaring tijdens het gebruik van de website moet het device in portraitmode (verticale stand) staan");

// Variables for background
const _darkModeBackground = document.getElementById("darkModeBackground");
const _lightModeBackground = document.getElementById("lightModeBackground");

// Function for switching modes
function switchMode() {
    if (currentMode == 0) {
        _darkModeBackground.classList.toggle("inactive");
        _lightModeBackground.classList.toggle("inactive");
        modeSwitchBtn.classList.toggle("fa-sun");
        modeSwitchBtn.classList.toggle("fa-moon");
        document.body.classList.toggle("light-mode");

        currentMode == 1;
    }
    else if (currentMode == 1) {
        _darkModeBackground.classList.toggle("inactive");
        _lightModeBackground.classList.toggle("inactive");
        modeSwitchBtn.classList.toggle("fa-sun");
        modeSwitchBtn.classList.toggle("fa-moon");
        document.body.classList.toggle("light-mode");

        currentMode == 0;
    }
}

const pageSections = [
    document.getElementById("homePage"),
    document.getElementById("converterPage"),
    document.getElementById("infoPage"),
];

const navButtons = [
    document.getElementById("homeNavBtn"),
    document.getElementById("converterNavBtn"),
    document.getElementById("infoNavBtn"),
];


// Current active page
// 0 = homePage, 1 = converterPage, 2 = infoPage
// Default is homePage, 0
let currentActivePage = 0;

// Bool to check if sliding animation is finished
let maySwitch = true;

// Function for switching pages
function switchPage(pageToSwitchTo) {
    if (maySwitch && pageToSwitchTo !== currentActivePage) {
        maySwitch = false;

        const currentSection = pageSections[currentActivePage];
        const targetSection = pageSections[pageToSwitchTo];
        const currentNavBtn = navButtons[currentActivePage];
        const targetNavBtn = navButtons[pageToSwitchTo];

        currentNavBtn.classList.toggle("active");
        currentSection.setAttribute('closing', "");
        currentSection.addEventListener('animationend', () => {
            currentSection.removeAttribute('closing');
            currentSection.classList.toggle("active-content");
            targetSection.classList.toggle("active-content");
            targetSection.setAttribute('opening', "");
        }, { once: true })

        targetNavBtn.classList.toggle("active");

        targetSection.addEventListener('animationend', () => {
            targetSection.removeAttribute('opening');
            maySwitch = true;
        }, { once: true })

        currentActivePage = pageToSwitchTo;
    }
}

// Variables for the input and output fields
const inputDropdownUnit = document.getElementById("inputUnit");
const _inputField = document.getElementById("inputValue");
const outputDropdownUnit = document.getElementById("outputUnit");
const _outputField = document.getElementById("outputValue");

// Conversion Factors for all conversions
const conversionFactors = {
    "KG": { "KG": 1, "G": 1000, "Ton": 0.001, "lbs": 2.20462, "ounce": 35.274 },
    "G": { "KG": 0.001, "G": 1, "Ton": 0.000001, "lbs": 0.00220462, "ounce": 0.035274 },
    "Ton": { "KG": 1000, "G": 1000000, "Ton": 1, "lbs": 2204.62, "ounce": 35270 },
    "lbs": { "KG": 0.453592, "G": 453.592, "Ton": 0.000453592, "lbs": 1, "ounce": 16 },
    "ounce": { "KG": 0.0283495, "G": 28.3495, "Ton": 2.835e-5, "lbs": 0.0625, "ounce": 1 },
};


// The function to convert the values
function convert() {
    const inputUnitValue = inputDropdownUnit.options[inputDropdownUnit.selectedIndex].value;
    const outputUnitValue = outputDropdownUnit.options[outputDropdownUnit.selectedIndex].value;

    var containsOnlyNumbers = /^\d+$/.test(_inputField.value);
    if (!containsOnlyNumbers) {
        showAlert(2);
        return;
    }

    var numericValue = Number(_inputField.value);
    if (numericValue > Number.MAX_SAFE_INTEGER) {
        showAlert(3);
        return;
    }

    // If the user left any dropdowns on default
    if (inputUnitValue === "Default" || outputUnitValue === "Default") {
        alert("U moet doormiddel van het dropdown menu een eenheid kiezen die u wilt converteren. Daarna moet u bij het andere dropdown menu kiezen waar u naar toe wilt converteren. Deze velden kunnen niet standaard blijven.");
        return;
    }

    if (inputUnitValue === outputUnitValue) {
        _outputField.value = _inputField.value + " " + outputUnitValue;
        return;
    }

    // Calculate the result of the conversion
    const conversionFactor = conversionFactors[inputUnitValue][outputUnitValue];
    var calcValue = _inputField.value * conversionFactor;

    // Convert the result to a string to check the position of the decimal point
    const calcValueString = calcValue.toString();

    // Check if there are more than a certain amount of decimals
    const decimalPosition = calcValueString.indexOf('.');
    const numDecimals = decimalPosition === -1 ? 0 : calcValueString.length - decimalPosition - 1;

    // Round the result to a certain amount of decimals only if there are more than a certain amount of decimals
    if (numDecimals > 10) {
        calcValue = parseFloat(calcValue.toFixed(10));
    }

    // Update the output field
    _outputField.value = calcValue + " " + outputUnitValue;
}

// Function to reset fields to default
function resetFields() {
    inputDropdownUnit.value = "Default";
    outputDropdownUnit.value = "Default";
    _inputField.value = "";
    _outputField.value = "Resultaat";
}

// Function for copying the result when clicked on the field
function copyField() {
    var copyText = document.getElementById("outputValue");

    if (copyText.value !== "Resultaat") {
        var tempTextArea = document.createElement("textarea");
        tempTextArea.value = copyText.value.split(" ")[0];

        document.body.appendChild(tempTextArea);
        tempTextArea.select();

        try {
            // Use Clipboard API if available
            navigator.clipboard.writeText(tempTextArea.value)
                .then(() => {
                    console.log("Text copied to clipboard");
                    showAlert(0);
                })
                .catch(() => {
                    // Fallback to document.execCommand if Clipboard API is not supported
                    if (document.execCommand('copy')) {
                        console.log("Text copied to clipboard (fallback)");
                        showAlert(0);
                    } else {
                        console.error("Copy to clipboard failed");
                        showAlert(1);
                    }
                });
        } catch (err) {
            console.error("Clipboard API and execCommand not supported:", err);
            showAlert(1);
        } finally {
            document.body.removeChild(tempTextArea);
        }
    }
}


const _alertBox = document.getElementById("alertBox");
const _alertMessage = document.getElementById("alertMessage");

function showAlert(status) {
    if (status == 0) {
        _alertMessage.innerHTML = "Resultaat Gekopieërd!";
    }
    else if (status == 1) {
        _alertMessage.innerHTML = "Er is iets misgegaan tijdens het kopieëren!";
    }
    else if (status == 2) {
        _alertMessage.innerHTML = "Het invoerveld mag alleen nummers bevatten!";
    }
    else if (status == 3) {
        _alertMessage.innerHTML = "Het invoerveld bevat geen geldige waarde!";
    }
    _alertBox.style.display = "flex";
    _alertBox.setAttribute('open', "");
    _alertBox.addEventListener('animationend', () => {
        _alertBox.removeAttribute('open');
        _alertBox.style.display = "none";
    }, { once: true })
}
