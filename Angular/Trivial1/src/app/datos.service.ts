import { Injectable } from '@angular/core';
import { Pregunta } from './pregunta.class';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  arrayPreguntas: Pregunta[] = []
  constructor() {

    for (let i = 0; i < 10000; i++) {
      this.arrayPreguntas.push(new Pregunta
        (i, "Texto pregunta " + i.toString(), ["Respuesta 1", "Respuesta 2", "Respuesta 3", "Respuesta 4"],
          Math.floor(Math.random() * 4)))
    }
  }

  getDatos() {
    return this.arrayPreguntas;

  }

}



