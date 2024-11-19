const tl = gsap.timeline();
tl.from("#demo", { opacity: 0 })
  .from(".title", { x: 80, opacity: 0 })
  .from(".subtitle", { x: -80, opacity: 0 })
  .from(".text", { y: 30, opacity: 0 })
  .from(".myButton", { y: 30, opacity: 0 })
  .from("#items > g", { opacity: 0, scale: 0, stagger: 0.3, transformOrigin: "50% 50%" })