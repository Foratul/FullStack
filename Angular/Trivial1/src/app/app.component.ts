import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from './pregunta.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Trivial1';
  arrayPreguntas: Array<Pregunta> = []
  dataService: any;

  constructor(private router: Router) { }
  goToPage(path, $event) {
    console.log($event.target.dataset.id)
    this.router.navigate([path])

  }
  ngOnInit() {
    console.log("appComponent")

  }
}


