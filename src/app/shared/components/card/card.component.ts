import { Component, Input, OnInit } from '@angular/core';
//import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ViewCertificate } from 'src/app/components/pages/certificates/edteam/view-certificate/view-certificate.component';
import { MatDialog } from '@angular/material/dialog';
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
    @Input() urlCertificado: string | undefined;

    constructor(
        private dialog: MatDialog
    ) { }
    ngOnInit(): void { }

    openDialog(url: any): void {
        const dialogRef = this.dialog.open(ViewCertificate, {
            width: '800px',
            data: { certUrl: url },
        });
    }

}
