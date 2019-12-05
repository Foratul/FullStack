import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPlanetasComponent } from './lista-planetas/lista-planetas.component';
import { NombresComponent } from './nombres/nombres.component';


const routes: Routes = [

  { path: "", pathMatch: "full", redirectTo: "planets" },

  { path: "planets", component: ListaPlanetasComponent },

  { path: "nombres", component: NombresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
