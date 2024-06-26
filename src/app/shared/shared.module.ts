import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderFooterModule } from "../components/header-footer/header-footer.module";
import { CardComponent } from "./components/card/card.component";
import { LoadingComponent } from "./components/loading/loading.component";
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    declarations: [
        CardComponent,
        LoadingComponent
    ],
    exports: [
        CardComponent,
        LoadingComponent
    ],
    imports: [
        HeaderFooterModule,
        CommonModule,
        MatDialogModule
    ]
})
export class SharedModule { }