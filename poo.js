// Clase  libros
class Libro {
    constructor(autor, titulo, precio, stock, id) {
        this._autor = autor;
        this._titulo = titulo;
        this._precio = precio;
        this._stock = stock;
        this._id = id;
    }

    // Método 
    verInfo() {
        return `Autor: ${this._autor}, Título: ${this._titulo}, Precio: $${this._precio}, Stock: ${this._stock}, ID: ${this._id}`;
    }
}

// Clase derivada para los cómics, que hereda de la clase Libro
class Comic extends Libro {
    constructor(autor, titulo, precio, stock, id, ilustradores, volumen) {
        super(autor, titulo, precio, stock, id); // Llama al constructor de la clase base
        this._ilustradores = ilustradores;
        this._volumen = volumen;
    }

    // Sobrescribe el método verInfo() 
    verInfo() {
        // Llamamos al método de la clase base (Libro) para mostrar la información común
        const baseInfo = super.verInfo();
        // Añadimos la información específica de los cómics
        return `${baseInfo}, Ilustradores: ${this._ilustradores.join(", ")}, Volumen: ${this._volumen}`;
    }
}

// Se crea instancias para libro y comics 
const libro1 = new Libro("George Orwell", "1984", 199.90, 100, 1);
const comic1 = new Comic("Alan Moore", "B: The Killing Joke", 99.90, 50, 1, ["Brian Bolland", "John Higgins"], 1);

// Se muestra info por consola
console.log("Información del libro:");
console.log(libro1.verInfo()); // Muestra la información del libro

console.log("\nInformación del cómic:");
console.log(comic1.verInfo()); // Muestra la información del cómic

