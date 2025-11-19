const btnTop = document.getElementById("btnTop");


window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
        btnTop.style.opacity = "1";
        btnTop.style.transform = "scale(1)";
    } else {
        btnTop.style.opacity = "0";
        btnTop.style.transform = "scale(0)";
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
