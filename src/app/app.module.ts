import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SupportedgameComponent } from './supportedgame/supportedgame.component';
import { ChallengeeditorComponent } from './challengeeditor/challengeeditor.component';
import { GlobalDataService } from './services/global-data.service';
import { UserdataService } from './services/userdata.service';
import { LoginService } from './services/login.service';
import { AuthService } from './services/auth.service';
import { CallbackComponent } from './callback/callback.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'callback',      component: CallbackComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SupportedgameComponent,
    ChallengeeditorComponent,
    CallbackComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, UserdataService, GlobalDataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
