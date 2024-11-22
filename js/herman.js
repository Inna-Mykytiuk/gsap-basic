const hole = document.querySelector(".hole");
const herman = document.querySelector(".herman");

const tl = gsap
  .timeline()
  .from(hole, { scale: 0, repeat: 1, yoyo: true })
  .fromTo(herman, { y: 110 }, { y: -175 }, 0.2)
  .to(herman, { y: 0, easy: "power1.in" }, ">");
