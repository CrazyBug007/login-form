import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppViewComponent } from './app-view/app-view.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppPortalComponent } from './app-portal/app-view.component';

const routes: Routes = [
  {
    component:RegistrationComponent,
    path:''
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:AppPortalComponent,
    path:'app-portal'
  },
  {
    component:AppViewComponent,
    path:'app-view/:appName'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [RegistrationComponent, LoginComponent, AppViewComponent, AppViewComponent];
