import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfosModule } from './infos/infos.module';
import { GameModule } from './game/game.module';
import { NavbarreComponent } from './navbarre/navbarre.component';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfosModule,
    GameModule,
    ButtonModule,
    HttpClientModule,
    AutoCompleteModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
