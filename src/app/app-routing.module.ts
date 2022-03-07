import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConctsComponent } from './concts/concts.component';
import { PagesComponent } from './pages/pages.component';
import { RopaComponent } from './ropa/ropa.component';
import { ClothingContentComponent } from './clothing-content/clothing-content.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'ropa', component: RopaComponent },
  // {path: 'shared', loadChildren: () => import('../app/shared/shared.module').then(m => m.SharedModule)},
  { path: 'contact', component: ConctsComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'contenido', component: ClothingContentComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
