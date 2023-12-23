const bookNowButtons = document.querySelectorAll(".book-now");
const paymentBox = document.querySelector(".payment-box");
const paymentOverlay = document.querySelector("#paymentOverlay");
const closeButton = document.querySelector(".close-button");

// Initially hide the box and overlay
paymentBox.style.display = "none";
paymentOverlay.style.display = "none";

bookNowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    paymentBox.style.display = "block"; // Show the box
    paymentOverlay.style.display = "block"; // Show the overlay
  });
});
closeButton.addEventListener("click", () => {
  paymentBox.style.display = "none"; // Hide the box
  paymentOverlay.style.display = "none"; // Hide the overlay
});
