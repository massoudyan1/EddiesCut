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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

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
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
