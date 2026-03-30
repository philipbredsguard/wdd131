const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");

    // Populate Product Options
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Using id as value as per instructions
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Footer Dates
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});

// Inside review.js (attached to review.html)
document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    // Display the count if you have an element for it
    const displayElement = document.querySelector("#counter");
    if (displayElement) {
        displayElement.textContent = `Total Reviews Submitted: ${reviewCount}`;
    }
});