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

     buscarPosicion(titulo) {
        for (let i = 0; i < this.libreria.length; i++) {
            if (this.libreria[i].titulo === titulo) {
                return i;
            }
        }
        return -1;
    }

    eliminarLibro(titulo) {
        const posicion = this.buscarPosicion(titulo);
        this.libreria.splice(posicion, 1);
    }

    consultarLibro(titulo) {
        const posicion = this.buscarPosicion(titulo);
        return this.libreria[posicion];
    }

    listarLibros() {
        document.body.innerHTML += "<p>Catálogo (" + this.libreria.length + " libros)</p>";
        for (const libro of this.libreria) {
            libro.describir();
        }
    }

    


}

function mostrar(texto) {
    document.body.innerHTML += "<p>" + texto + "</p>";
}

const libro1 = new Libro("Tintin", "jkRowling", 299);
const libro2 = new Libro("el niño del pijama de rayas", "joe P", 300);
const libro3 = new Libro("Quijote", "Cervantes", 1200);

const catalogo = new Catalogo();
catalogo.añadirLibro(libro1);
catalogo.añadirLibro(libro2);
catalogo.añadirLibro(libro3);

libro1.describir();
libro1.esExtenso();
libro2.describir();
libro2.esExtenso();
libro3.describir();
libro3.esExtenso();

libro1.titulo = "Tintin Maquinote";
mostrar("Títulos: " + libro1.titulo + " / " + libro2.titulo + " / " + libro3.titulo);
libro1.titulo = "Tintin";

catalogo.listarLibros();
catalogo.consultarLibro("el niño del pijama de rayas").describir();
catalogo.eliminarLibro("el niño del pijama de rayas");
catalogo.listarLibros();

try {
    catalogo.añadirLibro(new Libro("Tintin", "Cervantes", 100));
} catch (error) {
    mostrar("Error: " + error.message);
}

try {
    catalogo.eliminarLibro("El diario de Greg");
} catch (error) {
    mostrar("Error: " + error.message);
}

try {
    catalogo.consultarLibro("Ana Frank");
} catch (error) {
    mostrar("Error: " + error.message);
}

try {
    new Libro("", "Cervantes", 100);
} catch (error) {
    mostrar("Error: " + error.message);
}

try {
    new Libro("Tintin", "", 100);
} catch (error) {
    mostrar("Error: " + error.message);
}

try {
    new Libro("Tintin", "jkRowling", "abc");
} catch (error) {
    mostrar("Error: " + error.message);
}