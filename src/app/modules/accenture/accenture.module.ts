import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JoeComponent} from '../../components/joe/joe.component';
import {EmilyComponent} from '../../components/emily/emily.component';
import {ProjectAiaComponent} from './project-aia/project-aia.component';
import {ProjecctMtrComponent} from './projecct-mtr/projecct-mtr.component';
import {SkillsModule} from '../skills/skills.module';

@NgModule({
    declarations: [
        JoeComponent,
        EmilyComponent,
        ProjectAiaComponent,
        ProjecctMtrComponent,
    ],
    exports: [
        JoeComponent,
        EmilyComponent,
        ProjectAiaComponent,
        ProjecctMtrComponent,
    ],
    imports: [
        CommonModule,
        SkillsModule,
    ]
})
export class AccentureModule {
}
