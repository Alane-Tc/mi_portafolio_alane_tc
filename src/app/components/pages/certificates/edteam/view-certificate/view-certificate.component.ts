import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-certificate',
  templateUrl: './view-certificate.component.html',
  styleUrls: ['./view-certificate.component.scss']
})
export class ViewCertificate {
  isloading = false;

  constructor(
    public dialogRef: MatDialogRef<ViewCertificate>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.mostrarLoading();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  mostrarLoading() {
    this.isloading = true;
    setTimeout(() => {
        this.isloading = false;
    }, 1000);
}

}