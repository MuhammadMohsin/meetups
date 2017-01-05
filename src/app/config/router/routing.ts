import { Routes } from '@angular/router';
import {AboutComponent} from "../../components/about.component/about.component";
import {AppComponent} from "../../components/root.component/app.component";
import {DashboardComponent} from "../../components/dashboard.component/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
