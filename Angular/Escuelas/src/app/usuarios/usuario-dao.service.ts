import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDAOService {



  baseURL = "http://localhost:3000/api/usuarios"
  constructor(private http: HttpClient) { }


  login({ email, password }) {

    console.log("me ha llegado email" + email, "password" + password)

    return this.http.post(this.baseURL + "/login", { email: email, password: password }).toPromise()

  }



}
