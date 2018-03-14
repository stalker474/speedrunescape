import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../services/login.service';

@Component({
  selector: 'app-supportedgame',
  templateUrl: './supportedgame.component.html',
  styleUrls: ['./supportedgame.component.css']
})
export class SupportedgameComponent implements OnInit {

  constructor() {
    this.showDetails = false;
   }

  ngOnInit() {
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  newChallenge() {
    this.notify.emit(this.game);
  }

  showDetails : boolean;

  @Input() game: Game;
  @Output() notify: EventEmitter<Game> = new EventEmitter<Game>();

}
