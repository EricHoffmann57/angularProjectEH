import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../models/games.model";
import {GameService} from "../services/Game/game.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-game-view',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.scss']
})
export class GameNewComponent implements OnInit {
  public game!: Game;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private Game: GameService
  ) {
  }

  ngOnInit(): void {
    this.game = new Game();
  }

  add() {
    this.Game.saveNewGame(this.game).subscribe(() => {
      this.game = new Game();
    })
  }
}
