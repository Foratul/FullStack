import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NgControl, NgModelGroup, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;


  constructor(private serviceApp: AppService) {

    this.formulario = new FormGroup(
      {
        name: new FormControl('M.', [Validators.minLength(2), Validators.required, Validators.maxLength(22)]),
        surname: new FormControl("Rajoy"),
        username: new FormControl("VivaElVino"),
        password: new FormControl("TodoEsFalsoSalvoAlgunaCosa"),
        mail: new FormControl("fakemail"),
        address: new FormControl("Calle Falsa 123"),
        age: new FormControl("288"),
        password_repeat: new FormControl("TodoEsFalsoSalvoAlgunaCosa")
      }
    )
  }

  ngOnInit() {
  }

  async enviar() {
    let objeto = { ...this.formulario.value };
    delete objeto.password_repeat
    try {
      let resultado = await this.serviceApp.registrar(objeto)
      console.log(resultado)
    }
    catch (error) { console.log(error); }

  }
  cosas($event) { console.log($event.target.getAttribute("formControlName")) }





}
