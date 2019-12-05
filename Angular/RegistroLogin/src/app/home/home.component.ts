import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serviceApp: AppService) { }

  ngOnInit() {
  }



  async empezar() {
    try {
      let resultado = await this.serviceApp.empezar();
      console.log(resultado)
    }
    catch (error) { console.log(error) }
  }

}
