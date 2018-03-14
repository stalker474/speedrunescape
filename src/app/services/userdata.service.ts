import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable()
export class UserdataService {

  constructor() {
    this.currentUser = {username : "tester", password : "tester", connected : false};
   }

  getUser() : User {
    return this.currentUser;
  }

  setUser(user : User) {
    this.currentUser = user;
  }

  currentUser : User;

}
