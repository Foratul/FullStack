import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwService {
  resultado: any;

  constructor(private http: HttpClient) { }




  getPlanetsPromise(pagina = 1) {

    return this.http.get("https://swapi.co/api/planets/?format=json&page=" + pagina).toPromise()

  }

  getPlanetsObservable(pagina = 1) {

    return this.http.get("https://swapi.co/api/planets/?format=json&page=" + pagina)

  }

  getPlanetsAsync(pagina = 1) {
    return this.http.get("https://swapi.co/api/planets/?format=json&page=" + pagina).toPromise()
  }

  getRandomNum(promesa = true, maximo = 288, minimo = 0, ): any {
    const httpOptions = { headers: new HttpHeaders({ NeolandUserId: "M.Rajoy" }) }
    const body = {
      max: maximo,
      min: minimo
    }
    console.log(body)

    if (!promesa) { return this.http.post('https://cors-anywhere.herokuapp.com/http://neorandom.ngrok.io/random/num', body, httpOptions) }
    if (promesa) { return this.http.post('https://cors-anywhere.herokuapp.com/http://neorandom.ngrok.io/random/num', body, httpOptions).toPromise() }
  }

}
