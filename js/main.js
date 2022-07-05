let myBtn = document.querySelector(".slider");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
};

myBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "Images/moon.png";
  } else {
    icon.src = "Images/sun.png";
  }
};
