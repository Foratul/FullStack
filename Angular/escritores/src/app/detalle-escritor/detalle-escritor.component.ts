import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.css']
})
export class DetalleEscritorComponent implements OnInit {
  esc: Escritor;
  mensaje: String;
  constructor(private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService) { }

  ngOnInit() {
    //capturas los parametros de la url
    this.activatedRoute.params.subscribe((params) => {
      let id = parseInt(params.idEscritor)
      this.escritoresService.getById(id)
        //la promesa
        .then((escritorEncontrado) => {
          console.log(escritorEncontrado)
          this.esc = escritorEncontrado
        })

        .catch((mensaje) => {
          console.log("no encontrado")
          this.mensaje = mensaje;
        });


    })
  }

}
