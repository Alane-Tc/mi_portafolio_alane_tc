import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPDF() {
    window.open('https://cdn-files-occ.s3.amazonaws.com/documents/yc/YCJfV7Ia_Kh2E84D8ku3zQ2/resumefile/CV-ALAN-EDUARDO-TAMEZ-CABELLO_ACT.2023.pdf?AWSAccessKeyId=AKIAVBUMCCY2NGVEAT5Y&Expires=1715908335&Signature=oRnETr69pgzH68rP%2Fag4YwYo00A%3D', '_blank');
  }
}
