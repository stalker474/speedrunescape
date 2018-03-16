import { Component } from '@angular/core';
import { User } from './user';
import { UserdataService } from './services/userdata.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
