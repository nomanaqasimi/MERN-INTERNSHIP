const getusers = document.getElementById('getusers');
const usercards = document.querySelectorAll('.usercard'); 
const parent = document.querySelector('.parent');

async function getUsersdata() {
parent.classList.remove('show-cards');
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    
    usercards.forEach((card, index) => {
        const cardImage = card.querySelector('.userimg');
        const cardName = card.querySelector('.name'); 
        const cardEmail = card.querySelector('.email'); 

        if (data.results[index]) {
            cardImage.src = data.results[index].picture.large;
            cardName.innerText = data.results[index].name.first + " " + data.results[index].name.last;
            cardEmail.innerText = data.results[index].email;
        }
    });
    parent.classList.add('show-cards')
   
    getusers.innerText = "Get New Users";
    
  
}

getusers.addEventListener('click', getUsersdata);