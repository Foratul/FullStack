import { Component, OnInit, Input } from '@angular/core';
import { TiendaService } from '../tienda.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() listadoCart: any;
  cartId: any;
  token: string;

  constructor(private tiendaService: TiendaService) {

  }

  ngOnInit() {

    this.token = localStorage.getItem("tokenCarrito")
    this.tiendaService.recoverProducts(this.token).then((res) => this.listadoCart = res)


  }

  muestra() {
    this.tiendaService.recoverProducts(this.token).then((res) => this.listadoCart = res)
    console.log(this.listadoCart)
  }


}