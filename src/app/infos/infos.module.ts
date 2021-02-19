import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfosRoutingModule } from './infos-routing.module';

import { FormComponent } from './components/form/form.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DetailCountryComponent } from './components/detail-country/detail-country.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';




@NgModule({
  declarations: [ FormComponent, HomepageComponent, DetailCountryComponent],
  imports: [
    CommonModule,
    InfosRoutingModule,
    AutoCompleteModule,
    FormsModule,
    BrowserAnimationsModule,
    CardModule,
  ]
})
export class InfosModule { }
