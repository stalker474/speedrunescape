import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SupportedgameComponent } from './supportedgame/supportedgame.component';
import { ChallengeeditorComponent } from './challengeeditor/challengeeditor.component';
import { GlobalDataService } from './services/global-data.service';
import { UserdataService } from './services/userdata.service';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SupportedgameComponent,
    ChallengeeditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, UserdataService, GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
