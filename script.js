const dataInicio = new Date(2025, 6, 13); 

function atualizarContador() {
    const hoje = new Date();
    
    let diferenca = hoje - dataInicio;

    const umDia = 1000 * 60 * 60 * 24;
    const umMes = umDia * 30.44; 

    const meses = Math.floor(diferenca / umMes);
    diferenca -= meses * umMes;
    const dias = Math.floor(diferenca / umDia);

    document.getElementById('meses').innerText = meses;
    document.getElementById('dias').innerText = dias;
}

atualizarContador();
