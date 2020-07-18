import { ChessPiece } from "./ChessPiece";

export class Knight extends ChessPiece {
  
  constructor(row: number, column: number, isBlack: boolean) {
    super(row,column,isBlack);
    this.type = "Knight";
  }

  //Calculates all possible movements for Rook
  calculatePossibleMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][] ): void {
    this.calculateUpLsMovement(myChessBoard, markBoard, markAttackBoard);
    this.calculateDownLsMovement(myChessBoard, markBoard, markAttackBoard);
    this.calculateLeftLsMovement(myChessBoard, markBoard, markAttackBoard);
    this.calculateRightLsMovement(myChessBoard, markBoard, markAttackBoard);
  }

  //Calculate possible movements in up Ls
  calculateUpLsMovement(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][]  ): void {
    if(this.row-2 >= 0) {
      if(this.column-1 >= 0) {
        if(myChessBoard[this.row-2][this.column-1] == '') {
          markBoard[this.row-2][this.column-1] = 'X'
        }
        else if(!this.isBlack && (myChessBoard[this.row-2][this.column-1] == 'B' || myChessBoard[this.row-2][this.column-1] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row-2][this.column-1] = 'R'
          }
          else {
            markBoard[this.row-2][this.column-1] = 'R'
          }
        }
        else if(this.isBlack && (myChessBoard[this.row-2][this.column-1] == 'W' || myChessBoard[this.row-2][this.column-1] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row-2][this.column-1] = 'R'
          }
          else {
            markBoard[this.row-2][this.column-1] = 'R'
          }        
        }
      }
      if (this.column+1 <= 7) {
        if(myChessBoard[this.row-2][this.column+1] == '') {
          markBoard[this.row-2][this.column+1] = 'X'
        }
        else if(!this.isBlack && (myChessBoard[this.row-2][this.column+1] == 'B' || myChessBoard[this.row-2][this.column+1] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row-2][this.column+1] = 'R'
          }
          else {
            markBoard[this.row-2][this.column+1] = 'R'
          }
        }
        else if(this.isBlack && (myChessBoard[this.row-2][this.column+1] == 'W' || myChessBoard[this.row-2][this.column+1] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row-2][this.column+1] = 'R'
          }
          else {
            markBoard[this.row-2][this.column+1] = 'R'
          }        
        }
      }
    }
  }

  //Calculate possible movements in down Ls
  calculateDownLsMovement(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][]  ): void {
    if(this.row+2 <= 7) {
      if(this.column-1 >= 0) {
        if(myChessBoard[this.row+2][this.column-1] == '') {
          markBoard[this.row+2][this.column-1] = 'X'
        }
        else if(!this.isBlack && (myChessBoard[this.row+2][this.column-1] == 'B' || myChessBoard[this.row+2][this.column-1] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row+2][this.column-1] = 'R'
          }
          else {
            markBoard[this.row+2][this.column-1] = 'R'
          }
        }
        else if(this.isBlack && (myChessBoard[this.row+2][this.column-1] == 'W' || myChessBoard[this.row+2][this.column-1] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row+2][this.column-1] = 'R'
          }
          else {
            markBoard[this.row+2][this.column-1] = 'R'
          }
        }
      }
      if (this.column+1 <= 7) {
        if(myChessBoard[this.row+2][this.column+1] == '') {
          markBoard[this.row+2][this.column+1] = 'X'
        }
        else if(!this.isBlack && (myChessBoard[this.row+2][this.column+1] == 'B' || myChessBoard[this.row+2][this.column+1] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row+2][this.column+1] = 'R'
          }
          else {
            markBoard[this.row+2][this.column+1] = 'R'
          }
        }
        else if(this.isBlack && (myChessBoard[this.row+2][this.column+1] == 'W' || myChessBoard[this.row+2][this.column+1] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row+2][this.column+1] = 'R'
          }
          else {
            markBoard[this.row+2][this.column+1] = 'R'
          }
        }
      }
    }
  }

  //Calculate possible movements in left Ls
  calculateLeftLsMovement(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][]  ): void {

    //White Piece
    if(this.column-2 >= 0) {
      if(this.row-1 >= 0) {
        if(myChessBoard[this.row-1][this.column-2 ] == '') {
          markBoard[this.row-1][this.column-2] = 'X'
        }
        else if(!this.isBlack && (myChessBoard[this.row-1][this.column-2] == 'B' || myChessBoard[this.row-1][this.column-2] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row-1][this.column-2] = 'R'
          }
          else {
            markBoard[this.row-1][this.column-2] = 'R'
          }
        }
        else if(this.isBlack && (myChessBoard[this.row-1][this.column-2] == 'W' || myChessBoard[this.row-1][this.column-2] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row-1][this.column-2] = 'R'
          }
          else {
            markBoard[this.row-1][this.column-2] = 'R'
          }
        }
      }
      if (this.row+1 <= 7) {
        if(myChessBoard[this.row+1][this.column-2] == '') {
          markBoard[this.row+1][this.column-2] = 'X'
        }
        else if(!this.isBlack && (myChessBoard[this.row+1][this.column-2] == 'B' || myChessBoard[this.row+1][this.column-2] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row+1][this.column-2] = 'R'
          }
          else {
            markBoard[this.row+1][this.column-2] = 'R'
          }
        }
        else if(this.isBlack && (myChessBoard[this.row+1][this.column-2] == 'W' || myChessBoard[this.row+1][this.column-2] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row+1][this.column-2] = 'R'
          }
          else {
            markBoard[this.row+1][this.column-2] = 'R'
          }
        }
      }
    }
  }

  //Calculate possible movements in right Ls
  calculateRightLsMovement(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][]  ): void {
    if(this.column+2 <= 7) {
      if(this.row-1 >= 0) {
        if(myChessBoard[this.row-1][this.column+2] == '') {
          markBoard[this.row-1][this.column+2] = 'X'
        }
        else if(!this.isBlack && (myChessBoard[this.row-1][this.column+2] == 'B' || myChessBoard[this.row-1][this.column+2] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row-1][this.column+2] = 'R'
          }
          else {
            markBoard[this.row-1][this.column+2] = 'R'
          }
        }
        else if(this.isBlack && (myChessBoard[this.row-1][this.column+2] == 'W' || myChessBoard[this.row-1][this.column+2] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row-1][this.column+2] = 'R'
          }
          else {
            markBoard[this.row-1][this.column+2] = 'R'
          }
        }
      }
      if (this.row+1 <= 7) {
        if(myChessBoard[this.row+1][this.column+2] == '') {
          markBoard[this.row+1][this.column+2] = 'X'
        }
        else if(!this.isBlack && (myChessBoard[this.row+1][this.column+2] == 'B' || myChessBoard[this.row+1][this.column+2] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row+1][this.column+2] = 'R'
          }
          else {
            markBoard[this.row+1][this.column+2] = 'R'
          }
        }
        else if(this.isBlack && (myChessBoard[this.row+1][this.column+2] == 'W' || myChessBoard[this.row+1][this.column+2] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row+1][this.column+2] = 'R'
          }
          else {
            markBoard[this.row+1][this.column+2] = 'R'
          }
        }
      }
    }
  }

}
