// 1. Dynamic Footer Year and Last Modified Date
const yearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

// Set the current year
const today = new Date();
yearElement.textContent = today.getFullYear();

// Set the last modified date
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;

// 2. Hamburger Menu Logic
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    // Toggle the 'open' class on the ul element
    navigation.classList.toggle("open");

    // Toggle the menu button text between hamburger and X
    if (navigation.classList.contains("open")) {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }
});