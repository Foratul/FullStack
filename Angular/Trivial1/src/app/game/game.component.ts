import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../pregunta.class';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  preguntaActual: number = 499;
  mensaje: string = "A responder"
  arrayPreguntas: Pregunta[];

  constructor(private datosService: DatosService) { }

  ngOnInit() {

    this.arrayPreguntas = this.datosService.getDatos()


  }

  comprobarRespuesta($event) {
    console.log("comprobamos")
    if ($event == this.arrayPreguntas[this.preguntaActual].correcta) {
      alert("viva el vino")
      this.preguntaActual = Math.floor(Math.random() * 1000)
    }
    else alert("mal")

  }
}

