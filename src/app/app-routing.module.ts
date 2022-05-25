import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './appComponents/dashboard/dashboard.component';
import { ChatComponent } from './appComponents/menu/chat/chat.component';
import { ClassesComponent } from './appComponents/menu/classes/classes.component';
import { LearningPlanComponent } from './appComponents/menu/learning-plan/learning-plan.component';
import { ResourcesComponent } from './appComponents/menu/resources/resources.component';
import { SettingsComponent } from './appComponents/menu/settings/settings.component';
import { PagenotfoundComponent } from './appComponents/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'classes', component:ClassesComponent},
  {path:'resources', component:ResourcesComponent},
  {path:'learning-plan', component:LearningPlanComponent},
  {path:'chat', component:ChatComponent},
  {path:'settings', component:SettingsComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
