import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../services/Game/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() id?: string;
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
  @Input() gameRating?: string;
  @Input() gameFav?: boolean;
  @Input() filterTerm: any
  isFavorite: Boolean = true;


  constructor(
    private Game: GameService
  ) {
  }

  ngOnInit(): void {
  }

  suppr() {
    if (confirm("Are you sure to delete " + this.gameName)) {
      this.Game.delete(this.id);
    }
  }
  getDetail() {

  }

  changeFavorite() {
  }
}
