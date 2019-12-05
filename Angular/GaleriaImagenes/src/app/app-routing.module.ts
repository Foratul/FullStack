import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { SliderComponent } from './slider/slider.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "new", component: NewComponent },
  { path: "slider", component: SliderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
