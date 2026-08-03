// Loader

window.onload = function () {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

        document.getElementById("main").classList.remove("hidden");

    }, 3000);

};

// Button

document.getElementById("openBtn").addEventListener("click", function () {

    document.getElementById("gallery").classList.remove("hidden");

    document.getElementById("message").classList.remove("hidden");

    document.getElementById("end").classList.remove("hidden");

    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });

});

// Slideshow

const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlides() {

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    current++;

    if (current >= slides.length) {

        current = 0;

    }

    slides[current].classList.add("active");

}

setInterval(showSlides, 3000);

// Balloon Animation

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.innerHTML = "🎈";

    balloon.style.position = "fixed";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.bottom = "-50px";

    balloon.style.fontSize = (30 + Math.random() * 30) + "px";

    balloon.style.zIndex = "999";

    balloon.style.transition = "transform 8s linear";

    document.body.appendChild(balloon);

    setTimeout(() => {

        balloon.style.transform = "translateY(-120vh)";

    }, 100);

    setTimeout(() => {

        balloon.remove();

    }, 8500);

}

setInterval(createBalloon, 1200);

// Sparkle Effect

function createSparkle() {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.fontSize = (15 + Math.random() * 15) + "px";

    star.style.opacity = "0";

    star.style.transition = "1.5s";

    document.body.appendChild(star);

    setTimeout(() => {

        star.style.opacity = "1";

    }, 100);

    setTimeout(() => {

        star.style.opacity = "0";

    }, 1500);

    setTimeout(() => {

        star.remove();

    }, 2000);

}

setInterval(createSparkle, 700);

// Console Surprise 😄

console.log("🎂 Happy Birthday KOKI 😉 💜");