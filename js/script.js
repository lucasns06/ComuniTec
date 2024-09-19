document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const image1 = document.getElementById('ImgLogo'); 
    const image2 = document.getElementById('ImgTheme'); 
    const image3 = document.getElementById('iconMissao');
    const image4 = document.getElementById('iconBandeira'); 
    const image5 = document.getElementById('iconCoracao'); 
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);
    updateImages(currentTheme);

    toggleButton.addEventListener('click', (e) => {
        e.preventDefault();
        let newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateImages(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    function updateImages(theme) {
        if (theme === 'light') {
            image1.src = 'img/logoSoundDark.svg'; 
            image1.alt = 'Tema Escuro Theme';

            image2.src = 'img/dark.svg'; 
            image2.alt = 'Tema Escuro Logo';

            image3.src = 'img/missaoDark.svg';
            image3.alt = "Tema Escuro missao";

            image4.src = "img/bandeiraDark.svg";
            image4.alt = "Tema Bandeira Ecuro";

            image5.src = "img/coracaoDark.svg";
            image5.alt = "Tema valores Escuro";
            
        } else {
            image1.src = 'img/logoSound.png'; 
            image1.alt = 'Tema Claro 1';

            image2.src = 'img/light.png';
            image2.alt = 'Tema Claro 2';
        
            image3.src = "img/missaoLight.svg";
            image3.alt = "Tema missao Claro";

            image4.src = "img/bandeiralight.svg";
            image4.alt = "Tema bandeira Claro";

            image5.src = "img/coracaoLight.svg";
            image5.alt = "Tema valores Claro"; 
        }
    }
});
