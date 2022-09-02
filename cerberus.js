function megaNavToggle() {
    var megaMenu = document.getElementById("megaNav");
    var morePlus = document.getElementById("morePlus");
    if (window.getComputedStyle(megaMenu).display === "none") {
        morePlus.textContent = "More -";
        morePlus.style.color = "#ff764d";
        megaMenu.style.display = "block";
    } else {
        morePlus.textContent = "More +";
        morePlus.style.color = "#ff764d";
        megaMenu.style.display = "none";
    }
}