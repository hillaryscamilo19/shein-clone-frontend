import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//modules
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RopaComponent } from './ropa/ropa.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ConctsComponent } from './concts/concts.component';
import { PagesComponent } from './pages/pages.component';
import { SidevarComponent } from './sidevar/sidevar.component';
//material angular
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ClothingContentComponent } from './clothing-content/clothing-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RopaComponent,
    ContenidoComponent,
    ConctsComponent,
    PagesComponent,
    SidevarComponent,
    ClothingContentComponent,
  ],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
