const tl = gsap.timeline({ defaults: { opacity: 0, easy: "back" } });
tl.from("#demo", { easy: "linear" })
  .from(".title", { x: 80 })
  .from(".subtitle", { x: -80 })
  .from(".text", { y: 30 })
  .from(".myButton", { y: 30 })
  .from("#items > g", { scale: 0, stagger: 0.3, transformOrigin: "50% 50%" })