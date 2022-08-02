const libros = ["los altisimos", "el cuaderno de las pesadillas", "coraline", "alguien en la ventana"]

let eliminarLibro = prompt("Ingresa el libro que deseas eliminar").toLowerCase();

let indice = libros.indexOf(eliminarLibro)

if(indice != -1){
libros.splice(indice,1);
alert(`El libro ${eliminarLibro} fue eliminado`)
} else {
alert("INCORRECTO")
}

console.log(libros)