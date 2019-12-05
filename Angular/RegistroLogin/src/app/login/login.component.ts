import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  constructor(private serviceApp: AppService) {

    this.formulario = new FormGroup(
      {
        user: new FormControl(""),
        password: new FormControl("")
      }


    )
  }

  ngOnInit() {
  }

  async login() {
    console.log(await this.serviceApp.login(this.formulario.value))
  }

}
