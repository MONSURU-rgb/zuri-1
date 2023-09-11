const timeElement = document.querySelector("#UTCtime");

function updateUTCTime() {
  const currentTimeMilliseconds = new Date().getTime();
  timeElement.innerHTML = currentTimeMilliseconds;
}

setInterval(updateUTCTime, 1000);

const getDay = document.querySelector("#day");

function updateDay() {
  const currentDay = new Date().getDay();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayName = dayNames[currentDay];
  getDay.innerHTML = currentDayName;
  lastDay = currentDay; // Update the last recorded day
}

setInterval(updateDay, 1000);
