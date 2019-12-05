import { Injectable } from '@angular/core';
import { Imagen } from './slider/modelo';

@Injectable({
  providedIn: 'root'
})
export class ControladorService {
  arrayImagenes: Array<Imagen> = [];

  constructor() { }


  // PREGUNTAR POR EL DOBLE RESOLVE
  // LO FILTRO YA AQUI EN EL METODO EN LUGAR DE FILTRAR EN EL COMPONENTE

  getImagenes(returnActiveOnly = false): Promise<Array<Imagen>> {
    return new Promise<Array<Imagen>>((resolve, reject) => {
      //SI VIENE CON PARAMETRO (por ejemplo desde el slider), devuelve solo las activadas
      if (returnActiveOnly) { resolve(this.arrayImagenes.filter((item) => { return item.activa })) }
      // O RETORNO TODO SIN FILTRAR
      else { resolve(this.arrayImagenes) }

      reject("error con datos locales!!! , ya hay que ser subnormal ")
    })
  }

  // ¿NO HABIENDO SOBRECARGA DE METODOS ... MEJOR HACER UN METODO DOBLE o DOS METODOS SENCILLOS repitiendo CODIGO?

  addImagen(imagen: Imagen) {

    new Promise((resolve, reject) => {
      resolve(this.arrayImagenes.push(imagen)),
        reject("error")
    })
  }

  removeImagen(id) { this.arrayImagenes.splice(id, 1) }
}
