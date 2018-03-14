import { Component } from '@angular/core';
import { User } from './user';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private userDataService: UserdataService) { }

  isConnected() {
    return this.userDataService.getUser().connected;
  }
}
