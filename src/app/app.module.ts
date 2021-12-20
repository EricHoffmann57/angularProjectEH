import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GameService} from "./services/Game/game.service";
import { GameListComponent } from './game-list/game-list.component';
import { GameModifComponent } from './game-modif/game-modif.component';
import { GameNewComponent } from './game-new/game-new.component';
import { HomeComponent } from './home/home.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from "../environments/environment";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import { DetailPopUpComponent } from './detail-pop-up/detail-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameListComponent,
    GameModifComponent,
    GameNewComponent,
    HomeComponent,
    DetailPopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    NgMaterialModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatGridListModule,
    FlexModule,
    MatListModule,
    Ng2SearchPipeModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
