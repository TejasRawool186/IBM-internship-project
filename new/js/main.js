document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector('input[placeholder="Looking for something..."]');
  const searchButton = document.querySelector('button');

  searchButton.addEventListener("click", function () {
    const query = searchInput.value.trim();
    if (query) {
      alert("You searched for: " + query);
    } else {
      alert("Please enter something to search.");
    }
  });
});

// Contact form validation
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector('#contact form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent page reload

      const name = contactForm.querySelector('input[placeholder="Your Name"]').value.trim();
      const email = contactForm.querySelector('input[placeholder="Your Email"]').value.trim();
      const message = contactForm.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert("All fields are required.");
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Thank you for contacting us!");
      contactForm.reset(); // Clear the form
    });
  }
});
// Scroll to Top Button Logic
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

