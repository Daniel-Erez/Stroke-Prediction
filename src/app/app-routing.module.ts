import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginfieldsComponent } from './loginfields/loginfields.component';
import { NoneComponent } from './none/none.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginfieldsComponent,
  },
  { path: "", component: HomeComponent },
  { path: "logo", component: NoneComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
