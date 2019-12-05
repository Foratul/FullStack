import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;
  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(2)]
      ),
      apellidos: new FormControl('', Validators.maxLength(33)),
      edad: new FormControl('', [this.edadValidator]),
      email: new FormControl('', Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)),
      password: new FormControl(''),
      repite_password: new FormControl(''),
      privacidad: new FormControl(''),
      DNI: new FormControl('', [this.dniValidator])
    }, [this.passwordValidator])
  }

  ngOnInit() {
    const controlNombre = this.formulario.controls['nombre'];
    controlNombre.valueChanges.pipe(debounceTime(500)).subscribe((valor) => { console.log(valor) })
    // on change con delay y cambio de tipo coherentes
  }

  onSubmit() { console.log(this.formulario.value) }


  edadValidator(control: FormControl) {
    const edadMinima = 18;
    const edadMaxima = 65;


    console.log("edad Validator", control)
    if (control.value >= edadMinima && control.value <= edadMaxima) return null;
    else return { errorEdadvalidator: true, min: edadMinima, max: edadMaxima };

  }

  dniValidator(entrada) {
    console.log("dni validator")
    var numero
    var letr
    var letra
    var expresion_regular_dni
    let dni = entrada.value.toString();

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
      numero = dni.substr(0, dni.length - 1);
      letr = dni.substr(dni.length - 1, 1);
      numero = numero % 23;
      letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
      letra = letra.substring(numero, numero + 1);
      if (letra != letr.toUpperCase()) {
        return { errorDnivalidator: true, mensaje: 'Dni erroneo, la letra del NIF no se corresponde' }
      } else {
        alert('Dni correcto');
        return null
      }
    } else {
      return { errorDnivalidator: true, mensaje: 'Formato DNI incorrecto' }
    }
  }

  passwordValidator(form: FormGroup) {
    const passwordControl = form.controls['password']
    const repitepasswordControl = form.controls['repite_password']

    if (passwordControl.value == repitepasswordControl.value) {
      return null
    }
    else return { errorPasswordValidator: true, mensaje: "los passwords difieren" };


  }

}


