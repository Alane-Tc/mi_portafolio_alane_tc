import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api-servise';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ViewCertificate } from './view-certificate/view-certificate.component';

@Component({
    selector: 'app-certificate-edteam',
    templateUrl: './certificate-edteam.component.html',
    styleUrls: ['./certificate-edteam.component.scss']
})
export class CertificateEdteamComponent implements OnInit {
    data: any[] = [];
    isloading = false;

    constructor(
        private apiService: ApiService,
        private dialog: MatDialog
    ) { }

    // openDialog(url: any): void {
    //     const dialogRef = this.dialog.open(ViewCertificate, {
    //         width: '800px',
    //         data: { certUrl: url },
    //     });
    // }

    ngOnInit() {
        this.mostrarLoading();

    }

    mostrarLoading() {
        this.isloading = true;
        setTimeout(() => {
            this.isloading = false;
        }, 2000);
    }
}