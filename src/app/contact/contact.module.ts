import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './components/contact/contact.component'
import { ContactRoutingModule } from './contact-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    SharedModule,
    MatInputModule,
    MaterialModule,
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModeule {

}