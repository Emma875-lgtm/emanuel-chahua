// Data da Gala
const dataEvento = new Date("September 13, 2026 18:30:00").getTime();

setInterval(() => {

    const agora = new Date().getTime();

    const diferenca = dataEvento - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferenca % (1000 * 60))
        / 1000
    );

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

},1000);

document.getElementById("formulario").addEventListener("submit", function(e){

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let acompanhantes = document.getElementById("acompanhantes").value;
    let mensagem = document.getElementById("mensagem").value;

    let texto = ` CONFIRMAÇÃO DE PRESENÇA 

👤 Nome: ${nome}
📞 Telefone: ${telefone}
👥 Número de acompanhantes: ${acompanhantes}
💬 Mensagem: ${mensagem}`;

    window.open("https://wa.me/244942745518", "_blank");

    setTimeout(() => {
        window.location.href = "localizacao.html";
    }, 2000);
});