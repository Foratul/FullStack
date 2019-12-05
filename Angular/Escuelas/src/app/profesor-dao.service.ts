import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesorDAOService {
  baseurl = "http://localhost:3000/api/profesores"
  constructor(private http: HttpClient) { }


  getAll() {

    return this.http.get(this.baseurl).toPromise()

  }

  getById() { return null }
}
