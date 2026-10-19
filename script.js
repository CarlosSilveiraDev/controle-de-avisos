// Controle de Avisos - JavaScript
// Etapa 1: troca de perfil

const botoesPerfil = document.querySelectorAll(".perfis button");
const tituloLista = document.getElementById("titulo-lista");

// Título da lista para cada perfil
const TITULOS = {
  criador: "Avisos",
  aprovador: "Avisos aguardando aprovação",
  dest: "Meus avisos"
};

// Quando clicar em um botão de perfil:
botoesPerfil.forEach(function (botao) {
  botao.addEventListener("click", function () {
    // 1) tira a marcação de todos e marca só o botão clicado
    botoesPerfil.forEach(function (b) {
      b.classList.remove("ativo");
    });
    botao.classList.add("ativo");

    // 2) troca o título da lista
    tituloLista.textContent = TITULOS[botao.dataset.perfil];
  });
});