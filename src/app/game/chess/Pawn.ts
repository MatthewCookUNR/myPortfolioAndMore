import { ChessPiece } from "./ChessPiece";

export class Pawn extends ChessPiece {

  isFirstMovement: boolean;

  constructor(row: number, column: number, isBlack: boolean) {
      super(row,column,isBlack);
      this.isFirstMovement = true;
      this.type = "Pawn";
  }

  calculatePossibleMovements(myChessBoard: string[][]): void {
    //Check if color is black and not at top of board
    if(this.isBlack && this.row != 0) {
      if(myChessBoard[this.row-1][this.column] != 'B')
      {
        //Can move to this spot
        //Mark in move map/possible moves map (check if possible move where clicked)
        //Highlight square where can move
        this.possibleMoveBoard[this.row-1][this.column] = "X";

        //Check if first movement for extra space rule
        if(this.isFirstMovement) {
          this.possibleMoveBoard[this.row-2][this.column] = "X";
        }
        this.markPossibleMoveBoard();
      }
    }
    //Check if color is black and not at bottom of board
    else if (!this.isBlack && this.row != 7) {
      if(myChessBoard[this.row+1][this.column] != 'W')
      {
        //Same logic as above
        this.possibleMoveBoard[this.row+1][this.column] = "X";
        if(this.isFirstMovement) {
          this.possibleMoveBoard[this.row+2][this.column] = "X";
        }
        this.markPossibleMoveBoard();
      }
    }
  }

  firstMoveDone() {
    this.isFirstMovement = false;
  }

}