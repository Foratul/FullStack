import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlumnosComponent } from './alumnos/lista/lista.component';
import { FormularioAlumnosComponent } from './alumnos/formulario/formulario.component';
import { ListaProfesoresComponent } from "./profesores/lista/lista.component";
import { FormularioProfesoresComponent } from "./profesores/formulario/formulario.component"
import { EditarAlumnosComponent } from './alumnos/editaralumnos/editaralumnos.component';
import { EditarProfesoresComponent } from './profesores/editarprofesores/editarprofesores.component';
import { LoginComponent } from './usuarios/login/login.component';

const routes: Routes = [
  { path: "alumnos", component: ListaAlumnosComponent },
  { path: "alumnos/new", component: FormularioAlumnosComponent },
  { path: "alumnos/edit/:alumnoID", component: EditarAlumnosComponent },
  { path: "usuarios", component: LoginComponent },

  { path: "profesores", component: ListaProfesoresComponent },
  { path: "profesores/new", component: FormularioProfesoresComponent },
  { path: "profesores/edit/:profesorID", component: EditarProfesoresComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
