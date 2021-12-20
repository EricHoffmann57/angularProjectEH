import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameListComponent} from "./game-list/game-list.component";
import {GameNewComponent} from "./game-new/game-new.component";
import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";
import {GameComponent} from "./game/game.component";
import {GameModifComponent} from "./game-modif/game-modif.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {GameService} from "./services/Game/game.service";
import {DetailPopUpComponent} from "./detail-pop-up/detail-pop-up.component";

const routes: Routes = [
  {
    path:"games",
    component: GameListComponent
  },
  {
    path:"new",
    component: GameNewComponent
  },
  {
    path: "modif/:id",
    component: GameModifComponent
  },
  {
    path: "detail-pop-up/:id",
    component: DetailPopUpComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  declarations:[
  ],
  imports: [
    RouterModule.forRoot(routes)],
  providers: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
