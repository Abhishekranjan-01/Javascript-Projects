const mousePointer = document.querySelector("div");

window.addEventListener("mousemove", (e) => {
  //console.log(mousePointer.getBoundingClientRect());

  mousePointer.style.top = `${e.offsetY}px`;
  mousePointer.style.left = `${e.offsetX}px`;

  console.log(mousePointer.offsetHeight);

  //   document.write(e);
});
