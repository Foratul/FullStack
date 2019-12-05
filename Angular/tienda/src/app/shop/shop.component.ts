import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TiendaService } from '../tienda.service';
import { Item } from '../modelo/item'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productos: Array<Item>
  cartId: any;
  listadoCart: any;
  @Output() agregado: EventEmitter<any> = new EventEmitter()

  constructor(private tiendaService: TiendaService) { }

  async ngOnInit() {
    let obs$ = this.tiendaService.getAll().subscribe((resultado, error?) => {
      this.productos = resultado;
      console.log(this.productos, error)
      obs$.unsubscribe()
    })
  }

  // throwError('This is an error!')



  async addToCart(id) {

    try {
      if (localStorage.getItem("tokenCarrito")) {
        this.cartId = localStorage.getItem("tokenCarrito")
        console.log("carrito existe", this.cartId)
      }
      else {
        let resultado = await this.tiendaService.createCart();
        this.cartId = resultado['token_cart']
        localStorage.setItem("tokenCarrito", this.cartId)
        console.log("carrito creado", this.cartId)

      }
      this.addProduct(id)
    }

    catch (error) { console.log(error) }
  }



  async getCategoria($event) {
    try { this.productos = await this.tiendaService.getCategoria($event.target.value) }
    catch (error) { console.log(error) }
  }


  async addProduct(id) {

    console.log("boton añadir")
    console.log(await this.tiendaService.addProduct(id, this.cartId))
    this.recoverProducts()
  }

  async recoverProducts(cartId = this.cartId) {


    try {
      this.listadoCart = await this.tiendaService.recoverProducts(cartId)
      console.log(this.listadoCart)
      this.agregado.emit(this.listadoCart)
    }
    catch (error) { console.log(error) }


  }

}
