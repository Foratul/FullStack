import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Persona } from 'src/Persona.class';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  formPersona: FormGroup;
  datos: any;
  datosPersona: any;
  constructor(private personasService: PersonasService) {
    this.datosPersona = []
    this.datos = []
    this.formPersona = new FormGroup(
      {
        id: new FormControl(''),
        nombre: new FormControl(""),
        apellidos: new FormControl(""),
        edad: new FormControl("")
      }
    )
  }

  ngOnInit() {

    this.datos = this.personasService.recover()
  }


  manejarClick() {

    this.datos = this.personasService.mayoresDe(30)

  }


  personaClicado(id) {
    this.datosPersona = this.personasService.getById(id)
    console.log(this.datosPersona)
  }
  onSubmit() {

    const persona =
      new Persona(
        this.personasService.getIndice(),
        this.formPersona.controls['nombre'].value,
        this.formPersona.controls['apellidos'].value,
        this.formPersona.controls['edad'].value)


    this.formPersona.controls['nombre'].setValue("Random")
    this.personasService.insert(persona)

    // this.personasService.insert(this.formPersona.value)
    console.log(this.datos)


  }

  resetDatos() {

    this.datos = this.personasService.resetar()

  }

}
