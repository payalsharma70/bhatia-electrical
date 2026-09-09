```javascript
/* =========================================
   BHATIA ELECTRICAL
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   PRODUCT FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active class */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        products.forEach(product => {

            const category = product.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                product.classList.remove("hide");

            } else {

                product.classList.add("hide");

            }

        });

    });

});


/* =========================================
   PRODUCT ENQUIRY MODAL
========================================= */

const modal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const selectedProduct = document.getElementById("selectedProduct");

const enquireButtons = document.querySelectorAll(".enquire-btn");

let currentProduct = "";


enquireButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentProduct = button.getAttribute("data-product");

        selectedProduct.textContent =
            "Enquiry for: " + currentProduct;

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* Close modal */

modalClose.addEventListener("click", closeModal);


/* Close when clicking outside */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeModal();
    }

});


function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "auto";

}


/* Close with Escape */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================================
   WHATSAPP PRODUCT ENQUIRY
========================================= */

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const message =
        document.getElementById("customerMessage").value.trim();


    const whatsappNumber = "919910633634";


    const whatsappMessage =
        `Hello Bhatia Electrical,

I am ${name}.

I am interested in:
${currentProduct}

My phone number:
${phone}

Message:
${message || "Please share more details about this product."}`;


    const url =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(url, "_blank");

    enquiryForm.reset();

    closeModal();

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const whatsappNumber = "919910633634";


    const whatsappMessage =
        `Hello Bhatia Electrical,

Name: ${name}

Phone: ${phone}

Product / Enquiry: ${subject}

Message:
${message}`;


    const url =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(url, "_blank");

    contactForm.reset();

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   SIMPLE SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".category-card, .product-card, .feature, .about-point, .contact-card"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});


/* =========================================
   PHONE NUMBER VALIDATION
========================================= */

function isValidPhone(phone) {

    const cleaned = phone.replace(/\D/g, "");

    return cleaned.length >= 10;

}


/* Contact form validation */

contactForm.addEventListener("submit", (event) => {

    const phone =
        document.getElementById("phone").value.trim();

    if (!isValidPhone(phone)) {

        event.preventDefault();

        alert("Please enter a valid phone number.");

    }

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "Bhatia Electrical website loaded successfully."
);
```
