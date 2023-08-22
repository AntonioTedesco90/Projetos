function domLoaded() {
    const formulario = document.getElementById('login-form');
    // Adiciona um ouvinte de evento para o evento de envio do formulário
    formulario.addEventListener('submit', function (event) {
        // Impede o envio padrão do formulário
        event.preventDefault();
        const senha1 = document.getElementById("senha1").value
        const senha2 = document.getElementById("senha2").value
        if (senha1 != senha2) {
            alert("Invalid passwords")
        }
        const cpf = document.getElementById("cpf").value
        if (cpf) {
            alert("Invalid CPF")
            
        function validaDados() {
            var cpf = document.getElementById("cpf").value;
            if (validaCpf(cpf))
                alert("CPF válido");
            else
                alert("CPF inválido");
        }
        }
        else {
            window.location.href = "./index.html"
        }

    });
}
function validaCpf(strCPF) {
    var Soma = 0;
    var Resto;
    if (strCPF == "00000000000") return false;
    for (var i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;
    Soma = 0;
    for (var i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

function validaDados() {
    var cpf = document.getElementById("cpf").value;
    if (validaCpf(cpf))
        alert("CPF válido");
    else
        alert("CPF inválido");
}