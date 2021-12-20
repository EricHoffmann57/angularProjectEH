import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GameService} from '../services/Game/game.service';
import {Router} from "@angular/router";
import {style} from "@angular/animations";
import {DetailPopUpComponent} from "../detail-pop-up/detail-pop-up.component";


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games!: any;
  filterTerm: any;
  selected: any;
  options: any = ['Sort filters', 'AZ', 'ZA', 'Most recent', 'rating', 'Favorite games', 'Good games'];

  @ViewChild('mySelect') form;

  constructor(
    private Game: GameService,
    private route: Router
  ) {
  }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.Game.getAllGames().subscribe((data: any) => {
      this.games = data;
    });
  }

  openGameDetails(id: string): void {
    this.route.navigate(['details', id]);
  }

  getGameSelection() {
    let selectedVal = this.options.findIndex(item => item === this.selected);
    // sort items in array by custom criteria
    if (selectedVal === 1) {
      this.games.sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    }
    if (selectedVal === 2) {
      this.games.sort(function (a, b) {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
        return 0;
      });
    }
    if (selectedVal === 3) {
      this.games.sort(function (a, b) {
        if (a.releaseDate > b.releaseDate) return -1;
        if (a.releaseDate < b.releaseDate) return 1;
        return 0;
      });
    }
    if (selectedVal === 4) {
      this.games.sort(function (a, b) {
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
        return 0;
      });
    }
    if (selectedVal === 5) {
      this.games = this.games.filter(
        game => game.favorite === true);
    }
    if (selectedVal === 6) {
      this.games = this.games.filter(
        game => game.favorite === false);
    }
    if (selectedVal === 0) {
      this.getGames();
    }
  }

  resetSelection() {
    this.getGames()
    this.selected = 0;
  }
}
