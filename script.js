// Interactive Cart
let cartCount = 0;
const cartBtn = document.getElementById("cart-btn");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartBtn.textContent = `🛒 Cart (${cartCount})`;

    // Fun animation
    cartBtn.classList.add("bump");
    setTimeout(() => cartBtn.classList.remove("bump"), 300);
  });
});

// Simple scroll-to-top button (optional extra)
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆️";
scrollBtn.id = "scroll-top";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#ff914d";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
