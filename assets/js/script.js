function Calculadora() {
    this.notas = [];
    this.promedio = 0;
    this.nombreMateria = [];
}

var materia = [{ nombre: "html", notas: [] },
{ nombre: "css", notas: [] },
{ nombre: "js", notas: [] },
];

//se crea una funcion que recibe un objeto materia y agrega las notas
function agregarNotas(materia) {
    //se recorre el arreglo de notas del objeto materia actual
    for (var i = 0; i < 3; i++) {
        //se crea una variable que almacena la nota actual
        var nota = parseInt(prompt("Ingrese nota " + (i + 1) + " de " + materia.nombre));
        //se agrega la nota al arreglo de notas del objeto materia actual
        materia.notas.push(nota);
    }
}

//se recorre el arreglo de objetos materia
for (var i = 0; i < materia.length; i++) {
    //se crea una variable que almacena el nombre de la materia actual
    var nombreMateria = materia[i].nombre;
    //se usa la funcion de agregar notas para agregar las notas a los objetos materia
    agregarNotas(materia[i], nombreMateria);
}

//Calculo de promedio
for (var i = 0; i < materia.length; i++) {
    //se recorre el arreglo de objetos materia
    var materiaActual = materia[i];
    //se crea una variable que almacena las notas actuales por cada materia
    var notas = materiaActual.notas;
    //se crea una variable que almacena el promedio de las notas
    var promedio = 0;
    //se recorre el arreglo de notas
    for (var j = 0; j < notas.length; j++) {
        //se suma cada nota al promedio
        promedio = promedio + notas[j];
    }
    //se calcula el promedio con el largo del arreglo de notas
    promedio = promedio / notas.length;
    //se asigna el promedio al objeto materia actual
    materiaActual.promedio = promedio;
}

//mostrar promedio en el HTML
for (var i = 0; i < materia.length; i++) {
    var notas = materia[i].notas;
    var promedio = materia[i].promedio;
    var nombreMateria = materia[i].nombre.toLowerCase();

    document.getElementById(nombreMateria + "-nota1").innerHTML = notas[0];
    document.getElementById(nombreMateria + "-nota2").innerHTML = notas[1];
    document.getElementById(nombreMateria + "-nota3").innerHTML = notas[2];
    document.getElementById(nombreMateria + "-promedio").innerHTML = promedio;
}
