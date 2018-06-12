import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SingleOrderComponent } from './single-order/single-order.component';
//import { PageoneComponent } from './pageone/pageone.component';
//import { UsersService } from './users.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, Validators} from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MultipleOrderComponent } from './multiple-order/multiple-order.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import Chart from 'chart.js';
import { ReportsComponent } from './reports/reports.component'; 


const appRoutes: Routes = [
  {
    path: '', component: LoginPageComponent
  },
  {
    path:'form-page', component: FormPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {path:"Single-order",component:SingleOrderComponent},
      {path:"multiple-order", component: MultipleOrderComponent},
      {path:"reports", component: ReportsComponent}
    ]
   },
  {
  path: 'Single-order',
  component: SingleOrderComponent
 
 },
 {
   path: 'multiple-order',
   component: MultipleOrderComponent
 },
 {
   path: 'reports', component: ReportsComponent
 }

]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    MultipleOrderComponent,
    SingleOrderComponent,
    LoginPageComponent,
    FormPageComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgDatepickerModule,
    DataTablesModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
    //InMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
