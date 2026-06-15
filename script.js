// 1. Banco de Dados dos vencedores com links de trailers do YouTube (Formato Embed)
const dadosJogos = [
    {
        titulo: "Baldur's Gate 3",
        ano: 2023,
        categoria: "Jogo do Ano",
        desenvolvedora: "Larian Studios",
        sinopse: "Um RPG de nova geração ambientado no universo de Dungeons & Dragons, onde suas escolhas moldam a história. Uma força antiga retornou a Baldur's Gate, pretendendo devorá-la de dentro para fora. O destino de Faerûn está em suas manos. Sozinho, você pode resistir... mas juntos, vocês podem triunfar.",
        imagem: "https://i.imgur.com/vHqJbYy.jpeg",
        trailer: "https://www.youtube.com/embed/1T22S_Ed8fI" // Link do Trailer
    },
    {
        titulo: "Cyberpunk 2077: Phantom Liberty",
        ano: 2023,
        categoria: "Melhor RPG",
        desenvolvedora: "CD Projekt RED",
        sinopse: "Phantom Liberty é uma nova aventura de suspense de espionagem para Cyberpunk 2077. Quando a nave orbital da Presidente dos Novos Estados Unidos da América é abatida sobre o distrito mais mortal de Night City, há apenas uma pessoa que pode salvá-la: você. Torne-se V, um mercenário de aluguel cyberpunk.",
        imagem: "https://i.imgur.com/B9421tS.jpeg",
        trailer: "https://www.youtube.com/embed/KfBc_60wU84"
    },
    {
        titulo: "Elden Ring",
        ano: 2022,
        categoria: "Jogo do Ano",
        desenvolvedora: "FromSoftware",
        sinopse: "Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias. Um mundo aberto massivo cheio de mistérios, masmorras colossais, perigos e batalhas épicas criado por Hidetaka Miyazaki e George R.R. Martin.",
        imagem: "https://i.imgur.com/S7W79iU.jpeg",
        trailer: "https://www.youtube.com/embed/E3Huy2cdih0"
    },
    {
        titulo: "Stray",
        ano: 2022,
        categoria: "Melhor Jogo Indie",
        desenvolvedora: "BlueTwelve Studio",
        sinopse: "Perdido, ferido e sozinho, um gato de rua deve desvendar um mistério antigo para escapar de uma cibercidade há muito esquecida e encontrar o caminho de volta para casa. Veja o mundo através dos olhos de um felino e interaja com o ambiente de formas lúdicas.",
        imagem: "https://i.imgur.com/6U8Y3vS.jpeg",
        trailer: "https://www.youtube.com/embed/u84hRUQlaS4"
    },
    {
        titulo: "God of War Ragnarök",
        ano: 2022,
        categoria: "Melhor Jogo de Ação/Aventura",
        desenvolvedora: "Santa Monica Studio",
        sinopse: "O Fimbulwinter já está em underworld. Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma batalha profetizada que causará o fim do mundo. Nessa jornada, eles explorarão paisagens míticas impressionantes.",
        imagem: "https://i.imgur.com/E8w24m7.jpeg",
        trailer: "https://www.youtube.com/embed/hfJ4Km46A-0"
    },
    {
        titulo: "It Takes Two",
        ano: 2021,
        categoria: "Jogo do Ano",
        desenvolvedora: "Hazelight Studios",
        sinopse: "Embarque na jornada mais maluca da sua vida em It Takes Two, uma aventura de plataformas que dita as regras dos jogos cooperativos. Convide um amigo para jogar de graça com o Passe de Amigo e trabalhem juntos para superar uma variedade enorme de desafios alegremente disruptivos.",
        imagem: "https://i.imgur.com/pYI768G.jpeg",
        trailer: "https://www.youtube.com/embed/OHvKm8QJAQE"
    },
    {
        titulo: "The Last of Us Part II",
        ano: 2020,
        categoria: "Jogo do Ano",
        desenvolvedora: "Naughty Dog",
        sinopse: "Cinco anos após sua jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel encontram estabilidade em Jackson, Wyoming. Quando um evento violento interrompe essa paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar um encerramento.",
        imagem: "https://i.imgur.com/h5T3Q8p.jpeg",
        trailer: "https://www.youtube.com/embed/qQD_fU9M6Qk"
    },
    {
        titulo: "Final Fantasy VII Remake",
        ano: 2020,
        categoria: "Melhor RPG",
        desenvolvedora: "Square Enix",
        sinopse: "A espetacular reimaginação moderna de um dos RPGs mais icônicos de todos os tempos. O mundo caiu sob o controle da Shinra Electric Power Company, uma corporação sombria que controla a própria força vital do planeta. Cloud Strife junta-se ao grupo ecoterrorista Avalanche.",
        imagem: "https://i.imgur.com/fL3C9qF.jpeg",
        trailer: "https://www.youtube.com/embed/QLYyosA6Ieo"
    },
    {
        titulo: "Sekiro: Shadows Die Twice",
        ano: 2019,
        categoria: "Jogo do Ano",
        desenvolvedora: "FromSoftware",
        sinopse: "Explore o Japão do final do século XVI no período Sengoku, um período brutal de constante conflito de vida ou morte. No papel do 'lobo caolho', um guerreiro desfigurado e resgatado do limiar da morte, você deve proteger um jovem lorde e buscar vingança contra seus arqui-inimigos.",
        imagem: "https://i.imgur.com/p6978G6.jpeg",
        trailer: "https://www.youtube.com/embed/rXMX4Y57Lks"
    },
    {
        titulo: "God of War",
        ano: 2018,
        categoria: "Jogo do Ano",
        desenvolvedora: "Santa Monica Studio",
        sinopse: "Sua vingança contra os deuses do Olimpo ficou para trás, Kratos agora vive como um homem comum no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho Atreus a fazer o mesmo.",
        imagem: "https://i.imgur.com/uCg6pYv.jpeg",
        trailer: "https://www.youtube.com/embed/K0u_kAWLJOA"
    },
    {
        titulo: "The Legend of Zelda: Breath of the Wild",
        ano: 2017,
        categoria: "Jogo do Ano",
        desenvolvedora: "Nintendo",
        sinopse: "Após um sono de 100 anos, Link acorda sozinho em um mundo que ele não lembra mais. Agora, o herói lendário deve explorar uma vasta terra arruinada para recuperar suas memórias e salvar Hyrule antes do retorno iminente de Calamity Ganon.",
        imagem: "https://placehold.co/400x600/0f172a/ffffff?text=Zelda+BOTW",
        trailer: "https://www.youtube.com/embed/zw47_q9wb_8"
    },
    {
        titulo: "The Witcher 3: Wild Hunt",
        ano: 2015,
        categoria: "Jogo do Ano",
        desenvolvedora: "CD Projekt RED",
        sinopse: "Torne-se Geralt de Rívia, um caçador de monstros profissional contratado para encontrar a criança da profecia, Ciri, uma arma viva capaz de alterar a forma do mundo. Viaje por reinos devastados pela guerra enfrentando inimigos humanos e feras mitológicas.",
               trailer: "https://www.youtube.com/watch?v=zjstvFw6ap8"
    }
];

// Seleção de elementos do HTML
const gridJogos = document.getElementById('gridJogos');
const inputBusca = document.getElementById('inputBusca');
const botoesFiltros = document.querySelectorAll('.btn-filtro');

// Elementos da Janela Modal (Mudamos de modalImagem para o container do Trailer)
const modal = document.getElementById('modalJogo');
const btnFecharModal = document.querySelector('.fechar-modal');
const modalTrailerContainer = document.getElementById('modalImagem'); // Mantido o ID original para não quebrar seu HTML, mas ele vai conter o iframe agora
const modalCategoria = document.getElementById('modalCategoria');
const modalTitulo = document.getElementById('modalTitulo');
const modalInfo = document.getElementById('modalInfo');
const modalSinopse = document.getElementById('modalSinopse');

// Função para exibir os cards (Mantém os cards com imagem de capa na tela principal)
function exibirJogos(listaDeJogos) {
    gridJogos.innerHTML = "";

    if (listaDeJogos.length === 0) {
        gridJogos.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 20px;">Nenhum jogo encontrado.</p>`;
        return;
    }

    listaDeJogos.forEach(jogo => {
        const card = document.createElement('div');
        card.classList.add('card-jogo');
        card.style.cursor = "pointer"; 

        const snippet = jogo.sinopse.length > 95
            ? jogo.sinopse.slice(0, jogo.sinopse.lastIndexOf(' ', 95)) + '...'
            : jogo.sinopse;

        card.innerHTML = `
            <img class="card-imagem" src="${jogo.imagem}" alt="Capa de ${jogo.titulo}" loading="lazy"
                 onerror="this.onerror=null; this.src='https://placehold.co/400x600/1a1a1a/ffffff?text=Imagem+Indisponivel';">
            <div class="card-conteudo">
                <span class="tag-categoria">${jogo.categoria}</span>
                <h3>${jogo.titulo}</h3>
                <div class="info-extra">${jogo.ano} • ${jogo.desenvolvedora}</div>
                <p>${snippet}</p>
            </div>
        `;

        card.addEventListener('click', () => abrirModal(jogo));
        gridJogos.appendChild(card);
    });
}

// Lógica para abrir a Modal e carregar o Vídeo
function abrirModal(jogo) {
    // Substitui o conteúdo da área da imagem por um Iframe do YouTube
    modalTrailerContainer.innerHTML = `
        <iframe 
            width="100%" 
            height="315" 
            src="${jogo.trailer}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>`;

    modalCategoria.textContent = jogo.categoria;
    modalTitulo.textContent = jogo.titulo;
    modalInfo.textContent = `${jogo.ano} • ${jogo.desenvolvedora}`;
    modalSinopse.textContent = jogo.sinopse;

    modal.classList.add('visivel');
}

// Lógica para fechar a Modal (E parar o som do vídeo!)
function fecharModal() {
    modal.classList.remove('visivel');
    modalTrailerContainer.innerHTML = ""; // Limpa o iframe para o trailer parar de tocar
}

btnFecharModal.addEventListener('click', fecharModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});

// Sistema de Filtragem
function filtrarJogos() {
    const botaoAtivo = document.querySelector('.btn-filtro.ativo');
    const categoriaSelecionada = botaoAtivo ? botaoAtivo.getAttribute('data-categoria') : "todos";
    const termoBusca = inputBusca.value.toLowerCase();

    const jogosFiltrados = dadosJogos.filter(jogo => {
        const bateCategoria = (categoriaSelecionada === "todos" || jogo.categoria === categoriaSelecionada);
        const bateTexto = jogo.titulo.toLowerCase().includes(termoBusca) ||
                          jogo.desenvolvedora.toLowerCase().includes(termoBusca) ||
                          jogo.categoria.toLowerCase().includes(termoBusca);
        return bateCategoria && bateTexto;
    });

    exibirJogos(jogosFiltrados); 
}

// Eventos dos botões de filtro
botoesFiltros.forEach(botao => {
    botao.addEventListener('click', () => {
        botoesFiltros.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
        filtragemJogos();
    });
});

// Evento de busca
inputBusca.addEventListener('input', filtrarJogos);

// Inicializa o site carregando todos os dados
exibirJogos(dadosJogos);
