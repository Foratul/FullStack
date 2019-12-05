import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrayEscritores: Escritor[]

  constructor(private escritoresService: EscritoresService) {
    this.escritoresService = escritoresService;
  }

  async ngOnInit() {

    // convencional
    this.arrayEscritores = this.escritoresService.getAll()

    // PROMESA
    this.escritoresService.getAllPromise().then((escritores) => { this.arrayEscritores = escritores })
    // ASYNC AWAIT
    this.arrayEscritores = await this.escritoresService.getAllPromise()


  }
  capitalize(texto) {
    texto = texto.split("")
    texto[0] = texto[0].toUpperCase();
    var re = /((?!\s)\b[a-z])/g;

    texto = texto.join("")
    texto = texto.replace(re, function (x) { return x.toUpperCase(); });
    return texto;
  }
}
