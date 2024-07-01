// Abaixo eu declaro a varial pro JS usando o "let",
//Usando a função "getElementById('Nome do ID declarado no HTML')",
//Assim, a variavel do JS vai ter o valor da propriedade do ID do HTML.
let btnMenu = document.getElementById('btn-menu') 
let menu = document.getElementById('menu-mobile') 
let overlay = document.getElementById('overlay-menu')

//Abaixo eu crio um evento no valor de um "click", ou seja, quando eu clicar vai acontecer algo.
btnMenu.addEventListener('click', () =>{
    //Abaixo eu adicionei a classe "abrir-menu" como variavel para receber o evento.
    //No CSS eu configurei ela que ai clicar no menu da pagina, ela irá abrir.
    menu.classList.add('abrir-menu')
} )

//Abaixo eu crio outro evento no valor de click, ou seja, quando eu clicar vai acontecer algo.
menu.addEventListener('click', () =>{
    //Agora ao invés de "add" vai "remove", ou seja, quando clicar vai remover, de acordo declarado no CSS.
    menu.classList.remove('abrir-menu')
})


//Abaixo eu crio outro evento no valor de click, ou seja, quando eu clicar vai acontecer algo.
//No caso, agora se eu clicar no "overlay", também irá fechar de acordo declarado no CSS.
overlay.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})