import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  getIndice() {
    return this.indice
  }


  arrayPersonas: any[]
  arrayOriginal: any[];
  indice: number;

  constructor() {

    this.arrayPersonas = [
      { id: 1, nombre: 'Mario', apellidos: 'Girón', edad: 35 },
      { id: 2, nombre: 'Mario', apellidos: 'Girón', edad: 35 },
      { id: 3, nombre: 'Luis', apellidos: 'Roldán', edad: 75 },
      { id: 4, nombre: 'Mario', apellidos: 'Girón', edad: 15 },
      { id: 5, nombre: 'Mario', apellidos: 'Girón', edad: 35 },
      { id: 6, nombre: 'Mariano', apellidos: 'Rajoy', edad: 66 },
      { id: 7, nombre: 'Mario', apellidos: 'Girón', edad: 35 },
      { id: 7, nombre: 'Mario', apellidos: 'Girón', edad: 13 },

      { id: 8, nombre: 'Felipe', apellidos: 'Lotas', edad: 25 }]

    this.arrayOriginal = [...this.arrayPersonas]

  }

  getAll() {
  }

  mayoresDe(edad: number) {
    return this.arrayPersonas.filter((persona) => { return persona.edad > edad })

  }

  getById(id: number) {

    return this.arrayPersonas.find((persona) => { return persona.id = id })
  }

  getArrayById(id: number) {

    return this.arrayPersonas.filter((persona) => { return persona.id = id })
  }

  insert(persona) {
    this.arrayPersonas.push(persona)
    this.indice++;
    this.update()



  }
  update() {
    localStorage.setItem('datos', JSON.stringify(this.arrayPersonas))
    localStorage.setItem('index', this.indice.toString())
  }

  recover() {
    console.log("recover")
    this.arrayPersonas = JSON.parse(localStorage.getItem('datos'))
    this.indice = parseInt(localStorage.getItem('index'))
    return this.arrayPersonas;

  }

  resetar() {
    this.arrayPersonas = [...this.arrayOriginal]
    this.update();
    console.log(this.arrayPersonas)
    return this.arrayPersonas

  }
}
