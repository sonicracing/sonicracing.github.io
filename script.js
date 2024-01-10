document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".fade");
  let currentPhotoIndex = 0;

  function showNextPhoto() {
    photos[currentPhotoIndex].style.display = "none";
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photos[currentPhotoIndex].style.display = "block";
  }

  // Initial setup
  photos[currentPhotoIndex].style.display = "block";

  // Automatically switch photos every 5 seconds (adjust as needed)
  setInterval(showNextPhoto, 4000);
});

/* Existing JavaScript remains unchanged */

function redirectToListenLive() {
  // Replace 'your_listen_live_url' with the actual URL you want to redirect to
  window.location.href = "listenlive.html";
}
