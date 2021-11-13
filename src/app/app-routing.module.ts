import { RegisterfieldsComponent } from './registerfields/registerfields.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginfieldsComponent } from  './loginfields/loginfields.component';
import { NoneComponent } from './none/none.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: "login", component: LoginfieldsComponent },
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterfieldsComponent },
  { path: "profile", component: ProfileComponent },
  { path: "logo", component: NoneComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
