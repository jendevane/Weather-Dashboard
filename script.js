var cityInput = document.querySelector('#city-input');
var cityBtn = document.querySelector('#search-btn')
var cityName = document.querySelector('#city-name')
var ciryArr = [];
var apiKey = ;
var formHandler = function (event) {
    var selectedCity = cityInput
        .value
        .trim
        .toLowerCase()
        .split('')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    if (selectedCity) {
        getCoords(selectedCity);
        cityInput.value = '';
    } else {
        alert('Please enter a city!');
    };
};

