import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpainComponent } from './spain/spain.component';
import { FranceComponent } from './france/france.component';

@NgModule({
  declarations: [
    AppComponent,
    SpainComponent,
    FranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
