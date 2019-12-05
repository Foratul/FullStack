import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';
import { Libro } from '../models/libro.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  arrayLibros: Libro[]



  constructor(private librosService: LibrosService,
    private activatedRoute: ActivatedRoute) {

    console.log("contructor lista-libras")



  }


  ngOnInit() {


    this.activatedRoute.parent.params.subscribe((params) => {
      console.log(params)
      let autorId = params.idEscritor

      this.arrayLibros = this.librosService.getByAutor(autorId)

    })

    // REHACERLO CON PROMESAS



  }



}
