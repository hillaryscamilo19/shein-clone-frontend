import { SeccionesComponent } from './pages/secciones/secciones.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { LoginComponent } from './pages/login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { BeautyPageComponent } from './pages/beauty-page/beauty-page.component';
import { WomenPageComponent } from './pages/women-page/women-page.component';
import { MenPageComponent } from './pages/men-page/men-page.component';
import { KidsPageComponent } from './pages/kids-page/kids-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'secciones/:id', component: SeccionesComponent },
/*   { path: 'Men', component: MenPageComponent },
  { path: 'Women', component: WomenPageComponent },
  { path: 'beauty', component: BeautyPageComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
