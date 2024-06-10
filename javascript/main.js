function esconderLinha(idLinha) {
    var linha = document.getElementById(idLinha);
    linha.style.display = 'none';
}
function voltarPagina() {
    window.history.back();
}
function goBack() {
    window.history.back();
}

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        const apiDataElement = document.getElementById('api');
        apiDataElement.innerHTML = `
            <h2>Título: ${data.title}</h2>
            <p>Conteúdo: ${data.body}</p>
        `;
    })
    .catch(error => console.error('Erro ao buscar dados da API:', error));

function showDiv(divNumber) {
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    
    document.getElementById(`div${divNumber}`).style.display = 'block';
}

