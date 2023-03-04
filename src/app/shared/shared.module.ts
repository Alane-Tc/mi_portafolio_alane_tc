import { NgModule } from "@angular/core";
import { HeaderFooterModule } from "../components/header-footer/header-footer.module";
import { CardComponent } from "./components/card/card.component";

@NgModule({
    declarations: [
        CardComponent,
    ],
    exports: [
        CardComponent,
    ],
    imports: [
        HeaderFooterModule,
    ]
})
export class SharedModule { }