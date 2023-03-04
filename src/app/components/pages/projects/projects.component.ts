import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedOption: string = 'seleccion_proyecto';
  clase_animacion = 'animate__animated animate__slideInLeft';
  constructor() { }

  ngOnInit(): void {
  }
}
