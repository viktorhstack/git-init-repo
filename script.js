// const button = document.getElementById("myButton");

const button = document.querySelector("#myButton");
button.addEventListener("click", () => {  alert("Button was clicked!");
});

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
