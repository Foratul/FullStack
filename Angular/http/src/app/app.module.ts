import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPlanetasComponent } from './lista-planetas/lista-planetas.component';
import { NombresComponent } from './nombres/nombres.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPlanetasComponent,
    NombresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
