import { Component, OnInit } from '@angular/core';
import { LoginService, SupportedGamesResponse, Game, ChallengesListResponse, ChallengeData } from '../services/login.service';
import { UserdataService } from '../services/userdata.service';
import {Observable} from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { SupportedgameComponent } from '../supportedgame/supportedgame.component';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService, private userDataService : UserdataService) {
    this.selectedGame = null;
   }

  ngOnInit() {
     this.loginService.getSupportedGames().subscribe(u => this.supportedGames = u);
     let timer = Observable.timer(0,1000);
    timer.subscribe(t=> this.refreshList());
    this.currentUser = this.userDataService.getUser();
  }

  refreshList() {
    this.loginService.getMyCurrentChallenges(this.currentUser).subscribe(u => this.currentChallenges = u);
  }

  onNotify(selectedGame : Game):void {
    this.selectedGame = selectedGame;
  }

  onNotifyCancel() : void {
    this.selectedGame = null;
  }

  accept(id : number) {
    this.loginService.acceptChallenge(this.currentUser,id).subscribe(u => console.log(u));
  }

  decline(id : number) {
    this.loginService.declineChallenge(this.currentUser,id).subscribe(u => console.log(u));
  }

  terminate(id : number) {
    this.loginService.terminateChallenge(this.currentUser,id).subscribe(u => console.log(u));
  }

  supportedGames : SupportedGamesResponse;
  currentChallenges : ChallengesListResponse;
  selectedGame : Game;
  currentUser : User;
}
