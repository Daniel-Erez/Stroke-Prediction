import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginfieldsComponent } from './loginfields/loginfields.component';
import { RegisterfieldsComponent } from './registerfields/registerfields.component';
import { NoneComponent } from './none/none.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginfieldsComponent,
    RegisterfieldsComponent,
    NoneComponent,
    HomeComponent,
    ProfileComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
