import { Component, OnInit } from '@angular/core';
import { ControladorService } from '../controlador.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Imagen } from '../slider/modelo';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styles: []
})
export class NewComponent implements OnInit {

  formulario: FormGroup
  arrayImagenes: Array<Imagen>
  constructor(private controlador: ControladorService) {

    this.formulario = new FormGroup({
      titulo: new FormControl("Título "),
      descripcion: new FormControl("Descripción"),
      url: new FormControl(`https://picsum.photos/id/${Math.floor(Math.random() * 800)}/600/600`),
      activa: new FormControl(true)
    })
  }

  async ngOnInit() {
    this.arrayImagenes = await this.controlador.getImagenes()
  }

  async submit() {
    this.formulario.controls['url'].setValue(`https://picsum.photos/id/${Math.floor(Math.random() * 800)}/800/400`)
    console.log(this.formulario.value)
    await this.controlador.addImagen(this.formulario.value)


  }

}
