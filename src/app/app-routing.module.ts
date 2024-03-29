import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component'
import { ContactComponent } from './components/pages/contact/contact.component'
import { CertificateUdemyComponent } from './components/pages/certificates/udemy/certificate-udemy.component';
import { CertificateEdteamComponent } from './components/pages/certificates/edteam/certificate-edteam.component';
import { CertificateComponent } from './components/pages/certificates/certificate.component';

const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent },
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'certificados', component: CertificateComponent },
  { path: 'certificados/udemy', component: CertificateUdemyComponent },
  { path: 'certificados/edteam', component: CertificateEdteamComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
