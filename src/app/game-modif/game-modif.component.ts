import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/Game/game.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-modif',
  templateUrl: './game-modif.component.html',
  styleUrls: ['./game-modif.component.scss']
})
export class GameModifComponent implements OnInit {
  game: any = null;
  change: boolean = false;


  constructor(
    private Game: GameService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getGameById();
  }
  getGameById(){
    const id = this.route.snapshot.params['id'];
    this.Game.get(id).subscribe((value: any) => {
      this.game = value;
    });
  }
  modif() {
    this.Game.update(this.game).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}
