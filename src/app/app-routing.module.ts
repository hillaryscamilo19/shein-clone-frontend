import { RegisterComponent } from './pages/login/register/register.component';
import { LoginComponent } from './pages/login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'shopping', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegisterComponent},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
