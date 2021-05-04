import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
// import { EmilyComponent } from '../../components/emily/emily.component';

@NgModule({
  declarations: [
    // EmilyComponent,
    BackendComponent,
    FrontendComponent,
  ],
  exports: [
    // EmilyComponent,
    FrontendComponent,
    BackendComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SkillsModule { }
