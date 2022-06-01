import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//pages
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
//material angular
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperComponent } from './pages/home/components/stepper/stepper.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { NavsComponent } from './components/header/navs/navs.component';
import { MatDividerModule } from '@angular/material/divider';
import { FiltershopPipe } from './pages/shop/pipes/filtershop.pipe';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
<<<<<<< HEAD
import { InicioComponent } from './pages/login/inicio/inicio.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
=======
import { InicioComponent } from './login/inicio/inicio.component';
import { RegistroComponent } from './login/registro/registro.component';

>>>>>>> 66d5cbdd14d35384c5b0f3296366da09da9bf124

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ContactComponent,
    AboutUsComponent,
    StepperComponent,
    HomeComponent,
    NavsComponent,
    FiltershopPipe,
    ShoppingCartComponent,
    InicioComponent,
<<<<<<< HEAD
    RegisterComponent,
=======
    RegistroComponent,
>>>>>>> 66d5cbdd14d35384c5b0f3296366da09da9bf124
  ],

  entryComponents: [InicioComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatCardModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatMenuModule,
    MatDividerModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
