import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../services/Game/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() id?: string ;
  @Input() gameName?: string;
  @Input() gameType?: string;
  @Input() gameEditor?: string;
  @Input() gameDev?: string;
  @Input() gamePlatform?: string;
  @Input() gameArt?: string;
  @Input() gameReleaseDate?: string;
  @Input() gameOst?: string;
  @Input() gameDescription?: string;
  @Input() gamePlaytime?: string;
  @Input() gameRanking?: string;
  @Input() gameFav?: boolean;
  @Input() filterTerm:any
  @Input() games:any;
  isActive = false;

  constructor(
    private Game: GameService
  ) { }

  ngOnInit(): void {
  }

  getOnAir() {
    return this.gameFav;
  }

  onWatchFilm() {
    console.log('Je regarde le Film');
  }

  changeColor() {
    return this.gameFav ? 'purple' : 'red';
  }

  onSwitch() {
    // this.Film.switchOnAir(this.index);
  }
  suppr(){
    this.Game.delete(this.id)
  }
}

