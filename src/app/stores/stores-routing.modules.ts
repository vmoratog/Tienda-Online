import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from '../stores/components/stores.component';

const routes: Routes = [
  {
    path: '',
    component: StoresComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StoresRoutingModule { }