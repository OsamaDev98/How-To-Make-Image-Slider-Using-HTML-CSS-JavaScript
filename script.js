const wrapper = document.querySelector(".wrapper");
const icons = document.querySelectorAll(".icon");
const firstCard = document.querySelectorAll(".card")[0];

let cardWidth = firstCard.clientWidth + 10; // Card width + gap between cards

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    wrapper.scrollLeft += icon.id == "left" ? -cardWidth : cardWidth;
  });
});
