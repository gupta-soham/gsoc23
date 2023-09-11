const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");

    // Store user's preference for light/dark theme
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Check the user's preference for light/dark theme from previous visits
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
} else {
    body.classList.add("light-theme");
}
