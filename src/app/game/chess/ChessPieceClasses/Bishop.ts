import { ChessPiece } from "./ChessPiece";

export class Bishop extends ChessPiece {
  
  constructor(row: number, column: number, isBlack: boolean) {
    super(row,column,isBlack);
    this.type = "Bishop";
  }

  //Calculates possible movements and marks possibleMove 2D array
  calculatePossibleMovements(myChessBoard: string[][]): void {
    
    //Supporting functions used to modularize method
    this.calculatePossibleDownRightDiagMovements(myChessBoard);
    this.calculatePossibleDownLeftDiagMovements(myChessBoard);
    this.calculatePossibleUpLeftDiagMovements(myChessBoard);
    this.calculatePossibleUpRightDiagMovements(myChessBoard);
    this.markPossibleMoveBoard();
  }

  //Calculate all possible movements in down right diagonal direction
  calculatePossibleDownRightDiagMovements(myChessBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;
    let tempCol: number = this.column;

    while(!enemyFound && !sameColorFound) {
      if( (tempRow < 7) && (tempCol < 7)) {
        if(myChessBoard[tempRow+1][tempCol+1] == '') {
          this.possibleMoveBoard[tempRow+1][tempCol+1] = 'X';
          tempRow++;
          tempCol++;
        }
        else if(!this.isBlack && (myChessBoard[tempRow+1][tempCol+1] == 'B' ||myChessBoard[tempRow+1][tempCol+1] == 'BK')) {
          this.possibleMoveBoard[tempRow+1][tempCol+1] = 'R';
          tempRow++;
          tempCol++;
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow+1][tempCol+1] == 'W' ||myChessBoard[tempRow+1][tempCol+1] == 'WK')) {
          this.possibleMoveBoard[tempRow+1][tempCol+1] = 'R';
          tempRow++;
          tempCol++;
          enemyFound = true;
        }
        else {
          sameColorFound = true;
        }
      }
      else {
        break;
      }
    }
  }

  //Calculate all possible movements in down left diagonal direction
  calculatePossibleDownLeftDiagMovements(myChessBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;
    let tempCol: number = this.column;

    while(!enemyFound && !sameColorFound) {
      if( (tempRow < 7) && (tempCol > 0)) {
        if(myChessBoard[tempRow+1][tempCol-1] == '') {
          this.possibleMoveBoard[tempRow+1][tempCol-1] = 'X';
          tempRow++;
          tempCol--;
        }
        else if(!this.isBlack && (myChessBoard[tempRow+1][tempCol-1] == 'B' ||myChessBoard[tempRow+1][tempCol-1] == 'BK')) {
          this.possibleMoveBoard[tempRow+1][tempCol-1] = 'R';
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow+1][tempCol-1] == 'W' ||myChessBoard[tempRow+1][tempCol-1] == 'WK')) {
          this.possibleMoveBoard[tempRow+1][tempCol-1] = 'R';
          enemyFound = true;
        }
        else {
          sameColorFound = true;
        }
      }
      else {
        break;
      }
    }
  }

  //Calculate all possible movements in up right diagonal direction
  calculatePossibleUpRightDiagMovements(myChessBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;
    let tempCol: number = this.column;

    while(!enemyFound && !sameColorFound) {
      if( (tempRow > 0) && (tempCol < 7)) {
        if(myChessBoard[tempRow-1][tempCol+1] == '') {
          this.possibleMoveBoard[tempRow-1][tempCol+1] = 'X';
          tempRow--;
          tempCol++;
        }
        else if(!this.isBlack && (myChessBoard[tempRow-1][tempCol+1] == 'B' ||myChessBoard[tempRow-1][tempCol+1] == 'BK')) {
          this.possibleMoveBoard[tempRow-1][tempCol+1] = 'R';
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow-1][tempCol+1] == 'W' ||myChessBoard[tempRow-1][tempCol+1] == 'WK')) {
          this.possibleMoveBoard[tempRow-1][tempCol+1] = 'R';
          enemyFound = true;
        }
        else {
          sameColorFound = true;
        }
      }
      else {
        break;
      }
    }
  }

  //Calculate all possible movements in up left diagonal direction
  calculatePossibleUpLeftDiagMovements(myChessBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;
    let tempCol: number = this.column;

    while(!enemyFound && !sameColorFound) {
      if( (tempRow > 0) && (tempCol > 0)) {
        if(myChessBoard[tempRow-1][tempCol-1] == '') {
          this.possibleMoveBoard[tempRow-1][tempCol-1] = 'X';
          tempRow--;
          tempCol--;
        }
        else if(!this.isBlack && (myChessBoard[tempRow-1][tempCol-1] == 'B' ||myChessBoard[tempRow-1][tempCol-1] == 'BK')) {
          this.possibleMoveBoard[tempRow-1][tempCol-1] = 'R';
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow-1][tempCol-1] == 'W' ||myChessBoard[tempRow-1][tempCol-1] == 'WK')) {
          this.possibleMoveBoard[tempRow-1][tempCol-1] = 'R';
          enemyFound = true;
        }
        else {
          sameColorFound = true;
        }
      }
      else {
        break;
      }
    }
  }

}