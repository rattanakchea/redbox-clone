import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AdminComponent } from './admin/admin.component';
import { DvdListComponent } from './admin/dvd-list/dvd-list.component';
import { AddDvdComponent } from './admin/add-dvd/add-dvd';

//==== services ====
import { DvdService } from './services/dvd.service';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent }
  //{ path: '**', redirectTo: 'user', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, AboutComponent,
    AdminComponent,
    DvdListComponent, AddDvdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ DvdService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
