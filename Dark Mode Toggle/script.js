let isDark = false;

const btn=document.getElementById("toggle");

btn.addEventListener("click", () => {
    //document.body.classList.toggle("dark"); toggle(on/off)
  if (!isDark) {
    document.body.classList.add("dark");
    isDark = true;
  } else {
    document.body.classList.remove("dark");
    isDark = false;
  }
});
