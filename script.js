// ❤️ Floating hearts (keep this)
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
setInterval(createHeart, 300);


// 😏 SMART NO BUTTON (FIXED)
window.onload = function () {
  const moveBtn = document.getElementById("move-random");

  if (moveBtn) {
    moveBtn.addEventListener("mouseenter", function () {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 50);

      moveBtn.style.position = "fixed";
      moveBtn.style.left = x + "px";
      moveBtn.style.top = y + "px";
    });
  }
};