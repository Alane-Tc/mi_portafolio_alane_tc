const scroll = () => {
    let _button = document.querySelector("#btn-go-up");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        _button.style.display = "block";
        _button.classList.add('animate__animated', 'animate__backInUp')
    } else {
        _button.style.display = "none";
    }
}

window.onscroll = function () { scroll() };

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const filtroProyectos = () => {
    let select_Proyectos = document.querySelector('#filtro_proyectos')
    let div_proyectos_personales = document.querySelector('#proyectos_personales')
    let div_proyectos_freelancer = document.querySelector('#proyectos_freelancer')
    //let div_proyectos_diseño = document.querySelector('#proyectos_diseños')
    let div_principal = document.querySelector('#principal')

    if (select_Proyectos.value == 'proyectos_personales') {
        div_proyectos_personales.classList.add('mostrar', 'animate__animated', 'animate__slideInLeft')

        div_proyectos_freelancer.classList.add('ocultar')
        div_proyectos_freelancer.classList.remove('mostrar')
        //div_proyectos_diseño.classList.add('ocultar')
        //div_proyectos_diseño.classList.remove('mostrar')
        div_principal.classList.add('ocultar')
        div_principal.classList.remove('mostrar')

    } else if (select_Proyectos.value == 'proyectos_freelancer') {
        div_proyectos_freelancer.classList.add('mostrar', 'animate__animated', 'animate__slideInLeft')

        div_proyectos_personales.classList.add('ocultar')
        div_proyectos_personales.classList.remove('mostrar')
        //div_proyectos_diseño.classList.add('ocultar')
        //div_proyectos_diseño.classList.remove('mostrar')
        div_principal.classList.add('ocultar')
        div_principal.classList.remove('mostrar')
        // } else if (select_Proyectos.value == 'proyectos_diseño') {
        //     div_proyectos_diseño.classList.add('mostrar', 'animate__animated', 'animate__slideInLeft')

        //     div_proyectos_personales.classList.add('ocultar')
        //     div_proyectos_personales.classList.remove('mostrar')
        //     div_proyectos_freelancer.classList.add('ocultar')
        //     div_proyectos_freelancer.classList.remove('mostrar')
        //     div_principal.classList.add('ocultar')
        //     div_principal.classList.remove('mostrar')

        // } 

    } else {
        div_principal.classList.add('mostrar')
        div_principal.classList.remove('ocultar')
    }
}