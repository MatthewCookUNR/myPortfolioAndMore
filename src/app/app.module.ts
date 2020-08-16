import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { GameComponent } from './game/game.component';
import { TicTacToeComponent } from './game/tic-tac-toe/tic-tac-toe.component';
import { ChessComponent } from './game/chess/chess.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProjectsComponent,
    GameComponent,
    TicTacToeComponent,
    ChessComponent,
    ExperienceComponent,
    AboutMeComponent
  ],
  entryComponents: [TicTacToeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
