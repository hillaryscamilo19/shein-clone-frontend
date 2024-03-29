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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { MatDividerModule } from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { TotalComponent } from './components/total/total.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { LoggingComponent } from './components/logging/logging.component';
import {MatChipsModule} from '@angular/material/chips';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { KidsPageComponent } from './pages/kids-page/kids-page.component';
import { MenPageComponent } from './pages/men-page/men-page.component';
import { BeautyPageComponent } from './pages/beauty-page/beauty-page.component';
import { SeccionesComponent } from './pages/secciones/secciones.component';
import { ILikeToComponent } from './components/i-like-to/i-like-to.component';

//componentes




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
    CartPageComponent,
    TotalComponent,
    CartItemComponent,
    LoggingComponent,
    CarritoComponent,
    ShopItemComponent,
    KidsPageComponent,
    MenPageComponent,
    BeautyPageComponent,
    SeccionesComponent,
    ILikeToComponent,

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
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    AppRoutingModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatChipsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    OAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
