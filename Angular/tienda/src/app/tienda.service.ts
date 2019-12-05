import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Item } from './modelo/item';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http: HttpClient) { }




  getAll() {

    return this.http.get<Array<Item>>("http://neolandshop.ngrok.io/items")
  }

  getCategoria(categoria) {

    return this.http.get<Array<Item>>("http://neolandshop.ngrok.io/items" + categoria).toPromise()

  }

  createCart() {
    return this.http.post("http://neolandshop.ngrok.io/items/newcart", {}).toPromise()
  }

  addProduct(productId, cartId) {
    return this.http.post("http://neolandshop.ngrok.io/items/new",
      { item_id: productId },
      { headers: new HttpHeaders({ 'Cart-Token': cartId }) }).toPromise()
  }

  recoverProducts(cartId) {
    const body = {}
    const headers = new HttpHeaders({ 'Cart-Token': cartId })
    return this.http.get(
      "http://neolandshop.ngrok.io/items/cart",
      { headers }
    ).toPromise()
  }
}