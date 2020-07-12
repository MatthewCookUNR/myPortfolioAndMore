import { ChessPiece } from "./ChessPiece";

export class King extends ChessPiece {
  
  constructor(row: number, column: number, isBlack: boolean) {
    super(row,column,isBlack);
    this.type = "Queen";
  }

  //TBA, movement logic will require determination 
  //of all enemy pieces movement (main code required) i.e. they cannot
  //move into check
  calculatePossibleMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][] ): void {
    
  }

}