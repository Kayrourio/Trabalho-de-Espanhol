var abrir_manual = document.querySelector(".c");
var abrir_esp = document.querySelector(".a");
var abrir_info = document.querySelector(".b");
var menu_inicial = document.querySelector(".d")


abrir_esp.addEventListener("click", ir_pag_esp);
abrir_info.addEventListener("click", ir_pag_info);
menu_inicial.addEventListener("click", voltar_menu)


function ir_pag_esp(){
    console.log("abriu");
    window.location.href = "manual.html";
}
function ir_pag_info(){
    console.log("abriu");
    window.location.href = "infoes.html";
}
function voltar_menu(){
    console.log("abriu");
    window.location.href = "index.html";
}