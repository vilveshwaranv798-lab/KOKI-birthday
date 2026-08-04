// ===========================
// ELEMENTS
// ===========================

const bgMusic = document.getElementById("bgMusic");
const intro = document.getElementById("intro");
const photoScene = document.getElementById("photoScene");
const letterScene = document.getElementById("letterScene");
const endingScene = document.getElementById("endingScene");

const startBtn = document.getElementById("startBtn");
const replayBtn = document.getElementById("replayBtn");

const mainPhoto = document.getElementById("mainPhoto");
const stars = document.getElementById("stars");

// ===========================
// CREATE STARS
// ===========================

for(let i = 0; i < 300; i++){

    const star = document.createElement("div");

    star.className = "star"; 

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 2 + "s";

    star.style.opacity = Math.random();

    stars.appendChild(star);

}

// ===========================
// START BUTTON
// ===========================

startBtn.addEventListener("click",()=>{

  bgMusic.play().catch(err => console.log(err));
  
  intro.classList.add("fade-out");

    setTimeout(()=>{

        intro.style.display="none";

        photoScene.style.display="flex";

        slideshow = setInterval(showNextPhoto,4000);

    },800);

});
// ===========================
// REPLAY
// ===========================

replayBtn.addEventListener("click",()=>{

    location.reload();

});

// ===========================
// PHOTO SLIDESHOW
// ===========================

const photos = [
    "assets/photos/1.jpg",
    "assets/photos/2.jpg",
    "assets/photos/3.jpg",
    "assets/photos/4.jpg",
    "assets/photos/5.jpg",
    "assets/photos/6.jpg",
    "assets/photos/7.jpg",
    "assets/photos/8.jpg",
    "assets/photos/9.jpg",
    "assets/photos/10.jpg"
];

let currentPhoto = 0;

function showNextPhoto(){

    currentPhoto++;

    if(currentPhoto >= photos.length){

        clearInterval(slideshow);

        photoScene.style.display = "none";

        letterScene.style.display = "flex";

        startTyping();

        return;

    }

    mainPhoto.classList.add("fade");

    setTimeout(()=>{

        mainPhoto.src = photos[currentPhoto];

        mainPhoto.classList.remove("fade");

    },500);

}

let slideshow;

// ===========================
// TYPEWRITER LETTER
// ===========================

const message =
`Happy Birthday KOKI ❤️

Every moment with you is special.

May your smile always stay the same,
and may all your dreams come true.

Life gives us countless people...

But only a few leave a beautiful mark in our hearts.

Thank you for being such an amazing person.

💖 Beautiful Memories

🌸 Endless Happiness

Stay Happy...
Stay Blessed...
Keep Smiling Always... 😊

— Your Azhagu Pulla 😘`;

const letterText = document.getElementById("letterText");

let index = 0;

function startTyping(){

    letterText.innerHTML="";

    index=0;

    const timer = setInterval(()=>{

        letterText.innerHTML += message.charAt(index);

        index++;

        if(index >= message.length){

            clearInterval(timer);

            setTimeout(()=>{

                letterScene.style.display="none";

                endingScene.style.display="flex";

            },3000);

        }

    },45);

}

