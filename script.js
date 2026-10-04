const btn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");

btn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  btn.textContent = "A Little More Love 💗";
  btn.disabled = true;

  for (let i = 0; i < 18; i++) {
    const h = document.createElement("span");
    h.textContent = Math.random() > 0.5 ? "♥" : "✦";

    h.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: 80vh;
      color: #ff9fcf;
      font-size: ${12 + Math.random() * 18}px;
      z-index: 10;
      pointer-events: none;
      animation: rise ${2 + Math.random() * 2}s linear forwards;
    `;

    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4500);
  }
});

const style = document.createElement("style");

style.textContent = `
@keyframes rise {
  to {
    transform: translateY(-90vh) rotate(180deg);
    opacity: 0;
  }
}`;

document.head.appendChild(style);
