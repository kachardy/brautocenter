// Configuração do Observador
const observerOptions = {
    root: null, // usa a viewport do navegador como referência
    rootMargin: '0px',
    threshold: 0.15 // o elemento será revelado quando 15% dele estiver visível
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe que dispara a animação CSS
            entry.target.classList.add('active');

            // Opcional: para a animação acontecer apenas uma vez, 
            // paramos de observar o elemento após ele ser revelado
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleciona todos os elementos que têm a classe 'reveal' e começa a observar
document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    
    // Define um tempo mínimo de 1.5 segundos para o cliente ver sua marca
    setTimeout(() => {
        preloader.classList.add("vazio");
    }, 1500);
});