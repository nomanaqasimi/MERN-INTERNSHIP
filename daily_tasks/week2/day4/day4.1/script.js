const user = document.getElementById('usergenerate');
const url = "https://randomuser.me/api";
const usercard = document.querySelector('.user-card');

async function generateUser() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const person = data.results[0];
    
    console.log(person.name.first);
    
    usercard.innerHTML = `
      <img id="userimage" src="${person.picture.medium}" alt="User profile image">
      <h2>${person.name.first} ${person.name.last}</h2>
      <p>${person.email}</p>
      <button id="newuserbtn">New User</button>
    `;
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

if (user) {
  user.addEventListener('click', generateUser);
}

usercard.addEventListener('click', (event) => {
  if (event.target.id === 'newuserbtn') {
    generateUser();
  }
});