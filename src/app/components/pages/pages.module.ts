import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { HeaderFooterModule } from '../header-footer/header-footer.module';

@NgModule({
    declarations: [
        AboutMeComponent,
        ContactComponent,
        ExperienceComponent,
        NotFoundComponent,
        ProjectsComponent,
        SkillsComponent
    ],
    exports: [
        AboutMeComponent,
        ContactComponent,
        ExperienceComponent,
        NotFoundComponent,
        ProjectsComponent,
        SkillsComponent
    ],
    imports: [
        HeaderFooterModule
    ]
})

export class PagesModule { }