import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api-servise';

@Component({
    selector: 'app-certificate-edteam',
    templateUrl: './certificate-edteam.component.html',
    styleUrls: ['./certificate-edteam.component.scss']
})
export class CertificateEdteamComponent implements OnInit {
    data: any[] = [];
    isloading = false;

    constructor(private apiService: ApiService) { }
    
    ngOnInit() {
        // this.apiService.getResultados("https://localhost:44375/api/Certificates/api/GetCertificateEdteam").subscribe((data) => {
        //     this.data.push(data);
        // });
        this.mostrarLoading();

    }

    mostrarLoading() {
        this.isloading = true;
        setTimeout(() => {
            this.isloading = false;
        }, 2000);
    }
}