const maincontainer = document.querySelector(".maincard");
const thankyucontainer = document.querySelector(".rating_section");
const submitbutton = document.getElementById("submitme");
const rate = document.getElementById("rate");
const tap = document.querySelectorAll(".btn");

submitbutton.addEventListener("click", () => {
  thankyucontainer.classList.remove("hidden");
  maincontainer.classList.add("hidden");
});

tap.forEach((eater) => {
  eater.addEventListener("click", () => {
    rate.innerHTML = eater.innerHTML;
  });
});
