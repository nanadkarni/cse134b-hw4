const toggleButton = document.getElementById("toggle-theme");

function themeToggle() {
    if (document.documentElement.dataset["theme"] === "light") {
        document.documentElement.dataset["theme"] = "spooky";
        try {
            localStorage.setItem('settings', JSON.stringify({theme: "spooky"}));
        } catch (error) {
            console.warn("The theme preference could not be saved.");
        }
        return;
    }
    document.documentElement.dataset["theme"] = "light";
    try {
        localStorage.setItem('settings', JSON.stringify({theme: "light"}));
    } catch (error) {
        console.warn("The theme preference could not be saved.");
    }
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
