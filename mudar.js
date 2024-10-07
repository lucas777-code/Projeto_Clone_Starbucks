// primeira parte Habilitado/Desabilitado
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var links = document.querySelector('.links');
    // troca o estado da classe .toggle para ativo
    menuToggle.classList.toggle('active')
    // troca o estado da classe .links para ativo 
    links.classList.toggle('active')
}