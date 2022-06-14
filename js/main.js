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
