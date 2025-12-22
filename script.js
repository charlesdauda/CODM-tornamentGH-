  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  
  const track = document.querySelector(".testimonial-track");
  const cards = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 30;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < cards.length - 3) {
      index++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  window.addEventListener("resize", updateSlider);

  
  const menuOpen = document.getElementById("menuOpen");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = mobileMenu.querySelectorAll("a");

  menuOpen.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  menuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  // CLOSE MENU & SCROLL ON LINK CLICK
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
