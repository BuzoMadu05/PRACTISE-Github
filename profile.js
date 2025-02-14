document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    // Create a theme switcher button
    const themeSwitcher = document.createElement("button");
    themeSwitcher.textContent = "Switch Theme";
    themeSwitcher.classList.add("theme-button");
    document.body.insertBefore(themeSwitcher, document.body.firstChild);

    // Theme options
    const themes = ["default", "dark-mode", "vibrant-mode", "glass-mode"];
    let currentThemeIndex = 0;

    themeSwitcher.addEventListener("click", function () {
        // Remove previous theme
        body.classList.remove(...themes);
        
        // Apply the next theme
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        body.classList.add(themes[currentThemeIndex]);
        
        // Update button text
        themeSwitcher.textContent = `Switch Theme (${themes[currentThemeIndex]})`;
    });
});
