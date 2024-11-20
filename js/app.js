const tl = gsap.timeline({ defaults: { autoAlpha: 0, easy: "back" } });

function init() {
  tl.from("#demo", { easy: "linear" })
    .from(".title", { x: 80 })
    .from(".subtitle", { x: -80 }, "<")
    .from(".text", { y: 30 }, "-=0.2")
    .from(".myButton", { y: 50 }, "-=0.4")
    .from("#items > g", { scale: 0, stagger: 0.3, transformOrigin: "50% 50%" }, "-=0.5");
}

window.addEventListener("load", function (event) {
  init();
});