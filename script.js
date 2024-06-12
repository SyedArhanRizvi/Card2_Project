// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize input fields and card display
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const villageInput = document.getElementById('village');
    const cityInput = document.getElementById('city');

    // Load stored data from local storage if available
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        nameInput.value = storedUser.name;
        phoneInput.value = storedUser.phone;
        villageInput.value = storedUser.village;
        cityInput.value = storedUser.city;
        displayUserCard(storedUser);
    }

    // Add input event listeners to save data on change
    nameInput.addEventListener('input', saveUserData);
    phoneInput.addEventListener('input', saveUserData);
    villageInput.addEventListener('input', saveUserData);
    cityInput.addEventListener('input', saveUserData);
});

function saveUserData() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const village = document.getElementById('village').value;
    const city = document.getElementById('city').value;

    const user = {
        name: name,
        phone: phone,
        village: village,
        city: city
    };

    localStorage.setItem('user', JSON.stringify(user));
    displayUserCard(user);
}

function displayUserCard(user) {
    document.getElementById('cardName').textContent = user.name;
    document.getElementById('cardPhone').textContent = user.phone;
    document.getElementById('cardVillage').textContent = user.village;
    document.getElementById('cardCity').textContent = user.city;
    document.getElementById('userCard').style.display = 'block';
}
