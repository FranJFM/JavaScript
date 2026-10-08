class Libro{
    constructor(titulo,autor,nPaginas){
        if(titulo === null || titulo === undefined || titulo === ""){
                 throw new Error("El titulo esta vacio...");
            }else if(autor === null || autor === undefined || autor === ""){
                throw new Error("El autor esta vacio");
            }else if(isNaN(nPaginas)){
                 throw new Error("El número de páginas no es válido...");
            }

        this.titulo = titulo;
        this.autor = autor;
        this.nPaginas = nPaginas;
    }
        describir(){
             document.body.innerHTML = ("<p>"+ this.titulo+ this.autor + this.nPaginas+ "</p>");
           
        }
        esExtenso(){
            if(this.nPaginas >= 300){
                document.body.innerHTML = ("<p>" +"El libro tiene almenos 300 páginas"+"</p>");
            }else{
                 document.body.innerHTML=("<p>"+"El libro tiene menos de 300 paginas"+ "</p>");
            }
        }
       
}

class Catalogo{
    constructor(...libreria){
        this.libreria= libreria;
    }
    añadirLibro(Libro){
        this.libreria.push(Libro);
    }
    eliminarLibro(Libro,libreria){
        let tituloLibro = "Tintin";
        if(tituloLibro === this.libreria.Libro){
            libreria.remove(Libro);
        }
    }
    consultarLibro(libreria){
        
    }


}
let libro = new Libro("Tintin","Jk Rowling", 300);
libro.describir();
console.log(libro.esExtenso());
