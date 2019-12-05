export class Escritor {

    id: number;
    nombre: string;
    apellidos: String;
    imagen: string;
    pais: string;


    constructor(id: number, nombre: string, apellidos: String, imagen: string, pais: string) {

        this.id = id;
        this.apellidos = apellidos;
        this.imagen = imagen;
        this.pais = pais;
    }

}