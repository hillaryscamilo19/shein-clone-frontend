import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//pages
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { LoginComponent } from './pages/login/login/login.component';
import { NavsComponent } from './components/header/navs/navs.component';
import { FiltershopPipe } from './pages/shop/pipes/filtershop.pipe';
//material angular
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperComponent } from './pages/home/components/stepper/stepper.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { MatDividerModule } from '@angular/material/divider';
<<<<<<< HEAD
import { MatPaginatorModule } from '@angular/material/paginator';
=======
import { MatBadgeModule } from '@angular/material/badge';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
//componentes


>>>>>>> c8bd44f33a8d2e8f236fbe68c07d437cef1ad136

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    StepperComponent,
    HomeComponent,
    FiltershopPipe,
    LoginComponent,
    NavsComponent,
    RegisterComponent,
<<<<<<< HEAD
=======
    CartPageComponent,
>>>>>>> c8bd44f33a8d2e8f236fbe68c07d437cef1ad136
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    AppRoutingModule,
<<<<<<< HEAD
    MatPaginatorModule,
=======
    MatBadgeModule,
>>>>>>> c8bd44f33a8d2e8f236fbe68c07d437cef1ad136
    AngularFireModule.initializeApp(environment.firebaseConfig),
    OAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
