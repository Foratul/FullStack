import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
    this.randomNum = 0
  }

  ngOnInit() {
    setInterval(function (numero = 0) {
      this.numero = numero + Math.random() - 0.5
      this.randomNum = Math.random()
    }.bind(this), 300)
  }

  title = 'pipes';




  precio: number = 41235.35;
  numero: number = 14289.443323564
  fechaActual: Date = new Date()
  cadena: String = "Solo quedan 2 dias de Angular"
  randomNum: number = Math.random()

  devuelveMensaje: Promise<string> = new Promise<string>((resolve, reject) => {

    setTimeout(() => {
      resolve("se ha cumplido la promsea")
      reject("ha habido error")
    }, 2000)

  })

}
