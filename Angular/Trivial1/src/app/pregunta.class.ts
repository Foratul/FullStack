export class Pregunta {
    id: number;
    nombre: string;
    respuestas: string[];
    correcta: number;


    constructor(id, nombre, respuestas, correcta) {
        this.id = id;
        this.nombre = nombre;
        this.respuestas = respuestas;
        this.correcta = correcta;
    }




}