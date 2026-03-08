// Populate the current year
const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

// Populate the last modified date
const lastModParagraph = document.querySelector("#lastModified");
lastModParagraph.textContent = `Last Modification: ${document.lastModified}`;