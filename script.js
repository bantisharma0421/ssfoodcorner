/* =====================================================
   SS FOOD CORNER
   JAVASCRIPT
===================================================== */


/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking link */

document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });


/* ================= MENU FILTER ================= */

const tabs =
    document.querySelectorAll(".tab");

const menuItems =
    document.querySelectorAll(".menu-item");


tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(item =>
            item.classList.remove("active")
        );

        tab.classList.add("active");

        const filter =
            tab.getAttribute("data-filter");


        menuItems.forEach(item => {

            const category =
                item.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                item.style.display = "flex";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* ================= SCROLL ANIMATION ================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".food-card, .feature, .review-card, .menu-item, .gallery-item"
    )
    .forEach(element => {

        element.classList.add("fade-in");

        observer.observe(element);

    });


/* ================= PHONE PROTECTION ================= */

document
    .querySelectorAll('a[href^="tel:"]')
    .forEach(link => {

        link.addEventListener("click", () => {

            console.log(
                "Calling SS FOOD CORNER: 9953082421"
            );

        });

    });


/* ================= CURRENT YEAR ================= */

const year =
    new Date().getFullYear();

const footerText =
    document.querySelector(".footer-bottom .container");

if (footerText) {

    footerText.innerHTML =
        `© ${year} SS FOOD CORNER. All Rights Reserved.`;

}


/* ================= IMAGE ERROR HANDLING ================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.display = "none";

            }
        );

    });