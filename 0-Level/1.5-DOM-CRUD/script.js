const form = document.querySelector("form");

const closeOnSpan = (e) => {
  e.target.parentElement.parentElement.remove();
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const span = document.createElement("span");

  span.addEventListener("click", closeOnSpan);

  formData.forEach((value, key) => {
    console.log(key, value);

    const h4_1 = document.createElement("h4");

    h4_1.innerText = value;
    span.classList.add("spanStyle");
    span.innerText = "X";
    h4_1.append(span);

    li.append(h4_1);

    li.classList.add("liStyle");
    ul.append(li);
  });
  console.log("Submited");
});
