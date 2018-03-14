import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../services/login.service';
import { UserdataService } from '../services/userdata.service';

class WSResult {
  result: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private userDataService : UserdataService) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
  }

  authUser() {
    this.loginService.authUser(this.user).subscribe(data => this.answer = {
      result: data['result'],
    },(error : any) => {},() => {this.user.connected = this.answer.result == "OK";});
  }

  createUser() {
    this.loginService.createUser(this.user).subscribe(data => this.answer = {
      result: data['result'],
    },(error : any) => {},() => {this.user.connected = this.answer.result == "OK";});
  }

  user: User;

  answer : WSResult = { result : "" };
}
