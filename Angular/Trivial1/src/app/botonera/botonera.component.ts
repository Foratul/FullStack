import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pregunta } from '../pregunta.class';

@Component({
  selector: 'botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {
  @Input() respuestas: any
  @Output() evento: EventEmitter<number>;
  constructor() {
    this.evento = new EventEmitter();
  }

  ngOnInit() {
  }
  respuestaClicada(respuesta) {
    console.log("clicamos", respuesta)
    this.evento.emit(respuesta)


  }
}
