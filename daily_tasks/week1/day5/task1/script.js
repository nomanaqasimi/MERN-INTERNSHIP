const blogText = document.getElementById("blog-text");
const fontSelect = document.getElementById("fontSelect");
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const underlineBtn = document.getElementById("underlineBtn");
const increaseFontBtn = document.getElementById("font-increase");
const decreaseFontBtn = document.getElementById("font-decrease");
let currentFontSize = 1.2;
document.getElementById("redbtn").addEventListener("click", function() {
   blogText.style.color = "red";
});

document.getElementById("greenbtn").addEventListener("click", function() {
   blogText.style.color = "green";
});

document.getElementById("bluebtn").addEventListener("click", function() {
    blogText.style.color = "blue";
});

document.getElementById("resetBtn").addEventListener("click", function() {
    blogText.removeAttribute("style");
    fontSelect.selectedIndex = 0;
    boldBtn.classList.remove("btn-active");
    italicBtn.classList.remove("btn-active");
    underlineBtn.classList.remove("btn-active");
    currentFontSize = 1.2;
});
boldBtn.addEventListener("click", function() {
    boldBtn.classList.toggle("btn-active");

    if (boldBtn.classList.contains("btn-active")) {
        blogText.style.fontWeight = "bold";
    } else {
        blogText.style.fontWeight = "normal";
    }
});
italicBtn.addEventListener("click", function() {
    italicBtn.classList.toggle("btn-active");
    if (italicBtn.classList.contains("btn-active")) {
        blogText.style.fontStyle = "italic";
    } else {
        blogText.style.fontStyle = "normal";
    }
});
underlineBtn.addEventListener("click", function() {
    underlineBtn.classList.toggle("btn-active");
    if (underlineBtn.classList.contains("btn-active")) {
        blogText.style.textDecoration = "underline";
    } else {
        blogText.style.textDecoration = "none";
    }
}); 
increaseFontBtn.addEventListener("click", function() {
    currentFontSize = Number((currentFontSize + 0.1).toFixed(1));
    blogText.style.fontSize = currentFontSize + "rem";
});

decreaseFontBtn.addEventListener("click", function() {
    if (currentFontSize > 0.5) {
        currentFontSize = Number((currentFontSize - 0.1).toFixed(1));
        blogText.style.fontSize = currentFontSize + "rem";
    }
});
fontSelect.addEventListener("change", function() {
    blogText.style.fontFamily = fontSelect.value;
});