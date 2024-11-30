const lightMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    // toggles between default properties and class to light mode utility class
    themeToggleBtns.forEach((sunBtn) => {
        sunBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
    });
};
lightMode();
