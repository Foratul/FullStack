import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseURL: string;


  constructor(private http: HttpClient) {

    this.baseURL = "http://registrate.ngrok.io/"
  }


  empezar() {
    return this.http.get(this.baseURL + "premio").toPromise()

  }

  registrar(objeto) {
    return this.http.post(this.baseURL + "register",
      objeto)
      .toPromise()
  }

  login(objeto) {
    console.log(objeto)
    return this.http.post(this.baseURL + "login", { username: objeto.user, password: objeto.password }).toPromise()
  }


  premio(token) {

    // return this.http.post(this.baseURL + "premio", { new HttpHeaders() }
  }

}
