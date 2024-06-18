const currentUrl = window.location.href;
const url = new URL(currentUrl);
const id = url.searchParams.get('id');

document.getElementById('voltar').onclick = () =>{
    window.location.href = 'jogadores.html';}



const content = document.getElementById('content')
const fetchData = async ()=>{
    try {
        const res = await fetch(`https://botafogo-atletas.mange.li/2024-1/${id}`)
        const jogador = await res.json()
        if (jogador.toString().includes("Não há atleta com o id")){
            const text = document.createElement('h1')
            text.textContent = jogador
            content.appendChild(text)
        }
        else{
            criaAtleta(jogador)
        }
    } catch (error) {
        console.error(error)
    }
}
const criaAtleta = (jogador) => {
    const atleta = document.createElement('div');

    const nome_atleta = document.createElement('h1');
    nome_atleta.textContent = jogador.nome;
    atleta.appendChild(nome_atleta);

    const img_atleta = document.createElement('img');
    img_atleta.src = jogador.imagem;
    atleta.appendChild(img_atleta);

    const elenco_atleta = document.createElement('p');
    elenco_atleta.textContent = `Elenco: ${jogador.elenco}`;
    atleta.appendChild(elenco_atleta);

    const n_jogos_atleta = document.createElement('p');
    n_jogos_atleta.textContent = `Número de jogos: ${jogador.n_jogos}`;
    atleta.appendChild(n_jogos_atleta);

    const posicao_atleta = document.createElement('p');
    posicao_atleta.textContent = `Posição: ${jogador.posicao}`;
    atleta.appendChild(posicao_atleta);

    const naturalidade_atleta = document.createElement('p');
    naturalidade_atleta.textContent = `Naturalidade: ${jogador.naturalidade}`;
    atleta.appendChild(naturalidade_atleta);

    const nascimento_atleta = document.createElement('p');
    nascimento_atleta.textContent = `Nascimento: ${jogador.nascimento}`;
    atleta.appendChild(nascimento_atleta);

    const altura_atleta = document.createElement('p');
    altura_atleta.textContent = `Altura: ${jogador.altura || 'Não disponível'}`;
    atleta.appendChild(altura_atleta);

    const no_botafogo_desde_atleta = document.createElement('p');
    no_botafogo_desde_atleta.textContent = `No Botafogo desde: ${jogador.no_botafogo_desde}`;
    atleta.appendChild(no_botafogo_desde_atleta);

    const detalhes_atleta = document.createElement('p');
    detalhes_atleta.textContent = `Detalhes: ${jogador.detalhes}`;
    atleta.appendChild(detalhes_atleta);

    const url_detalhes_atleta = document.createElement('a');
    url_detalhes_atleta.href = jogador.url_detalhes;
    url_detalhes_atleta.textContent = 'Mais detalhes';
    url_detalhes_atleta.target = '_blank';
    atleta.appendChild(url_detalhes_atleta);

    content.appendChild(atleta);
};

fetchData()