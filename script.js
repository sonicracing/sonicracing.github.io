var currentPhotoIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".fade");
  // Initial setup
  photos[currentPhotoIndex].style.display = "block";
});

//function for showing the next photo in slideshow
function showNextPhoto() {
  var photos = document.querySelectorAll(".fade");

  photos[currentPhotoIndex].style.display = "none";
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  photos[currentPhotoIndex].style.display = "block";
}
function showPrevPhoto() {
  var photos = document.querySelectorAll(".fade");
  photos[currentPhotoIndex].style.display = "none";

  currentPhotoIndex = (currentPhotoIndex - 1) % photos.length;
  if (currentPhotoIndex < 0) {
    currentPhotoIndex = photos.length - 1;
  }
  photos[currentPhotoIndex].style.display = "block";
}

// Automatically switch photos every 5 seconds (adjust as needed)
setInterval(showNextPhoto, 4000);

/* Existing JavaScript remains unchanged */

function redirectToListenLive() {
  // Replace 'your_listen_live_url' with the actual URL you want to redirect to
  window.location.href = "listenlive.html";
}

function ShowMobileMenu() {
  var mobmenu = document.getElementById("mobile-menu");

  if (mobmenu.style.display === "flex") {
    mobmenu.style.display = "none";
  } else {
    mobmenu.style.display = "flex";
  }
}
