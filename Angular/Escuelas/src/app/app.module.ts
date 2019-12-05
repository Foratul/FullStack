import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './alumnos/lista/lista.component';
import { FormularioAlumnosComponent } from './alumnos/formulario/formulario.component';
import { ListaProfesoresComponent } from "./profesores/lista/lista.component";
import { FormularioProfesoresComponent } from "./profesores/formulario/formulario.component"
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EditarAlumnosComponent } from './alumnos/editaralumnos/editaralumnos.component';
import { EditarProfesoresComponent } from './profesores/editarprofesores/editarprofesores.component';
import { LoginComponent } from './usuarios/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    FormularioAlumnosComponent,
    ListaProfesoresComponent,
    FormularioProfesoresComponent,
    EditarAlumnosComponent,
    EditarProfesoresComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
