$("#numeroAleatorio").html(5).css({color: "red"}).on("click", generaNumeroAleatorio);

function generaNumeroAleatorio(){
  var numeroAleatorio = Math.ceil(10 * Math.random());
  $("#numeroAleatorio").html(numeroAleatorio);
}