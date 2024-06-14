import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-certificate-edteam',
    templateUrl: './certificate-edteam.component.html',
    styleUrls: ['./certificate-edteam.component.scss']
})
export class CertificateEdteamComponent implements OnInit {
    data: any[] = [];
    isloading = false;

    constructor(private dialog: MatDialog) { }

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