import { Component, OnInit } from '@angular/core';
import { ControladorService } from '../controlador.service';
import { Imagen } from '../slider/modelo';
import { FormGroup, FormControl } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  editando: boolean = false
  arrayImagenes: Array<Imagen>
  formulario: FormGroup;
  id: number;
  mensaje: String
  constructor(private controlador: ControladorService) {

  }

  async ngOnInit() {

    this.arrayImagenes = await this.controlador.getImagenes()
    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event.target) // Button that triggered the modal
      var recipient = button.data('whatever') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
    })
  }

  activeToggle(imagen) { imagen.activa = !imagen.activa }

  eliminarImagen(id, imagen) {

    this.controlador.removeImagen(id)
    // this.arrayImagenes.splice(id, 1)
    //eliminar en el componente aunque sea muy sencillo y el mismo objeto
    console.log(this.arrayImagenes)

  }

  editarImagen(imagen, id) {

    this.editando = true
    this.id = id;
    this.formulario = new FormGroup({
      titulo: new FormControl(imagen.titulo),
      descripcion: new FormControl(imagen.descripcion),
      url: new FormControl(imagen.url),
      activa: new FormControl(imagen.activa),
    })
    // CREO UN FORMULARIO CADA VEZ QUE LE DOY A EDIT Y GLOBALIZO LA ID


  }
  onSubmit() {
    console.log("submit")
    //YA TENGO EL ARRAY DE IMAGENES EN ADMIN ASI QUE ...
    this.arrayImagenes[this.id] = { ...this.formulario.value }
    console.log(this.arrayImagenes[this.id])
    // this.editando = false
    this.mensaje = "ACTUALIZADO CON EXITO"
    // ACTUALIZO EL ARRAY Y OCULTO EL FORM CON EL NGIF

  }



}
