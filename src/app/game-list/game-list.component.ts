import { Component, OnInit} from '@angular/core';
import { GameService } from '../services/Game/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games:any;
  filterTerm: any;
  constructor(
    private Game: GameService
  ) {}

  ngOnInit(): void {
    this.Game.getAllGames().subscribe((data: any) => {
      this.games = data;
    });
  }
}
