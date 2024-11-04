// تعریف شهر ها و کشور ها
let citiyOptions = {
    iran:["Tehran", "Tabriz", "Esfahan", "Kashan", "Rasht", "Bandar Abbas"],
    canada:["Vancouver", "Quebec", "Calgary", "Toronto", "Ottawa"],
    usa:["NewYork", "SanFrancisco", "Austin", "Detroit", "Los Angeles"],
}

// دریافت سلکت باکس شهر ها و کشور ها از داکیومنت
let selectCity = document.querySelector('.form__select-cities');
let selectCountry = document.querySelector('.form__select-countries');

// ایجاد رویداد onchange
selectCountry.addEventListener('change', function () {
    let selectedCountryValue = selectCountry.value    //ذخیره ی نام کشور انتخاب شده
    let selectedCityValue = citiyOptions[selectedCountryValue]    //ذخیره ی شهرهای نام کشور انتخاب شده
    selectCity.innerHTML = ""
    // ایجاد اپشن ها
    selectedCityValue.forEach(city => {
        selectCity.innerHTML += "<option>" + city + "</option>"
    });
})
