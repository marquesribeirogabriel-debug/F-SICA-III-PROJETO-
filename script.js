// Array com dicas dinâmicas sobre cultivo de morango
const dicas = [
    "Evite molhar as folhas e os frutos durante a rega para prevenir o aparecimento de fungos.",
    "O pH ideal do solo para o morangueiro deve ficar estritamente entre 5,5 e 6,5.",
    "Morangos precisam de pelo menos 6 horas de sol direto por dia para ficarem bem doces.",
    "Ao plantar, certifique-se de que a coroa da planta (onde saem as folhas) não fique enterrada.",
    "Colha os morangos pela manhã bem cedo, quando os frutos estão mais firmes e frios.",
    "A aplicação de cálcio ajuda a evitar que a ponta dos frutos fique preta e apodreça."
];

// Seleção dos elementos do DOM
const botaoDica = document.getElementById('btn-dica');
const textoDica = document.getElementById('texto-dica');

// Função para selecionar e exibir uma dica aleatória
function mostrarDica() {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    textoDica.textContent = dicas[indiceAleatorio];
}

// Ouvinte de evento para o clique do botão
botaoDica.addEventListener('click', mostrarDica);