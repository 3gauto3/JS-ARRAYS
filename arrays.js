class libro {
    constructor(titulo, autor, precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
    }
}

const libro1 = new libro ("el laberinto del fauno", "guillermo del toro", 4355);
const libro2 = new libro ("los altisimos", "hugo correa", 3980);
const libro3 = new libro ("la novia gitana", "caarmen corre", 4670);

const libros = [libro1, libro2, libro3]

let eliminarLibro = prompt("Ingresa el libro que deseas eliminar").toLowerCase();

let indice = libros.indexOf(eliminarLibro)

if(indice != -1){
libros.splice(indice,1);
alert(`El libro ${eliminarLibro} fue eliminado`)
} else {
alert("INCORRECTO")
}

console.log(libros)