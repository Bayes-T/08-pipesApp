import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { canFly } from './pipes/canFly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPagesComponent,
    CustomPageComponent,
    ToggleCasePipe,
    canFly,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    PrimeNgModule
  ]
})
export class ProductosModule { }
