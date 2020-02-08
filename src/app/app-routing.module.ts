import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfessorsPageComponent } from './professors-page/professors-page.component';
import { SelectClassesComponent } from './select-classes/select-classes.component';
import { RecordPageComponent } from './record-page/record-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivateAreaComponent } from './private-area/private-area.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'teachers', component: ProfessorsPageComponent},
  { path: 'classes/:id', component: SelectClassesComponent},
  { path: 'record', component: RecordPageComponent},
  { path: 'reserved-area', component: PrivateAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
