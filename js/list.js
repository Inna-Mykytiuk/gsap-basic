const items = document.querySelectorAll(".item");

gsap.defaults({ duration: 0.3 });

items.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector(".itemText"), {
      color: "white",
      x: 15,
      scale: 1.2,
      transformOrigin: "left center",
    })
    .to(item.querySelector(".dot"), { backgroundColor: "#f93", scale: 1.5 }, 0);

  item.addEventListener("mouseenter", function () {
    tl.play();
  });

  item.addEventListener("mouseleave", function () {
    tl.reverse();
  });
});
