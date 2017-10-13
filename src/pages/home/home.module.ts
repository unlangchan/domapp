import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePage } from './home';
import { IonicModule } from 'ionic-angular';

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(HomePage)
    ],
    declarations: [
        HomePage
    ],
    entryComponents: [
        HomePage
    ],
    providers: []
})
export class HomePageModule { }
