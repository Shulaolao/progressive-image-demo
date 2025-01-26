document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector(".progressive img");
  const loading = document.querySelector(".loading");

  img.onload = function () {
    img.classList.add("loaded");
    loading.style.display = "none";
  };

  // Force load if cached
  if (img.complete) {
    img.onload();
  }
});
