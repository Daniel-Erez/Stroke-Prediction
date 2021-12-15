import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

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
import { NoTestsComponent } from './no-tests/no-tests.component';
import { LogoPageComponent } from './logo-page/logo-page.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule,],
  providers: [ {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
 }],
  bootstrap: [AppComponent],
})
export class AppModule {}
