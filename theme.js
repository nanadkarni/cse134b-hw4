const toggleButton = document.getElementById("toggle-theme");

function themeToggle() {
    if (document.documentElement.dataset["theme"] === "light") {
        document.documentElement.dataset["theme"] = "spooky";
        localStorage.setItem("theme", "spooky");
        return;
    }
    document.documentElement.dataset["theme"] = "light";
    localStorage.setItem("theme", "light");
}

function showToggle() {
    toggleButton.hidden = false;
    let currTheme = localStorage.getItem("theme");
    if (!currTheme) {
        currTheme = "light";
    }
    document.documentElement.dataset["theme"] = currTheme;
}

showToggle();
toggleButton.addEventListener("click", themeToggle);
