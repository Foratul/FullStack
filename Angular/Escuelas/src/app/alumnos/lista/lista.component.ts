import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/alumnos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})



export class ListaAlumnosComponent implements OnInit {
  arrayAlumnos: Array<any>
  propiedades: Array<any>

  constructor(private alumnosService: AlumnosService) {
    this.arrayAlumnos = []
    this.propiedades = ["id", "nombre", "apellidos", "edad", "email", "notamedia", "fecha_matricula", "matricula"]
  }

  ngOnInit() {
    console.log("lista")
    this.alumnosService.getAll().then(result => {
      this.arrayAlumnos = result
      console.log(this.arrayAlumnos)
    })
  }

}
