const lista = ["sol","montaña", "río", "bosque", "mariposa", "luz", "montaña"];
 let contador = 0;
function contarPalabras(lista){
   
    for(let i = 0; i < lista.length; i++){
        if(lista[i]==="montaña"){
            contador++;
        } 
    }
    console.log("La palabra montaña se repite: " + contador);
}

function array4(){
    let nuevo = [];
    for(let i = 0;i<lista.length;i++){
        if(lista[i].length > 4 ){
            nuevo.push(lista[i]);
        }
    }
    return nuevo;
}

function primeraPosicion(lista){
    return lista.indexOf(lista);
}
contarPalabras(lista);
console.log(array4());
console.log(primeraPosicion(lista));

