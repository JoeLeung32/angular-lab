import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IonicModule} from '@ionic/angular';
import {AccentureModule} from './modules/accenture/accenture.module';
import {FamilyModule} from './modules/family/family.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IonicModule.forRoot(),
        AccentureModule,
        FamilyModule,
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
