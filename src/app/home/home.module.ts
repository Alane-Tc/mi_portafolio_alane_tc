import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderFooterModule } from '../components/header-footer/header-footer.module';
import { PagesModule } from '../components/pages/pages.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        HomeComponent
    ],
    exports:[
        HomeComponent,
    ],
    imports:[
        HeaderFooterModule,
        PagesModule,
        SharedModule
    ]
})

export class HomeModule{}