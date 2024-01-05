document.addEventListener("DOMContentLoaded", function () {
    // Get the category button element
    const hots = document.getElementById("hots");
    const spots = document.getElementById("spots");
  
    hots.addEventListener("click", function () {
      window.location.href = '/pages/events.html';
    });

    spots.addEventListener("click", function () {
        window.location.href = '/pages/category.html';
      });
  });