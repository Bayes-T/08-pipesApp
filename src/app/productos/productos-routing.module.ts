import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasicPageComponent
  },
  {
    path: 'numbers',
    component: NumbersPageComponent
  },
  {
    path: 'uncommon',
    component: UncommonPagesComponent
  },
  {
    path: 'custom',
    component: CustomPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
