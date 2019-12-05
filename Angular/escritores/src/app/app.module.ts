import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import { DetalleEscritorComponent } from './detalle-escritor/detalle-escritor.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { TemporalComponent } from './temporal/temporal.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    ListaEscritoresComponent,
    DetalleEscritorComponent,
    ListaLibrosComponent,
    TemporalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
