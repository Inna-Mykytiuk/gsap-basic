const tl = gsap.to(".listItemText", {
  backgroundImage:
    "linear-gradient(90deg, var(--left) 0%, var(--left) 100%, var(--right) 100%)",
  stagger: {
    each: 0.1,
    ease: "power2.out",
  },
});
