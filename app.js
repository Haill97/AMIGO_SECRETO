let lista_nombres=[];
let nombre=0;
let ul=0;
let li=0;
let texto1="Escribe un nombre";
let bandera=0;



function agregarAmigo(){

            nombre=document.getElementById("amigo").value.trim();

                if(nombre!=""){
                    bandera=1;

                    lista_nombres.push(nombre);
                    ul=document.getElementById("listaAmigos");
                    document.getElementById("amigo").value="";
                    mostrarLista(ul,nombre,bandera);

                    //llamamos a la funcion limpiar y le pasamos el argumento bandera y el ul
                    limpiar(bandera);
                
                }
            
           else{

            alert(texto1);
           }

}

function sortearAmigo(){

    

    let maximo=lista_nombres.length;
    
    if(maximo>0){
        bandera=0;
    sorteado=Math.floor(Math.random()*maximo);

    let nombre_sorteado=lista_nombres[sorteado];
    
    ul=document.getElementById("resultado");

    mostrarLista(ul,nombre_sorteado,bandera);

    //llamamos a la funcion limpiar y le pasamos el argumento bandera y el ul
    limpiar(bandera);

    }

    else{
        alert(texto1);
    }

    
}

function mostrarLista(ul,nombre){

    // de esta manera agregamemos texto a una ul
    li=document.createElement("li");
    let text=document.createTextNode(nombre);
    li.appendChild(text);
    ul.appendChild(li);

    

}

function limpiar(bandera){

  // verifico con la bandera si la opción de mostrar lista es de agregar amigo o de sortear, para eliminar los li del ul
  if (bandera==0){

    ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    lista_nombres.length=0;
}

else{
    ul=document.getElementById("resultado");
    ul.innerHTML="";

}

}