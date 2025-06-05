//BUSCA UM ELEMENTO NO HTML E SALVA EM UMA VARIAVEL

let menu = document.getElementById("menu")
let IconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")


//FUNÇÂO QUE VAI ABRIR E FECHAR O MENU
function abreFechaMenu() {

    //SE O MENU ESTÁ FECHADO
    if (menu.classList.contains("menu-fechado")){

        //ABRIR O MENU
        menu.classList.remove("menu-fechado")

        //MOSTRA ICONE X
        iconeX.style.display = "inline"

        //ESCONDER O ICONE BARRAS
        iconeBarras.style.display = "none"
    }


    //SENÃO
    else {

        //FECHAR O MENU
        menu.classList.add("menu-fechado")

        //ESCONDER ICONE X
        iconeX.style.display = "none"

        //MOSTRAR ICONE BARRAS 
        iconeBarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")

    //MOSTRAR ICONE X 
    iconeX.style.display = "incline"

    //ESCONDER ICONE BARRAS
    iconeBarras.style.display = "none"
}