// gsap.to(".fred", { x: 400, y: 200, scale: 3, rotation: 360, duration: 3 });

// gsap.fromTo(".fred", { x: 700, y: 400, opacity: 0 }, { x: 400, y: 200, scale: 3, duration: 3, opacity: 1 });

// gsap.to(".green", { x: 600, duration: 2, repeat: 1, yoyo: true });

// gsap.to(".green", { x: 600, duration: 2, easy: "bounce.inOut" });

//elastic, inOut (ANIM)

// gsap.to(".green", { x: 600, duration: 2, easy: "back" });

// gsap.to(".pink", { x: 600, duration: 2, easy: "linear" });

//stagger-відповідає за затримку анімації між елементами в одному контейнері

// gsap.to("#freds img", { y: -100, stagger: 0.5 });

// gsap.to("#freds img", {
//   y: -100, stagger: {
//     //кожна запускається через 0.3
//     each: 0.3,
//     //вся анімація має відбутися за 1 секунду
//     // amount: 1,
//     //вказує на те, звідки починати анімацію (start, center, end,  edges)
//     from: "end"
//   }
// });

//Tween control
//play, pause, reverse, restart

// const tween = gsap.to(".green", {
//   x: 600,
//   duration: 3,
//   ease: "linear",
//   paused: true,
// });

// document.getElementById("play").onclick = () => tween.play();
// document.getElementById("pause").onclick = () => tween.pause();
// document.getElementById("reverse").onclick = () => tween.reverse();
// document.getElementById("restart").onclick = () => tween.restart();

//Circle button
const button = document.querySelector(".button");
const bg = document.querySelector(".bg");

//rollover the hover circle quickly
//notice the inner circle stops working properly
//try to fix it in the code below!

const tweenHover = gsap.fromTo(
  bg,
  { scale: 0, duration: 1 },
  { scale: 1, ease: "circ" }
);

button.addEventListener("mouseenter", function () {
  // gsap.fromTo(bg, { scale: 0, duration: 1 }, { scale: 1, ease: "circ" });

  tweenHover.restart();
});
