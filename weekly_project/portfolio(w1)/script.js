const themeToggle = document.getElementById("theme-toggle");
const subbtn = document.getElementById("subbtn");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
subbtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (name && email && message) {
    alert("Message Sent!");
  } else {
    alert("Please fill all the fields!");
  }
});