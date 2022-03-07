import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderRoutingModule } from './header-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderRoutingModule],
  exports: [MatToolbarModule, MatSidenavModule],
})
export class HeaderModule {}
