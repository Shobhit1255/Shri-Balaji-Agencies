/* ==========================================
   SHRI BALAJI AGENCIES
========================================== */


/* ================= PRODUCTS ================= */

const products = [

    {
        name: "LED Bulb",
        category: "Lighting",
        icon: "💡",
        description:
            "Energy-efficient LED lighting for homes and shops."
    },

    {
        name: "Tube Light",
        category: "Lighting",
        icon: "🔆",
        description:
            "Bright and reliable tube lighting."
    },

    {
        name: "Concealed Light",
        category: "Lighting",
        icon: "◉",
        description:
            "Modern ceiling and interior lighting."
    },

    {
        name: "Strip Light",
        category: "Lighting",
        icon: "〰️",
        description:
            "Decorative and ambient strip lighting."
    },

    {
        name: "Focus Light",
        category: "Lighting",
        icon: "🔦",
        description:
            "Focused illumination for shops and projects."
    },

    {
        name: "Flood Light",
        category: "Lighting",
        icon: "☀️",
        description:
            "Powerful outdoor and area lighting."
    },

    {
        name: "Ceiling Fan",
        category: "Fans",
        icon: "🌀",
        description:
            "Reliable airflow for homes and commercial spaces."
    },

    {
        name: "Electrical Wire",
        category: "Wires & Cables",
        icon: "〰️",
        description:
            "Wiring solutions for electrical installations."
    },

    {
        name: "Switch",
        category: "Switches & Sockets",
        icon: "⏻",
        description:
            "Everyday electrical switches."
    },

    {
        name: "Socket",
        category: "Switches & Sockets",
        icon: "🔲",
        description:
            "Sockets for safe electrical connections."
    },

    {
        name: "Plug",
        category: "Switches & Sockets",
        icon: "🔌",
        description:
            "Plugs for common electrical applications."
    },

    {
        name: "PVC Conduit Pipe",
        category: "Fitting Materials",
        icon: "▯",
        description:
            "PVC pipes for protected wire routing."
    },

    {
        name: "MCB",
        category: "Protection",
        icon: "⚡",
        description:
            "Circuit protection for electrical installations."
    },

    {
        name: "Extension Cord",
        category: "Electrical Accessories",
        icon: "🔌",
        description:
            "Convenient electrical power extension."
    },

    {
        name: "Electrical Accessories",
        category: "Electrical Accessories",
        icon: "🧰",
        description:
            "Various electrical accessories and fitting materials."
    },

    {
        name: "More Products",
        category: "More",
        icon: "＋",
        description:
            "Contact us for additional electrical products."
    }

];


/* ================= CATEGORIES ================= */

const categories = [

    {
        name: "Lighting",
        icon: "💡"
    },

    {
        name: "Fans",
        icon: "🌀"
    },

    {
        name: "Wires & Cables",
        icon: "〰️"
    },

    {
        name: "Switches & Sockets",
        icon: "⏻"
    },

    {
        name: "Protection",
        icon: "⚡"
    },

    {
        name: "Fitting Materials",
        icon: "🧰"
    }

];


/* ================= ELEMENTS ================= */

const productGrid =
    document.getElementById("productGrid");

const categoryGrid =
    document.getElementById("categoryGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const noProducts =
    document.getElementById("noProducts");


/* ================= LOAD CATEGORIES ================= */

function loadCategories() {

    categoryGrid.innerHTML = "";

    categories.forEach(category => {

        const card =
            document.createElement("div");

        card.className =
            "category-card";

        card.innerHTML = `

            <div class="category-icon">
                ${category.icon}
            </div>

            <strong>
                ${category.name}
            </strong>

        `;

        card.onclick = function() {

            chooseCategory(
                category.name
            );

        };

        categoryGrid.appendChild(card);

    });

}


/* ================= FILTER OPTIONS ================= */

function loadFilterOptions() {

    const uniqueCategories =
        [
            ...new Set(
                products.map(
                    product => product.category
                )
            )
        ];


    uniqueCategories.forEach(category => {

        const option =
            document.createElement("option");

        option.value = category;

        option.textContent = category;

        categoryFilter.appendChild(option);

    });

}


/* ================= DISPLAY PRODUCTS ================= */

function displayProducts() {

    const searchTerm =
        searchInput.value
        .toLowerCase()
        .trim();

    const selectedCategory =
        categoryFilter.value;


    const filteredProducts =
        products.filter(product => {

            const matchesSearch =

                product.name
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                product.category
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesCategory =

                selectedCategory === "all"

                ||

                product.category ===
                selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    productGrid.innerHTML = "";


    if (filteredProducts.length === 0) {

        noProducts.style.display =
            "block";

        return;

    }


    noProducts.style.display =
        "none";


    filteredProducts.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image">
                ${product.icon}
            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <button
                    class="enquire-btn"
                    onclick="productEnquiry('${product.name}')">

                    Enquire on WhatsApp

                </button>

            </div>

        `;


        productGrid.appendChild(card);

    });

}


/* ================= CATEGORY CLICK ================= */

function chooseCategory(category) {

    categoryFilter.value =
        category;


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });


    displayProducts();

}


/* ================= SEARCH ================= */

searchInput.addEventListener(
    "input",
    displayProducts
);

categoryFilter.addEventListener(
    "change",
    displayProducts
);


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");


menuBtn.addEventListener(
    "click",
    function() {

        navbar.classList.toggle(
            "open"
        );

    }
);


/* ================= HERO SLIDER ================= */

let currentSlide = 0;

const slides =
    document.querySelectorAll(
        ".hero-slide"
    );

const dots =
    document.querySelectorAll(
        ".dot"
    );


function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove(
            "active"
        );

    });


    dots.forEach(dot => {

        dot.classList.remove(
            "active"
        );

    });


    currentSlide = index;


    slides[currentSlide]
        .classList.add("active");


    dots[currentSlide]
        .classList.add("active");

}


/* Change image every 5 seconds */

setInterval(function() {

    currentSlide++;

    if (
        currentSlide >=
        slides.length
    ) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}, 5000);


/* ================= ENQUIRY MODAL ================= */

const enquiryModal =
    document.getElementById(
        "enquiryModal"
    );


function openEnquiry() {

    enquiryModal.classList.add(
        "active"
    );

}


function closeEnquiry() {

    enquiryModal.classList.remove(
        "active"
    );

}


/* ================= PRODUCT ENQUIRY ================= */

function productEnquiry(
    productName
) {

    openEnquiry();


    document.getElementById(
        "customerMessage"
    ).value =

        "I want to enquire about: "
        +
        productName;

}


/* ================= WHATSAPP FORM ================= */

const enquiryForm =
    document.getElementById(
        "enquiryForm"
    );


enquiryForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "customerName"
            ).value;


        const phone =
            document.getElementById(
                "customerPhone"
            ).value;


        const message =
            document.getElementById(
                "customerMessage"
            ).value;


        const whatsappMessage =

`Hello Shri Balaji Agencies,

Name: ${name}

Phone: ${phone}

Requirement:
${message}`;


        const whatsappURL =

            "https://wa.me/918630241223?text="
            +
            encodeURIComponent(
                whatsappMessage
            );


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);


/* ================= CLOSE MODAL ================= */

enquiryModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            enquiryModal
        ) {

            closeEnquiry();

        }

    }
);


/* ================= FOOTER YEAR ================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* ================= INITIALIZE ================= */

loadCategories();

loadFilterOptions();

displayProducts();