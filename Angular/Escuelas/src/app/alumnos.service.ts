import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/api/alumnos"
  corsUrl: string = "https://cors-anywhere.herokuapp.com/"

  getAll(): Promise<any> {
    let header = new HttpHeaders({ 'user-token': localStorage.getItem('user-token') })
    return this.http.get<any[]>(this.baseUrl, { headers: header }).toPromise()
  }

  newAlumno(alumno): Promise<any> {
    return this.http.post(this.baseUrl, alumno).toPromise();
  }





}
