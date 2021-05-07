import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresRoutingModule } from './stores-routing.modules';
import { StoresComponent } from './components/stores.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [StoresComponent],
  imports: [
    CommonModule,
    StoresRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class StoresModule { }
