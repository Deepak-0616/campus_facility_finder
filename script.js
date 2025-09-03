
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";  
  cursor.style.left = e.clientX + "px"; 
});


const hoverables = document.querySelectorAll("a, button");

hoverables.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

