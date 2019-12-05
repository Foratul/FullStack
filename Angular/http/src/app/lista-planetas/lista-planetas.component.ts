import { Component, OnInit } from '@angular/core';
import { SwService } from '../sw.service';
import { async } from 'rxjs/internal/scheduler/async';


@Component({
  selector: 'app-lista-planetas',
  templateUrl: './lista-planetas.component.html',
  styleUrls: ['./lista-planetas.component.css']
})
export class ListaPlanetasComponent implements OnInit {
  planetas: any[]
  numPaginas: number;
  paginaActual: number = 1;
  numero: Object;


  constructor(private swService: SwService) { }

  ngOnInit() {
    this.mostrarPlanetas()
  }

  paginado(avance) {
    if ((avance < 0 && this.paginaActual > 1)
      || (avance > 0 && this.paginaActual < this.numPaginas)) {
      this.paginaActual += avance;
      this.mostrarPlanetas()
    }

  }
  async mostrarPlanetas() {

    // CON EL OBSERVABLE, ME DESUSCRIBO AL FINAL
    // let obs$ = this.swService.getPlanetsObservable(this.paginaActual)
    //   .subscribe(resultado => {
    //     this.planetas = resultado['results']
    //     this.numPaginas = Math.ceil(resultado['count'] / 10)
    //     obs$.unsubscribe()
    //   })
    //CON PROMESA
    // this.swService.getPlanetsPromise(this.paginaActual)
    //   .then(function (res): any {
    //     this.planetas = res['results']
    //     this.numPaginas = Math.ceil(res['count'] / 10)
    //   }.bind(this));

    //ASYNC
    let resultado = await this.swService.getPlanetsAsync().then(function (res): any {
      console.log(res)
      this.planetas = res['results']
      this.numPaginas = Math.ceil(res['count'] / 10)
    }.bind(this));
    return resultado;


  }




  numeroAleatorio() {
    let obs$ = this.swService.getRandomNum(false, 288, 0).subscribe((resultado) => {
      this.numero = resultado
      console.log(resultado)
      obs$.unsubscribe()
    }
    )

    // console.log(this.swService.getRandomNum(288, 1))
  }

  async numeroAsync() {
    let res = await this.swService.getRandomNum(true, 288, 0)
    console.log(res)
  }

}
