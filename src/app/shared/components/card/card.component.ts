import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() titulo: string | undefined;
    @Input() urlImage: string | undefined;
    @Input() subtitulo: string | undefined;
    @Input() url: string | undefined;
    @Input() titulo_del_boton: string | undefined;

    constructor() { }
    ngOnInit(): void { }


}
