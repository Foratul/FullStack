import { Component, OnInit } from '@angular/core';
import { ControladorService } from '../controlador.service';
import { Imagen } from './modelo';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  arrayImagenes: Array<Imagen> = []
  imagenActual: number = 0


  constructor(private controlador: ControladorService) { }

  async ngOnInit() {
    this.arrayImagenes = await this.controlador.getImagenes(true)
  }

  slide(avance) {


    this.imagenActual = (this.imagenActual + avance) % (this.arrayImagenes.length - 1)
  }


}
