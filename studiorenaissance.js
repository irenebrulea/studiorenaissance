document.addEventListener("DOMContentLoaded", function(){ // serve ad aspettare il totale caricamento del HTML prima di eseguire il codice sotto
    let stato = false;
    document.getElementById("openMenuButtom").addEventListener("click",function(){// preparati all'evento click dell'elemento con ID open menu button ed esegue il codice all'interno di function quando il bottone viene premuto
        stato = !stato;
        let menu=document.getElementById("menuScomparsa")
        if(stato===false)// se lo stato è false il menu deve scomparire
        {
         menu.classList.add("hide");
         menu.classList.remove("show")
        }else{
            menu.classList.remove("hide");
            menu.classList.add("show")
        }

    })

})