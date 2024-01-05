const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-SearchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(
  ".grant-location-container"
);

const searchForm = document.querySelector("[data-searchform]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

// initially variable needs??
/* 
1. API Key 
2. current tab
3. 
4. 
*/

let currentTab = userTab;
const API_Key = "fecda54247e6eb3c2d7d5a30771b277e";
currentTab.classList.add(".current-tab");

// ek kaam or pending hai ??



