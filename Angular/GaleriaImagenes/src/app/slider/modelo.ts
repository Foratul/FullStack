export class Imagen {

    titulo: string
    descripcion: string
    url: string

    activa: boolean;

    constructor({ titulo = "Sin titulo",
        descripcion = "Sin descripcion",
        url = `https://picsum.photos/${Math.floor(Math.random() * 1000)}/picsum/200/300`,
        active = true }) {

        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
        this.activa = active;
    }

}