const hole = document.querySelector(".hole");
const herman = document.querySelector(".herman");
const shadow = document.querySelector(".shadow");
const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 0.5 });

tl.from(hole, { scale: 0, repeat: 1, yoyo: true })
  .fromTo(herman, { y: 160, scaleY: 2 }, { y: -175, scaleY: 1 }, 0.2)
  .to(herman, { y: -4, easy: "power1.in" }, ">")
  .to(herman, {
    scaleY: 0.9,
    scaleX: 1.3,
    transformOrigin: "50% 100%",
    repeat: 1,
    yoyo: true,
    duration: 0.2,
  })
  .to(shadow, { opacity: 1, duration: 0.2 }, 0.7)
  .to(shadow, { scaleX: 0.5, easy: "power1.in" }, ">");
