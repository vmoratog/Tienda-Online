import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './../material/material.module'


const externalResources = [
  ExponentialPipe,
  HighlightDirective,
  FooterComponent,
  HeaderComponent,
]

@NgModule({
  declarations: externalResources,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ...externalResources,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
