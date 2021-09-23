var abrir_manual = document.querySelector(".c");
var abrir_esp = document.querySelector(".a");
var abrir_info = document.querySelector(".b");
var menu_inicial = document.querySelector(".d")


abrir_esp.addEventListener("click", ir_pag_esp);
abrir_info.addEventListener("click", ir_pag_info);
abrir_manual.addEventListener("click", ir_pag_manual);
menu_inicial.addEventListener("click", voltar_menu)

function ir_pag_manual(){
    console.log("abriu");
    window.location.href = "manual.html";
}
function ir_pag_esp(){
    console.log("abriu");
    window.location.href = "theines.html";
}
function ir_pag_info(){
    console.log("abriu");
    window.location.href = "info.html";
}
function voltar_menu(){
    console.log("abriu");
    window.location.href = "index.html";
}