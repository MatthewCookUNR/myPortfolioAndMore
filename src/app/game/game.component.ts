import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, AfterContentInit, AfterViewInit } from '@angular/core';
import {TicTacToeComponent} from './tic-tac-toe/tic-tac-toe.component';
import { ChessComponent } from './chess/chess.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, AfterViewInit {
  @ViewChild("games", { read: ViewContainerRef }) container;
  gamePlayerId : any;
  currentGameId: any;
  componentRef: ComponentRef<any>;


  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy() {
    this.componentRef.destroy();    
  }
  
  newGame(gameType) {
    this.container.clear();
    let factory: ComponentFactory<any>;
    try {
      if( gameType === "TicTacToe" ) {
        factory = this.resolver.resolveComponentFactory(TicTacToeComponent);
      }
      else if(gameType === "Chess") {
        factory = this.resolver.resolveComponentFactory(ChessComponent);
      }
      else {
        throw new Error("Not valid game type");
      }
      this.componentRef = this.container.createComponent(factory);
    }
    catch(error) {
      console.log(error);
    }
  }

}
