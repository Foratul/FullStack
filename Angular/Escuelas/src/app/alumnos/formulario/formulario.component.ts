import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlumnosService } from 'src/app/alumnos.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']

})
export class FormularioAlumnosComponent implements OnInit {

  propiedades = ["nombre", "apellidos", "edad", "email", "notamedia", "matricula", "sexo", "discapacidad"]
  mensaje = ""
  formulario: FormGroup
  constructor(private alumnosService: AlumnosService) {
    this.formulario = new FormGroup(
      {
        nombre: new FormControl(""),
        apellidos: new FormControl(""),
        edad: new FormControl(""),
        email: new FormControl(""),
        notamedia: new FormControl(""),
        matricula: new FormControl(""),
        fecha_matricula: new FormControl(Date.now()),
        sexo: new FormControl(""),
        discapacidad: new FormControl(""),

      }

    )
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formulario.value)
    let alumno = this.formulario.value
    this.alumnosService.newAlumno(alumno)
      .then((resultado) => { this.mensaje = resultado })
      .catch((err) => { this.mensaje = err })

  }
}