import {Component, OnInit, Input} from '@angular/core';
import { GameService } from '../services/Game/game.service';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {DetailPopUpComponent} from "../detail-pop-up/detail-pop-up.component";
import {ActivatedRoute} from "@angular/router";


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
  game:any;
  change: boolean = false;
  constructor(
    private Game: GameService,
    private dialogRef: MatDialog,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getGameById();
  }
  getGameById():any{
    const id = this.route.snapshot.params['id'];
    this.Game.get(id).subscribe((value: any) => {
      this.game = value;
    });
  }

  addToFavorite(clicked_id) {
    //console.log(clicked_id);
    this.Game.get(clicked_id).subscribe((value: any) => {
      this.game = value;
      if (clicked_id) {
        this.gameFav = !this.gameFav;
      }
        if(this.gameFav !== this.game.favorite) {
          this.game.favorite = this.gameFav;
          this.Game.update(this.game).subscribe(() => {
            this.change = true;
            setTimeout(() => {
              this.change = false;
            }, 3000);
          })
        }

    });
  }
  suppr() {
    if (confirm("Are you sure to delete " + this.gameName)) {
      this.Game.delete(this.id);
    }
  }

  openDialog(){
    this.dialogRef.open(DetailPopUpComponent,{
      //no focus on first element
      autoFocus: false,
      //for scrollable modal on mobile
      maxHeight: window.innerHeight + 'px',
      data:{
        title: this.gameName,
        type: this.gameType,
        editor: this.gameEditor,
        developer: this.gameDev,
        composer: this.gameOst,
        date: this.gameReleaseDate,
        system: this.gamePlatform,
        play: this.gamePlaytime,
        story: this.gameDescription,
      }
    });
  }
}
