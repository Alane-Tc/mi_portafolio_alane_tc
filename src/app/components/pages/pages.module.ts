import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { HeaderFooterModule } from '../header-footer/header-footer.module';
import { CertificateUdemyComponent } from './certificates/udemy/certificate-udemy.component';
import { CertificateEdteamComponent } from './certificates/edteam/certificate-edteam.component';
import { CertificateComponent } from './certificates/certificate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // importa CommonModule


@NgModule({
    declarations: [
        AboutMeComponent,
        ContactComponent,
        ExperienceComponent,
        NotFoundComponent,
        ProjectsComponent,
        SkillsComponent,
        CertificateUdemyComponent,
        CertificateEdteamComponent,
        CertificateComponent
    ],
    exports: [
        AboutMeComponent,
        //ContactComponent,
        ExperienceComponent,
        NotFoundComponent,
        ProjectsComponent,
        SkillsComponent,
    ],
    imports: [
        HeaderFooterModule,
        SharedModule,
        FormsModule,
        BrowserModule,
        CommonModule
    ]
})

export class PagesModule { }