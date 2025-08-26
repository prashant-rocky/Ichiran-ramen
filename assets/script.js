// ---------------- Cookie Consent ----------------
window.addEventListener('load', function () {
    if (window.cookieconsent) {
        window.cookieconsent.run({
            notice_banner_type: "simple",
            consent_type: "express",
            palette: "light",
            language: "en",
            page_load_consent_levels: ["strictly-necessary"],
            notice_banner_reject_button_hide: false,
            preferences_center_close_button_hide: false,
            page_refresh_confirmation_buttons: false,
            website_name: "Ichiran Ramen",
            website_privacy_policy_url: "https://github.com/" // replace with real URL
        });
    }
});

// ---------------- Swiper ----------------
var swiper1 = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

var swiper2 = new Swiper(".TmySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});

// ---------------- Menu Data ----------------
const menuData1 = [
    { id: 1, name: "Classic Tonkotsu Ramen", description: "Rich pork bone broth with handmade noodles, chashu, and scallions.", price: "¥1,100", image: "assets/images/product1.jpg" },
    { id: 2, name: "Spicy Miso Ramen", description: "Bold miso broth with a spicy kick, ground pork, and fresh toppings.", price: "¥1,250", image: "assets/images/product2.jfif" },
    { id: 3, name: "Shoyu Ramen", description: "Savory soy sauce base with tender noodles, bamboo shoots, and soft-boiled egg.", price: "¥1,000", image: "assets/images/product3.jpg" },
    { id: 4, name: "Vegetarian Ramen", description: "Light vegetable broth with tofu, mushrooms, corn, and seasonal greens.", price: "¥950", image: "assets/images/product4.jpg" }
];

const menuData2 = [
    { id: 5, name: "Black Garlic Ramen", description: "Tonkotsu broth infused with roasted black garlic oil for deep flavor.", price: "¥1,200", image: "assets/images/product5.jpg" },
    { id: 6, name: "Seafood Ramen", description: "A rich blend of shrimp, squid, and fish in a flavorful miso broth.", price: "¥1,350", image: "assets/images/product6.jpg" },
    { id: 7, name: "Deluxe Chashu Ramen", description: "Extra slices of slow-braised pork belly with a hearty tonkotsu broth.", price: "¥1,400", image: "assets/images/product7.jpg" },
    { id: 8, name: "Cold Tsukemen Ramen", description: "Chilled dipping noodles served with rich pork and soy-based dipping sauce.", price: "¥1,150", image: "assets/images/product8.jpg" }
];

// ---------------- Render Menus ----------------
document.addEventListener("DOMContentLoaded", () => {

    // ✅ Home Page: menu1
    const menu1 = document.getElementById("menu1");
    if (menu1) {
        menuData1.forEach(menu => {
            menu1.innerHTML += createMenuItem(menu);
        });
    }

    // ✅ Home Page: menu2
    const menu2 = document.getElementById("menu2");
    if (menu2) {
        menuData2.forEach(menu => {
            menu2.innerHTML += createMenuItem(menu);
        });
    }

});


// ---------------- Helper Function ----------------
function createMenuItem(menu) {
    return `
        <div class="col-md-12 text-start py-3" key="${menu.id}">
            <div class="products d-flex">
                <div class="img px-2">
                    <img src="${menu.image}" alt="${menu.name}" height="100" width="100" class="productImg">
                </div>
                <div class="productName pt-3">
                    <h4 class="d-inline">${menu.name} .....</h4>
                    <h3 class="d-inline float-end">${menu.price}</h3>
                    <p>${menu.description}</p>
                </div>
            </div>
        </div>
    `;
}

