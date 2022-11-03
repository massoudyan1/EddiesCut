import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { MenuComponent } from './menu/menu.component';
import { SalonenComponent } from './salonen/salonen.component';
import { ProdukterComponent } from './produkter/produkter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    NavLinksComponent,
    MenuComponent,
    SalonenComponent,
    ProdukterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
