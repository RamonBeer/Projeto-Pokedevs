const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto");

        const idPokedevSelecionado = pokedev.attributes.id.value;
        const idCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
        const cartaoPokedevParaAbrir = document.getElementById(idCartaoPokedevParaAbrir);
        cartaoPokedevParaAbrir.classList.add("aberto");

        const pokedevAtivoListagem = document.querySelector(".ativo")
        pokedevAtivoListagem.classList.remove("ativo")

        const pokedevSelecionadoListagem = document.getElementById(idPokedevSelecionado);
        pokedevSelecionadoListagem.classList.add("ativo")
    })
})