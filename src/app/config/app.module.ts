import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { AppComponent } from '../components/root.component/app.component';
import { AboutComponent } from '../components/about.component/about.component';
import {RouterModule} from "@angular/router";
import {routes} from "./router/routing";
import {DashboardComponent} from "../components/dashboard.component/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
