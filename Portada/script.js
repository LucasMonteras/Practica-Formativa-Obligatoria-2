const cards = document.querySelectorAll(".access-card");

cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 90}ms`;
  card.classList.add("is-visible");
});
