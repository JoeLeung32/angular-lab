import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoesComponent } from './joes/joes.component';
import { AccentureModule } from '../accenture/accenture.module';
// import { JoeComponent } from '../../components/joe/joe.component';
// import { EmilyComponent } from '../../components/emily/emily.component';

@NgModule({
  declarations: [
    JoesComponent,
    // JoeComponent,
    // EmilyComponent,
  ],
  exports: [
    JoesComponent,
    // JoeComponent,
    // EmilyComponent,
  ],
  imports: [
    CommonModule,
    AccentureModule,
  ]
})
export class FamilyModule { }
