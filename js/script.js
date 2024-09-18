document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const image = toggleButton.querySelector('img');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);
    updateImage(currentTheme);

    toggleButton.addEventListener('click', (e) => {
        e.preventDefault();
        let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateImage(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    function updateImage(theme) {
        if (theme === 'dark') {
            image.src = 'img/dark.svg'; // Imagem para o tema escuro
            image.alt = 'Tema Escuro';
        } else {
            image.src = 'img/light.png'; // Imagem para o tema claro
            image.alt = 'Tema Claro';
        }
    }
});
