document.getElementById('subbtn').addEventListener('click', function() {
    let input = document.getElementById('username').value && document.getElementById('password').value;
    if (input.trim() === '') {
        alert('Please enter a value before submitting.');
    }else {
        alert(`welcome ! ${username.value}`);
    }
});
