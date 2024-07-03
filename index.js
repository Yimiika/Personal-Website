document.addEventListener("DOMContentLoaded", () => {
  const currentTimeUTC = document.getElementById("currentTimeUTC");
  const currentDay = document.getElementById("currentDay");

  function updateTime() {
    const now = new Date();
    const options = { weekday: "long" };
    currentTimeUTC.textContent = now.toUTCString().split(" ")[4];
    currentDay.textContent = now.toLocaleDateString("en-US", options);
  }

  setInterval(updateTime, 1000);
  updateTime();
});

function classToggle() {
  const navs = document.querySelectorAll(".navbar-links");

  navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}

document.querySelector(".Navbar-toggle").addEventListener("click", classToggle);
