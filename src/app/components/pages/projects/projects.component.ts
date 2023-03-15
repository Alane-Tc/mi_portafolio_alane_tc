import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api-servise';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedOption: string = 'seleccion_proyecto';
  clase_animacion = 'animate__animated animate__slideInLeft';
  data: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getResultados("https://localhost:44375/api/Project/api/GetProjectsPersonalProject").subscribe((data) => {
      
      console.log(data);
      this.data.push(data);
    });
    console.log('data',this.data);
  }


}
