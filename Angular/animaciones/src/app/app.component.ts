import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("cambioColor",
      [state("verde", style({
        "background-color": "green"
      })),
      state("rojo", style({
        "background-color": "red",
        transform: "scale(3)"
      })),
      state("ambar", style({
        "background-color": "yellow"
      })), transition("verde => rojo", animate(500)),
      transition("ambar => verde", animate(15000)),
      transition("rojo => ambar", animate(150)),
      transition("void => *",
        [style({
          transform: 'translateX(-100%)'
        }), animate(1000)]
      )])



  ]
})
export class AppComponent implements OnInit {

  title = 'animaciones';
  i: number = 0;

  estadoAnimacion: string;
  estado: string[];

  constructor() { this.estado = ["rojo", "ambar", "verde"] }

  ngOnInit() {

    setInterval(() => {
      console.log("intervalo")
      this.i = (this.i + 1) % 3
      this.estadoAnimacion = this.estado[this.i]
    }, 3000)
  }
}
