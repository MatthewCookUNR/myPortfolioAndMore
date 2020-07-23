import { ChessPiece } from "./ChessPiece";

export class Pawn extends ChessPiece {

  isFirstMovement: boolean;

  constructor(row: number, column: number, isBlack: boolean) {
      super(row,column,isBlack);
      this.isFirstMovement = true;
      this.type = "Pawn";
  }

  //Calculates possible movements for a Pawn chess piece
  calculatePossibleMovements(myChessBoard: string[][] , markMoveBoard: string[][]): void {
    //              BLACK PIECE CODE
    //
    //Check if color is black and not at top of board
    if(this.isBlack && this.row != 0) {
      if(myChessBoard[this.row-1][this.column] == '')
      {
        //Same logic as above
        markMoveBoard[this.row-1][this.column] = "X";
        if(this.isFirstMovement && myChessBoard[this.row-2][this.column] == '') {
          markMoveBoard[this.row-2][this.column] = "X";
        }
      }
    }
    //              WHITE PIECE CODE
    //
    //Check if color is white and not at bottom of board
    else if (!this.isBlack && this.row != 7) {
      //Case 1: Marking spot with no enemy (cyan)
      if(myChessBoard[this.row+1][this.column] == '')
      {
        //Same logic as above
        markMoveBoard[this.row+1][this.column] = "X";
        if(this.isFirstMovement && myChessBoard[this.row+2][this.column] == '') {
          markMoveBoard[this.row+2][this.column] = "X";
        }
      }
    }

  }

  //Method used to mark attacks only on the inputted board
  //Pawns differ from other pieces in that there attacks
  //and movements are on seperate squares
  //Note: Needed for King (check/checkmate) calculations
  calculatePossibleAttacks(myChessBoard: string[][] , markMoveBoard: string[][]) {
    //Black Piece code
    if(this.isBlack && this.row != 0) {
      //Case 1: Marking spot with enemy on left (red)
      if (this.column > 0) 
      {
        if(myChessBoard[this.row-1][this.column-1] =='W' || myChessBoard[this.row-1][this.column-1] =='WK') {
          markMoveBoard[this.row-1][this.column-1] = "R";
        }
        else {
          markMoveBoard[this.row-1][this.column-1] = "T";
        }
      }
      //Case 2: Marking spot with enemy on right (red)
      if(this.column < 7)
      {
        if(myChessBoard[this.row-1][this.column+1] =='W' || myChessBoard[this.row-1][this.column+1] =='WK') {
            markMoveBoard[this.row-1][this.column+1] = "R";
        }
        else {
          markMoveBoard[this.row-1][this.column+1] = "T";
        }
      }
    }
    //White Piece Code
    else if (!this.isBlack && this.row != 7) {
      //Case 1: Marking spot with enemy on left (red)
      if (this.column > 0) 
      {
        if(myChessBoard[this.row+1][this.column-1] =='B' || myChessBoard[this.row+1][this.column-1] =='BK') {
          markMoveBoard[this.row+1][this.column-1] = "R";
        }
        else {
          markMoveBoard[this.row+1][this.column-1] = "T";
        }
      }
      //Case 2: Marking spot with enemy on right (red)
      if(this.column < 7)
      {
        if(myChessBoard[this.row+1][this.column+1] =='B' || myChessBoard[this.row+1][this.column+1] =='BK') {
            markMoveBoard[this.row+1][this.column+1] = "R";
        }
        else {
          markMoveBoard[this.row+1][this.column+1] = "T";
        }
      }
    }
  }
  

  firstMoveDone() {
    this.isFirstMovement = false;
  }

}
