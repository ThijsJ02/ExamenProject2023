// Light- darkmode switch
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
const _darkGrid = document.getElementById("darkGrid");
const _lightGrid = document.getElementById("lightGrid");

// Function for switching modes
function switchMode() {
    if (currentMode == 0) {
        // Going to lightmode
        _darkGrid.style.order = 2;
        _darkGrid.style.opacity = 0;
        _lightGrid.style.order = 1;
        _lightGrid.style.opacity = 1;
        modeSwitchBtn.classList.replace("fa-sun", "fa-moon");
        document.body.classList.toggle("light-mode");
        currentMode = 1;
    }
    else if (currentMode == 1) {
        // Going to darkmode
        _lightGrid.style.order = 2;
        _lightGrid.style.opacity = 0;
        _darkGrid.style.order = 1;
        _darkGrid.style.opacity = 1;
        modeSwitchBtn.classList.replace("fa-moon", "fa-sun");
        document.body.classList.toggle("light-mode");
        currentMode = 0;
    }
}

// Content section variables
const homePageSection = document.getElementById("homePage");
const converterPageSection = document.getElementById("converterPage");
const infoPageSection = document.getElementById("infoPage");

// Navbar button variables
const _homeNavBtn = document.getElementById("homeNavBtn");
const _converterNavBtn = document.getElementById("converterNavBtn");
const _infoNavBtn = document.getElementById("infoNavBtn");

// Current active page
// 0 = homePage, 1 = converterPage, 2 = infoPage
// Default is homePage, 0
let currentActivePage = 0;

// Bool to check if sliding animation is finished
let maySwitch = true;

// Function to handle the switching between pages
function switchPage(pageToSwitchTo) {
    if (maySwitch) {
        if (pageToSwitchTo != currentActivePage) {
            maySwitch = false;
            if (currentActivePage == 0) {
                if (pageToSwitchTo == 1) {
                    _homeNavBtn.classList.toggle("active");
                    homePageSection.setAttribute('closingleft', "");
                    homePageSection.addEventListener('animationend', () => {
                        homePageSection.removeAttribute('closingleft');
                        homePageSection.classList.toggle("active-content");
                        converterPageSection.classList.toggle("active-content");
                        converterPageSection.setAttribute('openingleft', "");
                    }, { once: true })

                    _converterNavBtn.classList.toggle("active");

                    converterPageSection.addEventListener('animationend', () => {
                        converterPageSection.removeAttribute('openingleft');
                        maySwitch = true;
                    }, { once: true })

                    currentActivePage = pageToSwitchTo;
                }
                else if (pageToSwitchTo == 2) {
                    _homeNavBtn.classList.toggle("active");
                    homePageSection.setAttribute('closingleft', "");
                    homePageSection.addEventListener('animationend', () => {
                        homePageSection.removeAttribute('closingleft');
                        homePageSection.classList.toggle("active-content");
                        infoPageSection.classList.toggle("active-content");
                        infoPageSection.setAttribute('openingleft', "");
                    }, { once: true })

                    _infoNavBtn.classList.toggle("active");

                    infoPageSection.addEventListener('animationend', () => {
                        infoPageSection.removeAttribute('openingleft');
                        maySwitch = true;
                    }, { once: true })

                    currentActivePage = pageToSwitchTo;
                }
            }
            else if (currentActivePage == 1) {
                if (pageToSwitchTo == 0) {
                    _converterNavBtn.classList.toggle("active");
                    converterPageSection.setAttribute('closingright', "");
                    converterPageSection.addEventListener('animationend', () => {
                        converterPageSection.removeAttribute('closingright');
                        converterPageSection.classList.toggle("active-content");
                        homePageSection.classList.toggle("active-content");
                        homePageSection.setAttribute('openingright', "");
                    }, { once: true })

                    _homeNavBtn.classList.toggle("active");

                    homePageSection.addEventListener('animationend', () => {
                        homePageSection.removeAttribute('openingright');
                        maySwitch = true;
                    }, { once: true })

                    currentActivePage = pageToSwitchTo;
                }
                else if (pageToSwitchTo == 2) {
                    _converterNavBtn.classList.toggle("active");
                    converterPageSection.setAttribute('closingleft', "");
                    converterPageSection.addEventListener('animationend', () => {
                        converterPageSection.removeAttribute('closingleft');
                        converterPageSection.classList.toggle("active-content");
                        infoPageSection.classList.toggle("active-content");
                        infoPageSection.setAttribute('openingleft', "");
                    }, { once: true })

                    _infoNavBtn.classList.toggle("active");

                    infoPageSection.addEventListener('animationend', () => {
                        infoPageSection.removeAttribute('openingleft');
                        maySwitch = true;
                    }, { once: true })

                    currentActivePage = pageToSwitchTo;
                }
            }
            else if (currentActivePage == 2) {
                if (pageToSwitchTo == 0) {
                    _infoNavBtn.classList.toggle("active");
                    infoPageSection.setAttribute('closingright', "");
                    infoPageSection.addEventListener('animationend', () => {
                        infoPageSection.removeAttribute('closingright');
                        infoPageSection.classList.toggle("active-content");
                        homePageSection.classList.toggle("active-content");
                        homePageSection.setAttribute('openingright', "");
                    }, { once: true })

                    _homeNavBtn.classList.toggle("active");

                    homePageSection.addEventListener('animationend', () => {
                        homePageSection.removeAttribute('openingright');
                        maySwitch = true;
                    }, { once: true })

                    currentActivePage = pageToSwitchTo;
                }
                else if (pageToSwitchTo == 1) {
                    _infoNavBtn.classList.toggle("active");
                    infoPageSection.setAttribute('closingright', "");
                    infoPageSection.addEventListener('animationend', () => {
                        infoPageSection.removeAttribute('closingright');
                        infoPageSection.classList.toggle("active-content");
                        converterPageSection.classList.toggle("active-content");
                        converterPageSection.setAttribute('openingright', "");
                    }, { once: true })

                    _converterNavBtn.classList.toggle("active");

                    converterPageSection.addEventListener('animationend', () => {
                        converterPageSection.removeAttribute('openingright');
                        maySwitch = true;
                    }, { once: true })

                    currentActivePage = pageToSwitchTo;
                }
            }
        }
    }
}

const inputDropdownUnit = document.getElementById("inputUnit");
const _inputField = document.getElementById("inputValue");
const outputDropdownUnit = document.getElementById("outputUnit");
const _outputField = document.getElementById("outputValue");

const conversionFactors = {
    "KG": { "KG": 1, "G": 1000, "Ton": 0.001, "Pond": 2, "Ons": 10 },
    "G": { "KG": 0.001, "G": 1, "Ton": 0.000001, "Pond": 1 / 500, "Ons": 0.01 },
    "Ton": { "KG": 1000, "G": 1000000, "Ton": 1, "Pond": 2000, "Ons": 10000 },
    "Pond": { "KG": 0.5, "G": 0.01, "Ton": 0.0005, "Pond": 1, "Ons": 5 },
    "Ons": { "KG": 0.1, "G": 100, "Ton": 0.0001, "Pond": 0.2, "Ons": 1 },
};

function convert() {
    const inputUnitValue = inputDropdownUnit.options[inputDropdownUnit.selectedIndex].value;
    const outputUnitValue = outputDropdownUnit.options[outputDropdownUnit.selectedIndex].value;

    if (inputUnitValue === "Default" || outputUnitValue === "Default") {
        alert("U moet doormiddel van het dropdown menu een eenheid kiezen die u wilt converteren. Daarna moet u bij het andere dropdown menu kiezen waar u naar toe wilt converteren. Deze velden kunnen niet standaard blijven.");
        return;
    }

    const conversionFactor = conversionFactors[inputUnitValue][outputUnitValue];
    _outputField.value = (_inputField.value * conversionFactor) + " " + outputUnitValue;
}

function resetFields() {
    inputDropdownUnit.value = "Default";
    outputDropdownUnit.value = "Default";
    _inputField.value = "";
    _outputField.value = "Resultaat";
}