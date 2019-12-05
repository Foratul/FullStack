import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsComponent } from './tests/tests.component';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import { DetalleEscritorComponent } from './detalle-escritor/detalle-escritor.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { TemporalComponent } from './temporal/temporal.component';


const routes: Routes = [
  { path: "test", component: TestsComponent },
  { path: "escritores", component: ListaEscritoresComponent },
  {
    path: "escritores/:idEscritor", component: DetalleEscritorComponent,

    children: [{ path: "libros", component: ListaLibrosComponent }]


  }, { path: "libros", component: ListaLibrosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
