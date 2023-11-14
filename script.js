// Light- darkmode switch variable
const modeSwitchBtn = document.getElementById("switchBtn");

// Default and current mode, 0 = dark mode, 1 = light mode
const defaultMode = 0;
let currentMode;


// function for checking current mode when the page loads
function checkCurrentMode() {
    currentMode = defaultMode;

    if (currentMode == 0) {
        modeSwitchBtn.classList.add("fa-sun");
    }
    else if (currentMode == 1) {
        modeSwitchBtn.classList.add("fa-moon");
    }
}

// Variables for background
const _darkModeBackground = document.getElementById("darkModeBackground");
const _lightModeBackground = document.getElementById("lightModeBackground");

// Function for switching modes
function switchMode() {
    _darkModeBackground.style.display = currentMode === 0 ? "none" : "block";
    _lightModeBackground.style.display = currentMode === 0 ? "block" : "none";
    modeSwitchBtn.classList.toggle("fa-sun", currentMode === 0);
    modeSwitchBtn.classList.toggle("fa-moon", currentMode === 1);
    document.body.classList.toggle("light-mode");

    currentMode = 1 - currentMode; // Toggle between 0 and 1
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
    "KG": { "KG": 1, "G": 1000, "Ton": 0.001, "lbs": 2.20462, "oz": 35.274 },
    "G": { "KG": 0.001, "G": 1, "Ton": 0.000001, "lbs": 0.00220462, "oz": 0.035274 },
    "Ton": { "KG": 1000, "G": 1000000, "Ton": 1, "lbs": 2204.62, "oz": 35274 },
    "Pond": { "KG": 0.5, "G": 0.01, "Ton": 0.0005, "lbs": 1, "oz": 16 },
    "Ons": { "KG": 0.1, "G": 100, "Ton": 0.0001, "lbs": 0.160357, "oz": 2.57204 },
};

// The function to convert the values
function convert() {
    const inputUnitValue = inputDropdownUnit.options[inputDropdownUnit.selectedIndex].value;
    const outputUnitValue = outputDropdownUnit.options[outputDropdownUnit.selectedIndex].value;

    // If the user left any dropdowns on default
    if (inputUnitValue === "Default" || outputUnitValue === "Default") {
        alert("U moet doormiddel van het dropdown menu een eenheid kiezen die u wilt converteren. Daarna moet u bij het andere dropdown menu kiezen waar u naar toe wilt converteren. Deze velden kunnen niet standaard blijven.");
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
    // Get the text field
    var copyText = document.getElementById("outputValue");
    if (copyText.value != "Resultaat") {
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999);

        // Remove the unit from the result so it copies just the number
        var textToClipboard = copyText.value.split(" ")[0];

        // Copy the text inside the text field
        navigator.clipboard.writeText(textToClipboard);
    }
}