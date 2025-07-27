document.addEventListener("DOMContentLoaded", () => {
  // Detect box ID based on page: loginBox or registerBox
  const loginBox = document.getElementById("loginBox");
  const registerBox = document.getElementById("registerBox");
  const box = loginBox || registerBox; // whichever exists

  if (box) {
    // Smoothly show the form box
    box.classList.remove("hidden");
    requestAnimationFrame(() => {
      box.classList.add("show");
    });
  }

  // Typing animation for heading
  const textEl = document.getElementById("typingText");
  if (textEl) {
    const originalText = textEl.textContent.trim();
    textEl.textContent = "";

    let index = 0;

    const smoothType = () => {
      if (index < originalText.length) {
        textEl.textContent += originalText.charAt(index);
        index++;

        const baseSpeed = 65;
        const wave = Math.sin(index * 0.3) * 25;
        const delay = baseSpeed + wave;

        setTimeout(smoothType, delay);
      } else {
        textEl.style.borderRight = "none";
      }
    };

    setTimeout(smoothType, 300);
  }
});
