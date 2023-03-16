function mudarMenu(){
    if(window.innerWidth >= 768){
        menuPrincipal.style.display = 'block';
    }else{
        menuPrincipal.style.display = 'none';
    }
}

function mostrarMenu(){
     menuPrincipal.style.display = 'flex';
}

function esconderMenu(){
    if(menuPrincipal.style.display == 'flex' && window.innerWidth <= 768){
        menuPrincipal.style.display = 'none';
    }
}