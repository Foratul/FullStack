import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { UsuarioDAOService } from '../usuario-dao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioDAOService) { }

  ngOnInit() {
  }


  onSubmit(formulario) {

    this.usuarioService.login({ email: formulario.email, password: formulario.password })
      .then((result) => {
        console.log(result)
        if (!result['exito']) { alert(result['mensaje']) }
        else { localStorage.setItem('user-token', result['mensaje']) }
      })
      .catch((error) => { })

  }
}
