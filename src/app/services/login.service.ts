import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { User,Accept } from '../user';

export interface Challenge {
  name: string;
  iconurl: string;
}

export interface Game {
  name: string;
  supportshiscores: boolean;
  supportsplaytime: boolean;
  supportsantipay2win: boolean;
  supportsanticoop: boolean;
  supportsquests: boolean;
  supportsautoaccount: boolean;
  supportsanticheat: boolean;
  website: string;
  playlink: string;
  iconurl: string;
  challenges: Challenge[];
}

export interface SupportedGamesResponse {
  result: string;
  games: Game[];
}

export interface CreateChallenge {
	username :          string;
	opponent :          string;
	game :              string;
	challenges :		    string[];	
}

export interface PrivateChallengeData {
	email : string;
  password : string;
  username : string;
}

export interface ChallengeData {
	status : string;
  creator : string;
  winnercreator : boolean;
	game : Game;
	id : number;
	private: PrivateChallengeData;
}

export interface ChallengesListResponse {
	result : string;
	challenges : ChallengeData[];
}

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  authUser(usr : User): Observable<Object> {
    return this.http.post(this.authenticateWS,JSON.stringify(usr));
  }

  createUser(usr : User): Observable<Object> {
    return this.http.post(this.createUserWS,JSON.stringify(usr));
  }

  createChallenge(usr : User, game : Game, challenge : Challenge, opponentUsername : string): Observable<Object> {
    var newChallenge : CreateChallenge = {
      username : usr.username,
      game : game.name,
      opponent : opponentUsername,
      challenges :  [challenge.name,]
    };

    return this.http.post(this.createChallengeWS,JSON.stringify(newChallenge));
  }

  getSupportedGames(): Observable<SupportedGamesResponse> {
    return this.http.get<SupportedGamesResponse>(this.supportedGamesWS);
  }

  getMyCurrentChallenges(usr : User) : Observable<ChallengesListResponse> {
    return this.http.post<ChallengesListResponse>(this.myCurrentChallengesWS,JSON.stringify(usr));
  }

  getUserByName(name : string) : Observable<Object> {
    var usr : User = {username : name, password : "", connected : false};
    return this.http.post(this.findUserWS, JSON.stringify(usr));
  }

  acceptChallenge(usr : User, id : number) : Observable<Object> {
    var accept : Accept = { username : usr.username, id : id}
    return this.http.post(this.challengeAcceptWS,JSON.stringify(accept));
  }

  declineChallenge(usr : User, id : number) : Observable<Object> {
    var decline : Accept = { username : usr.username, id : id}
    return this.http.post(this.challengeDeclineWS,JSON.stringify(decline));
  }

  terminateChallenge(usr : User, id : number) : Observable<Object> {
    var accept : Accept = { username : usr.username, id : id}
    return this.http.post(this.challengeTerminateWS,JSON.stringify(accept));
  }

  authenticateWS = "https://speedrunescape.cleverapps.io/authenticate";
  createUserWS = "https://speedrunescape.cleverapps.io/createuser";
  supportedGamesWS = "https://speedrunescape.cleverapps.io/supportedgames";
  findUserWS = "https://speedrunescape.cleverapps.io/finduser";
  createChallengeWS = "https://speedrunescape.cleverapps.io/newchallenge";
  myCurrentChallengesWS = "https://speedrunescape.cleverapps.io/mychallenges";
  challengeAcceptWS = "https://speedrunescape.cleverapps.io/accept";
  challengeDeclineWS = "https://speedrunescape.cleverapps.io/decline";
  challengeTerminateWS = "https://speedrunescape.cleverapps.io/terminate";
}
