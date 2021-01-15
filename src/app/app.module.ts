import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { MappaComponent } from './mappa/mappa.component';
import { StatiComponent } from './stati/stati.component';
import { UsaComponent } from './usa/usa.component';
import { ItaliaComponent } from './italia/italia.component';
import { DateComponent } from './date/date.component';
import { ContinentiComponent } from './continenti/continenti.component';


const routes: Routes  = [
  {path: '', component: HomeComponent},
  {path: 'ricercaPerStato', component: StatiComponent},
  {path: 'USA', component: UsaComponent},
  {path: 'Italia', component: ItaliaComponent},
  {path: 'ricercaPerData', component: DateComponent},
  {path: 'continenti', component: ContinentiComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MappaComponent,
    StatiComponent,
    UsaComponent,
    ItaliaComponent,
    DateComponent,
    ContinentiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
