import { Injectable } from '@angular/core';
import { ESCRITORES } from "./db/escritores.db"
import { Escritor } from './models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  arrayEscritores: Array<Escritor>

  constructor() {

    this.arrayEscritores = ESCRITORES;
  }

  getAll(): Escritor[] { return this.arrayEscritores }

  getAllPromise(): Promise<Escritor[]> {
    let prom = new Promise<Escritor[]>((resolve, reject) => {
      setTimeout(() => { resolve(this.arrayEscritores) }, 3000)

    })

    return prom;
  }

  getById(id): Promise<Escritor> {

    //return new Promise<Escritor>(
    //(resolve, reject) => {

    let prom = new Promise<Escritor>((resolve, reject) => {
      let escritorEncontrado = this.arrayEscritores.find(function (escritor) { return escritor.id === id })

      if (escritorEncontrado) { resolve(escritorEncontrado) }
      else reject("reject : que te peines")

    }
    )
    return prom



  }
}
