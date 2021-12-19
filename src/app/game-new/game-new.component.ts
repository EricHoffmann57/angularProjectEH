import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../models/games.model";
import {GameService} from "../services/Game/game.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-game-view',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.scss']
})
export class GameNewComponent implements OnInit {
  public game!: Game;
  form: FormGroup;
  registerForm: boolean= true;

  constructor(
    private fb: FormBuilder,
    private Game: GameService
  ) {
  }

  ngOnInit(): void {
    this.game = new Game();
    this.form = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      editor: ['', Validators.required],
      developer: ['', Validators.required],
      composer: ['', Validators.required],
      artwork: ['', Validators.required],
      platform: ['', Validators.required],
      releaseDate: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern('^(19|20)\d{2}$'),
        ]
      ],
      lifespan: ['', Validators.required],
      rating: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(5),
        Validators.pattern('^\\⭐{1,5}$'),
       ]
      ],
      favorite: this.fb.group({
        favorite: [['favorite'], Validators.required]
      }),
    })
  }

  add() {
    this.Game.saveNewGame(this.game).subscribe(() => {
      this.game = new Game();
    })
  }
  onReset(): void {
    this.registerForm = false;
    this.form.reset();
  }
}
