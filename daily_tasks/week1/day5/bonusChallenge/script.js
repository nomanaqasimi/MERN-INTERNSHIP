const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

lightBtn.addEventListener("click", function() {
  document.body.classList.remove("dark-theme");
  lightBtn.classList.add("active");
  darkBtn.classList.remove("active");
});

darkBtn.addEventListener("click", function() {
  document.body.classList.add("dark-theme");
  darkBtn.classList.add("active");
  lightBtn.classList.remove("active");
});