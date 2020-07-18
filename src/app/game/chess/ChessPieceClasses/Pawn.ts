import { ChessPiece } from "./ChessPiece";

export class Pawn extends ChessPiece {

  isFirstMovement: boolean;

  constructor(row: number, column: number, isBlack: boolean) {
      super(row,column,isBlack);
      this.isFirstMovement = true;
      this.type = "Pawn";
  }

  calculatePossibleMovements(myChessBoard: string[][] , markMoveBoard: string[][], markAttackBoard: string[][]): void {
    //              BLACK PIECE CODE
    //
    //Check if color is black and not at top of board
    if(this.isBlack && this.row != 0) {
      if(myChessBoard[this.row-1][this.column] == '')
      {
        if(!markAttackBoard) {
          //Same logic as above
          markMoveBoard[this.row-1][this.column] = "X";
          if(this.isFirstMovement && myChessBoard[this.row-2][this.column] != 'W') {
            markMoveBoard[this.row-2][this.column] = "X";
          }
        }
      }
      //Case 2: Marking spot with enemy on left (red)
      if (this.column > 0) 
      {
        if(myChessBoard[this.row-1][this.column-1] =='W' || myChessBoard[this.row-1][this.column-1] =='WK') {
          if(markAttackBoard) {
            markAttackBoard[this.row-1][this.column-1] = "R";
          }
          else {
            markMoveBoard[this.row-1][this.column-1] = "R";
          }
        }
        //If Calculating globally, mark diagonals for King checking
        if(markAttackBoard) {
          if(myChessBoard[this.row-1][this.column-1] == '')
          {
            markMoveBoard[this.row-1][this.column-1] = "X";
          }
        }

      }
      //Case 2: Marking spot with enemy on right (red)
      if(this.column < 7)
      {
        if(myChessBoard[this.row-1][this.column+1] =='W' || myChessBoard[this.row-1][this.column+1] =='WK') {
          if(markAttackBoard) {
            markAttackBoard[this.row-1][this.column+1] = "R";
          }
          else {
            markMoveBoard[this.row-1][this.column+1] = "R";
          }
        }
        //If Calculating globally, mark diagonals for King checking
        if(markAttackBoard) {
          if(myChessBoard[this.row-1][this.column+1] == '')
          {
            markMoveBoard[this.row-1][this.column+1] = "X";
          }
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
        if(!markAttackBoard) {
          //Same logic as above
          markMoveBoard[this.row+1][this.column] = "X";
          if(this.isFirstMovement && myChessBoard[this.row+2][this.column] != 'B') {
            markMoveBoard[this.row+2][this.column] = "X";
          }
        }
      }
      //Case 2: Marking spot with enemy on left (red)
      if (this.column > 0) 
      {
        if(myChessBoard[this.row+1][this.column-1] =='B' || myChessBoard[this.row+1][this.column-1] =='BK') {
          if(markAttackBoard) {
            markAttackBoard[this.row+1][this.column-1] = "R";
          }
          else {
            markMoveBoard[this.row+1][this.column-1] = "R";
          }
        }
        //If Calculating globally, mark diagonals for King checking
        if(markAttackBoard) {
          if(myChessBoard[this.row+1][this.column-1] == '')
          {
            markMoveBoard[this.row+1][this.column-1] = "X";
          }
        }
      }
      //Case 2: Marking spot with enemy on left (red)
      if(this.column < 7)
      {
        if(myChessBoard[this.row+1][this.column+1] =='B' || myChessBoard[this.row+1][this.column+1] =='BK') {
          if(markAttackBoard) {
            markAttackBoard[this.row+1][this.column+1] = "R";
          }
          else {
            markMoveBoard[this.row+1][this.column+1] = "R";
          }
        }
        //If Calculating globally, mark diagonals for King checking
        if(markAttackBoard) {
          if(myChessBoard[this.row+1][this.column+1] == '')
          {
            markMoveBoard[this.row+1][this.column+1] = "X";
          }
        }
      }
    }

  }

  firstMoveDone() {
    this.isFirstMovement = false;
  }

}
