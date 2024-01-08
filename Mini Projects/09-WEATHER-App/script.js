// API Key
const API_KEY = "fecda54247e6eb3c2d7d5a30771b277e";

// Tab Switching

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-SearchWeather]");

const userContainer = document.querySelector(".weather-container"); //

const grantAccessContainer = document.querySelector(
  ".grant-location-container"
);

const searchForm = document.querySelector("[data-searchform]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

// Error Handling Variable 404 Error
const notFound = document.querySelector(".errorContainer");
const errorBtn = document.querySelector("[data-errorButton]");
const errorText = document.querySelector("[data-errorText]");
const errorImage = document.querySelector("[data-errorImg]");

// initially variable needs??
/* 
1. API Key 
2. current tab
3. 
4. 
*/

let oldTab = userTab;
oldTab.classList.add("current-tab");
getformSesstionStorage();

// ek kaam or pending hai ??

// switch tab function when user stand in user tab then after he clicked on search tab

// Tab Switching

function switchTab(newTab) {
  if (newTab != oldTab) {
    oldTab.classList.remove("current-tab");
    oldTab = newTab;
    oldTab.classList.add("current-tab");

    // Check which TAb is Selected - search / your

    // If Search Form not contains active class then add  [Search Weather]
    if (!searchForm.classList.contains("active")) {
      // kya search form wala container is invisible, if yes then make it visible
      userInfoContainer.classList.remove("active");
      grantAccessContainer.classList.remove("active");
      searchForm.classList.add("active");
    }
    // Your Weather
    else {
      // main phele search wale tab pr tha, ab your weather tab visible krna hn
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");

      // ab main your weather tab me aaya hu, toh weather bhi display krna padega, so let's check local storage first
      // for coordinates, if we haved saved them there.
      getformSesstionStorage();
    }
  }
}

userTab.addEventListener("click", () => {
  // pass clicked tab as input parameter
  switchTab(userTab);
});

searchTab.addEventListener("click", () => {
  // pass clicked tab as input parameter
  switchTab(searchTab);
});

// check if coordinates are already present in session storage

function getformSesstionStorage() {
  const localCoordinates = sessionStorage.getItem("user-coordinates");

  // Local Coordinates Not present - Grant Access Container
  if (!localCoordinates) {
    // agar local coordinates nhi mile
    grantAccessContainer.classList.add("active");
  } else {
    const coordinates = JSON.parse(localCoordinates);
    fetch_UserWeatherInfo(coordinates);
  }
}

async function fetch_UserWeatherInfo(coordinates) {
  const { lat, lon } = coordinates;

  // Remove Active Class from the Grant access Container
  // make grantcontainer invisible
  grantAccessContainer.classList.remove("active");
  // loading
  // make loader visible
  loadingScreen.classList.add("active");

  // API Call
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    loadingScreen.classList.remove("active");

    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (err) {
    loadingScreen.classList.remove("active");
    // Home work
    notFound.classList.add("active");
    errorImage.style.display = "none";
    errorText.innerText = `Error: ${err?.message}`;
    errorBtn.style.display = "block";
    errorBtn.addEventListener("click", fetch_UserWeatherInfo);
  }
}

// Render Weather On UI
function renderWeatherInfo(weatherInfo) {
  // firstly, we have to fetch the element
  const cityName = document.querySelector("[data-cityName]");
  const countryIcon = document.querySelector("[data-countryIcon]");
  const description = document.querySelector("[data-weatherDesc]");
  const weatherIcon = document.querySelector("[data-weatherIcon]");

  const temp = document.querySelector("[data-temp]");
  const windspeed = document.querySelector("[data-windspeed]");
  const humidity = document.querySelector("[data-humidity]");
  const cloudiness = document.querySelector("[data-cloudiness]");

  // fetch values form weather Info Object and put it UI elements
  cityName.innerText = weatherInfo?.name;

  countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;

  description.innerText = weatherInfo?.weather?.[0]?.description;

  weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;

  temp.innerText = `${weatherInfo?.main?.temp} °C`;

  windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;

  humidity.innerText = `${weatherInfo?.main?.humidity} %`;

  cloudiness.innerText = `${weatherInfo?.clouds?.all} %`;
}

const grantAccessButton = document.querySelector("[data-grantAccess]");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  //
  else {
    // HW - show an alert for no geolocation support available
    grantAccessButton.style.display = "none";
  }
}

function showPosition(position) {
  const userCoordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };
  //
  sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
  fetch_UserWeatherInfo(userCoordinates);
}

grantAccessButton.addEventListener("click", getLocation);

// Search for weather
const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let cityName = searchInput.value;

  if (cityName === "") {
    return;
  } else {
    fetch_SearchWeatherInfo(cityName);
    cityName = "";
  }
});

async function fetch_SearchWeatherInfo(city) {
  loadingScreen.classList.add("active");

  userInfoContainer.classList.remove("active");

  grantAccessContainer.classList.remove("active");

  notFound.classList.remove("active");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    loadingScreen.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (err) {
    // HW
    loadingScreen.classList.remove("active");
    userInfoContainer.classList.remove("active");

    notFound.classList.add("active");
    errorText.innerText = `${err?.message}`;
    errorBtn.style.display = "none";
  }
}
