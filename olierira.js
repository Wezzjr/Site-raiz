function Sim(){
  alert("Ok, vamos no fim de semana");
}
function desvia(t){
    var btn = t
    btn.style.position = "absolute";
    btn.style.bottom = geraPosicao(10,90)
    btn.style.left = geraPosicao(0,100)
    console.log("opa, muito fraca")
}

    function geraPosicao(min, max) {
  return (Math.random()) * (max - min) + min + "%";
}
