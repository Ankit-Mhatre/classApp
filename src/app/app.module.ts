import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './appComponents/dashboard/dashboard.component';
import { SidebarComponent } from './appComponents/sidebar/sidebar.component';
import { StudentComponent } from './appComponents/student/student.component';
import { ClassesComponent } from './appComponents/menu/classes/classes.component';
import { ResourcesComponent } from './appComponents/menu/resources/resources.component';
import { LearningPlanComponent } from './appComponents/menu/learning-plan/learning-plan.component';
import { ChatComponent } from './appComponents/menu/chat/chat.component';
import { SettingsComponent } from './appComponents/menu/settings/settings.component';
import { PagenotfoundComponent } from './appComponents/pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    StudentComponent,
    ClassesComponent,
    ResourcesComponent,
    LearningPlanComponent,
    ChatComponent,
    SettingsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProgressbarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
