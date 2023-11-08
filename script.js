// Content section variables
const homePageSection = document.getElementById("homePage");
const converterPageSection = document.getElementById("converterPage");
const infoPageSection = document.getElementById("infoPage");

// Current active page
// 0 = homePage, 1 = converterPage, 2 = infoPage
// Default is homePage, 0
let currentActivePage = 0;


// Function to handle the switching between pages
function switchPage(pageToSwitchTo) {
    if (pageToSwitchTo != currentActivePage) {
        if (currentActivePage == 0) {
            homePageSection.classList.toggle("active-content");

            if (pageToSwitchTo == 1) {
                converterPageSection.classList.toggle("active-content");
                currentActivePage = pageToSwitchTo;
            } 
            else if (pageToSwitchTo == 2) {
                infoPageSection.classList.toggle("active-content");
                currentActivePage = pageToSwitchTo;
            }
        }
        else if (currentActivePage == 1) {
            converterPageSection.classList.toggle("active-content");

            if (pageToSwitchTo == 0) {
                homePageSection.classList.toggle("active-content");
                currentActivePage = pageToSwitchTo;
            } 
            else if (pageToSwitchTo == 2) {
                infoPageSection.classList.toggle("active-content");
                currentActivePage = pageToSwitchTo;
            }
        }
        else if (currentActivePage == 2) {
            infoPageSection.classList.toggle("active-content");

            if (pageToSwitchTo == 0) {
                homePageSection.classList.toggle("active-content");
                currentActivePage = pageToSwitchTo;
            } 
            else if (pageToSwitchTo == 1) {
                converterPageSection.classList.toggle("active-content");
                currentActivePage = pageToSwitchTo;
            }
        }
    }
}