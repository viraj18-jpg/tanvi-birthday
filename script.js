document.querySelectorAll(".btn").forEach(function (button) {

  button.addEventListener("click", function () {

    for (let i = 0; i < 8; i++) {

      const heart = document.createElement("span");

      heart.textContent = Math.random() > 0.5 ? "♥" : "✦";

      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "80vh";
      heart.style.color = "#ff9fcf";
      heart.style.fontSize = (12 + Math.random() * 18) + "px";
      heart.style.zIndex = "20";
      heart.style.pointerEvents = "none";

      heart.style.animation =
        "rise " + (2 + Math.random() * 2) + "s linear forwards";

      document.body.appendChild(heart);

      setTimeout(function () {
        heart.remove();
      }, 4500);
    }

  });

});
