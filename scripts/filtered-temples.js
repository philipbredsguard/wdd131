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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona, United States",
        dedicated: "1927, October, 23",
        area: 75000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-186.jpg"
    },
    {
        templeName: "Cedar City Utah",
        location: "Cedar City, Utah, United States",
        dedicated: "2017, December, 10",
        area: 42657,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cedar-city-utah-temple/cedar-city-utah-temple-2298.jpg"
    },
    {
        templeName: "Spokane Washington",
        location: "Spokane, Washington, United States",
        dedicated: "1999, August, 21",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/spokane-washington-temple/spokane-washington-temple-65242-thumb.jpg"
    },
];

const galleryContainer = document.querySelector(".gallery");

function renderTemples(templesArray) {
    // 1. Clear the gallery 
    galleryContainer.innerHTML = "";

    // 2. The loop 
    templesArray.forEach(temple => {
        // Create a figure element for the card
        let card = document.createElement("figure");

        // Build the HTML content using template literals and the object properties
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Size:</span> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width=300 height=200>
        `;

        // Append the newly created card to the main gallery container
        galleryContainer.appendChild(card);
    });
}

renderTemples(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        // Extract the year from the string "1888, May, 21"
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    renderTemples(oldTemples);
});

newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    renderTemples(newTemples);
});

largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    renderTemples(largeTemples);
});

smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    renderTemples(smallTemples);
});

homeLink.addEventListener("click", () => {
    renderTemples(temples);
});