import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProdukterComponent } from './produkter/produkter.component';
import { SalonenComponent } from './salonen/salonen.component';

const routes: Routes = [

  {
    path: 'forside',
    component: HomeComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'salonen',
    component: SalonenComponent,
  },
  {
    path: 'produkter',
    component: ProdukterComponent,
  },
  {
    path: '',
    redirectTo: 'forside',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
