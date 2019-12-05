import { Component, OnInit } from '@angular/core';
import { TiendaService } from './tienda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda';
  listadoCart: any;
  constructor(private tiendaService: TiendaService) { }

  ngOnInit() { }
  agregaron($event) {

    console.log("han agregado")
    console.log($event)
    this.listadoCart = $event;
  }

}
