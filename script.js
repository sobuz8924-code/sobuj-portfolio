const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

if(document.documentElement.scrollTop > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

const texts = [
  "Sociology Student",
  "Field Data Collector",
  "Humanitarian Volunteer",
  "Social Research Enthusiast",
  "NGO & Development Professional"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type,1500);
    }else{
        setTimeout(type,100);
    }

})();

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }else{
        toggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

const certificates = document.querySelectorAll(".certificate-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

certificates.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
