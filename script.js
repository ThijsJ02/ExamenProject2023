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

// Function for switching modes
function switchMode() {
    if (currentMode == 0) {
        modeSwitchBtn.classList.replace("fa-sun", "fa-moon");
        document.body.classList.toggle("light-mode");
        currentMode = 1;
    }
    else if (currentMode == 1) {
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