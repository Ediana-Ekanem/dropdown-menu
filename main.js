const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const btnText = selectBtn.querySelector(".text");

selectBtn.addEventListener("click", () => {
  optionMenu.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedText = option.querySelector(".text").textContent;
    btnText.textContent = selectedText;
    optionMenu.classList.remove("active");
  });
});
