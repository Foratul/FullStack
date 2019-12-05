import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { myFunction } from 'src/environments/environment';
import { PostService } from '../post.service';
import { Post } from '../model/post.model';
import 'reflect-metadata';
import { plainToClass, Transform, Expose, Type, Exclude } from 'class-transformer';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  mensaje: String = "so far so good"


  constructor(private postService: PostService
  ) {

    this.formulario = new FormGroup(
      {
        titulo: new FormControl("", Validators.required),
        texto: new FormControl(""),
        autor: new FormControl(""),
        imagen: new FormControl(""),
        fecha: new FormControl(""),
        categoria: new FormControl("")
      }
    )
  }
  ngOnInit() {
  }
  //QUE PASA SI QUEREMOS QUE LA PROMESA SOLO DEVUELVA UN MENSAJE (EXITO / FRACASO) EN AMBOS CASOS
  onSubmit() {
    let P = new Post(this.formulario.value)
    console.log(P)
    this.postService.agregarPost(P)
      .then((mensaje) => { this.mensaje = mensaje })
      .catch((mensaje) => { this.mensaje = mensaje })
  }
}
//TENGO UN OBJETO plano con (muchos) ATRIBUTOS y quiero que sea un OBJETO de CLASE
// ESA CLASE TINE UN CONTRUCTOR QUE SOLO ADMITE (muchos) PARAMETROS SUELTOS ,
// COMO METO EL OBJETO EN EL CONSTRUCTOR  SIN IR CLAVE A CLAVE

//PERMITIR CONSTRUCTOR VACIO Y LUEGO PASARLE VALORES DEL OBJETO SPREAD OPERATOR
//MOVIDA PLAIN TO CLASS , objeto a clase
//Object.assign

//PROMESA RESOLVE EMITE OBJETO y REJECT EMITE STRING, DECLARAMOS PROMISE -OBJETO- o PROMISE -ANY-
// Y SI TIENE VARIOS RESOLVE POSIBLES CON TIPOS DISTINOS DEPENDIENDO DE CONDICONALES 