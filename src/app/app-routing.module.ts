import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component'

const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent },
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
