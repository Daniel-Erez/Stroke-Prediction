import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LoginfieldsComponent } from "./loginfields/loginfields.component";
import { RegisterfieldsComponent } from "./registerfields/registerfields.component";
import { NoneComponent } from "./none/none.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { TestComponent } from './test/test.component';
import { NoTestsComponent } from './profile/no-tests.component';
import { LogoPageComponent } from './logo-page/logo-page.component';
import { AboutComponent } from './about/about.component';
import { DanielComponent } from './developers/daniel.component';
import { LisaComponent } from './developers/lisa.component';
import { MaayanComponent } from './developers/maayan.component';
import { SapirComponent } from './developers/sapir.component';
import { OriComponent } from './developers/ori.component';
import { NoServiceMSGComponent } from './no-service-msg/no-service-msg.component';

if (window.sessionStorage.getItem("log") == null) {
  window.sessionStorage.setItem("log", "false");
}

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
    TestComponent,
    NoTestsComponent,
    LogoPageComponent,
    AboutComponent,
    DanielComponent,
    LisaComponent,
    MaayanComponent,
    SapirComponent,
    OriComponent,
    NoServiceMSGComponent,
  ],
  imports: [HttpClientModule,BrowserModule, AppRoutingModule,],
  providers: [ {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
 }],
  bootstrap: [AppComponent],
})
export class AppModule {}
