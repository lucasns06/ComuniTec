document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const select = document.getElementById('cor-select');
    const image1 = document.getElementById('ImgLogo'); 
    const image2 = document.getElementById('ImgTheme'); 
    const image3 = document.getElementById('iconMissao');
    const image4 = document.getElementById('iconBandeira'); 
    const image6 = document.getElementById('gifHome');
    const image7 = document.getElementById('imgPhone');
    const image8 = document.getElementById('configId');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Aplica o tema armazenado ou o padrão (claro)
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
            // Verifica se cada imagem existe antes de modificar
            if (image1) {
                image1.src = 'img/logoGifDark.gif'; 
                image1.alt = 'Tema Gif Escuro';
            }
            if (image2) {
                image2.src = 'img/dark.svg'; 
                image2.alt = 'Tema Escuro Logo';
            }
            if (image3) {
                image3.src = 'img/missaoDark.svg';
                image3.alt = "Tema Escuro missao";
            }
            if (image4) {
                image4.src = "img/bandeiraDark.svg";
                image4.alt = "Tema Bandeira Ecuro";
            }
            if (image6) {
                image6.src = "img/smart.gif";
                image6.alt = "Tema gif Escuro";
            }
            if (image7) {
                image7.src = "img/smartphone.svg";
                image7.alt = "Tema phone Escuro";
            }
            if (image8) {
                image8.src = "img/config.png";
                image8.alt = "Tema config Escuro";
            }
        } else {
            if (image1) {
                image1.src = 'img/logoGifLight.gif'; 
                image1.alt = 'Tema Gif Claro 1';
            }
            if (image2) {
                image2.src = 'img/light.png';
                image2.alt = 'Tema Claro 2';
            }
            if (image3) {
                image3.src = "img/missaoLight.svg";
                image3.alt = "Tema missao Claro";
            }
            if (image4) {
                image4.src = "img/bandeiralight.svg";
                image4.alt = "Tema bandeira Claro";
            }
            if (image6) {
                image6.src = "img/smartLight.gif";
                image6.alt = "Tema gif Claro";
            }
            if (image7) {
                image7.src = "img/smartphoneLight.svg";
                image7.alt = "Tema phone Claro";
            }
            if (image8) {
                image8.src = "img/configLight.png";
                image8.alt = "Tema config claro";
            }
        }
    }
    // Carrega a cor salva do localStorage
    const corSalva = localStorage.getItem('corDestaque');
    if (corSalva) {
        document.documentElement.style.setProperty('--cor-destaque', corSalva);
        select.value = corSalva; // Define o valor selecionado
    }

    // Atualiza a cor de destaque e salva no localStorage
    select.addEventListener('change', (event) => {
        const novaCor = event.target.value;
        document.documentElement.style.setProperty('--cor-destaque', novaCor);
        localStorage.setItem('corDestaque', novaCor); // Salva a nova cor
    });
});
