import { Injectable } from '@angular/core';
import { LIBROS } from './db/libros.db';
import { Libro } from './models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  arrayLibros: Libro[];

  constructor() {

    this.arrayLibros = LIBROS;

  }


  getAll() {
    return this.arrayLibros;
  }

  getByAutor(autorId) {
    console.log("getByAutor")

    return this.arrayLibros.filter((libro) => { return libro.id == autorId })
  }

  async getById(id): Promise<Libro> {

    //return new Promise<Escritor>(
    //(resolve, reject) => {

    let prom = new Promise<Libro>((resolve, reject) => {
      let libroEncontrado = this.arrayLibros.find(function (libro) { return libro.id === id })

      if (libroEncontrado) { resolve(libroEncontrado) }
      else reject("reject : que te peines")

    }
    )
    return prom



  }

}
