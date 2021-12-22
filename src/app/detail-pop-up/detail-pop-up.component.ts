import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {GameService} from "../services/Game/game.service";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-detail-pop-up',
  templateUrl: './detail-pop-up.component.html',
  styleUrls: ['./detail-pop-up.component.scss']
})
export class DetailPopUpComponent implements OnInit {
  @Output() public output: EventEmitter<boolean> = new EventEmitter<boolean>();
  game: any = null;
  constructor(
    private Game: GameService,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<DetailPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.game = data.game
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.getGameById();
  }
  getGameById(){
    const id = this.route.snapshot.params['id'];
    this.Game.get(id).subscribe((value: any) => {
      console.log(value)
      this.game = value;
    });
  }
}
