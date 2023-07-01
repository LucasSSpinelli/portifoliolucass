alert('++Advice++, Site em desinvolvimento, entre em contato para sugestões')

document.getElementById("botao").addEventListener("click", function() {
    var senha = document.getElementById("senha").value;
    // Aqui você pode adicionar a lógica para verificar a senha

    // Se a senha for válida, redirecione para outra página
    if (senha === "podecontratar") {
        window.location.href = "/workspaces/portifoliolucass/home.html";
    } else {
        alert("Senha incorreta!");
    }
});
