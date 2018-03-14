import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game, Challenge, LoginService } from '../services/login.service';
import { UserdataService } from '../services/userdata.service';
import { User } from '../user';

class WSResult {
  result: string;
}

@Component({
  selector: 'app-challengeeditor',
  templateUrl: './challengeeditor.component.html',
  styleUrls: ['./challengeeditor.component.css']
})
export class ChallengeeditorComponent implements OnInit {

  constructor(private loginService: LoginService, private userDataService : UserdataService) {
    this.challenge = null;
    this.validatedOpponent = false;
    this.validatedChallenge = false;
   }

  ngOnInit() {
  }

  selectChallenge(challenge : Challenge) {
    this.challenge = challenge;
  }

  findOpponent(opponent : string) {
    this.loginService.getUserByName(opponent).subscribe(data => this.answer = {
      result: data['result'],
    },(error : any) => {},() => {
      this.validatedOpponent = this.answer.result == "OK";
    });
  }

  validate() {
    this.loginService.createChallenge(this.userDataService.getUser(), this.game, this.challenge, this.opponent).subscribe(data => this.answer = {
      result: data['result'],
    },(error : any) => {},() => {
      this.validatedChallenge = this.answer.result == "OK";
    });
  }

  return() {
    this.notify.emit();
  }

  challenge : Challenge;
  opponent : string;
  validatedOpponent : boolean;
  validatedChallenge : boolean;
  answer : WSResult = { result : "" };

  @Input() game: Game;
  @Output() notify: EventEmitter<void> = new EventEmitter<void>();

}
