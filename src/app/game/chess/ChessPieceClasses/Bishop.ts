import { ChessPiece } from "./ChessPiece";

export class Bishop extends ChessPiece {
  
  constructor(row: number, column: number, isBlack: boolean, strRep: string) {
    super(row,column,isBlack, strRep);
    this.type = "Bishop";
  }

  //Calculates possible movements and marks possibleMove 2D array
  calculatePossibleMovements(myChessBoard: string[][], markBoard: string[][]): void {

    //Supporting functions used to modularize method
    this.calculatePossibleDownRightDiagMovements(myChessBoard, markBoard);
    this.calculatePossibleDownLeftDiagMovements(myChessBoard, markBoard);
    this.calculatePossibleUpLeftDiagMovements(myChessBoard, markBoard);
    this.calculatePossibleUpRightDiagMovements(myChessBoard, markBoard);
  }

  //Calculate all possible movements in down right diagonal direction
  calculatePossibleDownRightDiagMovements(myChessBoard: string[][], markBoard: string[][] ): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;
    let tempCol: number = this.column;

    while(!enemyFound && !sameColorFound) {
      if( (tempRow < 7) && (tempCol < 7)) {
        if(myChessBoard[tempRow+1][tempCol+1] == '') {
          markBoard[tempRow+1][tempCol+1] = 'X';
          tempRow++;
          tempCol++;
        }
        else if(!this.isBlack && (myChessBoard[tempRow+1][tempCol+1] == 'B' ||myChessBoard[tempRow+1][tempCol+1] == 'BK')) {
          markBoard[tempRow+1][tempCol+1] = 'R';
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow+1][tempCol+1] == 'W' ||myChessBoard[tempRow+1][tempCol+1] == 'WK')) {
          markBoard[tempRow+1][tempCol+1] = 'R';
          enemyFound = true;
        }
        else {
          markBoard[tempRow+1][tempCol+1] = 'T';
          sameColorFound = true;
        }
      }
      else {
        break;
      }
    }
  }

  //Calculate all possible movements in down left diagonal direction
  calculatePossibleDownLeftDiagMovements(myChessBoard: string[][], markBoard: string[][] ): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;
    let tempCol: number = this.column;

    while(!enemyFound && !sameColorFound) {
      if( (tempRow < 7) && (tempCol > 0)) {
        if(myChessBoard[tempRow+1][tempCol-1] == '') {
          markBoard[tempRow+1][tempCol-1] = 'X';
          tempRow++;
          tempCol--;
        }
        else if(!this.isBlack && (myChessBoard[tempRow+1][tempCol-1] == 'B' ||myChessBoard[tempRow+1][tempCol-1] == 'BK')) {
          markBoard[tempRow+1][tempCol-1] = 'R';
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow+1][tempCol-1] == 'W' ||myChessBoard[tempRow+1][tempCol-1] == 'WK')) {
          markBoard[tempRow+1][tempCol-1] = 'R';
          enemyFound = true;
        }
        else {
          markBoard[tempRow+1][tempCol-1] = 'T';
          sameColorFound = true;
        }
      }
      else {
        break;
      }
    }
  }

  //Calculate all possible movements in up right diagonal direction
  calculatePossibleUpRightDiagMovements(myChessBoard: string[][], markBoard: string[][] ): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;
    let tempCol: number = this.column;

    while(!enemyFound && !sameColorFound) {
      if( (tempRow > 0) && (tempCol < 7)) {
        if(myChessBoard[tempRow-1][tempCol+1] == '') {
          markBoard[tempRow-1][tempCol+1] = 'X';
          tempRow--;
          tempCol++;
        }
        else if(!this.isBlack && (myChessBoard[tempRow-1][tempCol+1] == 'B' ||myChessBoard[tempRow-1][tempCol+1] == 'BK')) {
          markBoard[tempRow-1][tempCol+1] = 'R';
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow-1][tempCol+1] == 'W' ||myChessBoard[tempRow-1][tempCol+1] == 'WK')) {
          markBoard[tempRow-1][tempCol+1] = 'R';
          enemyFound = true;
        }
        else {
          markBoard[tempRow-1][tempCol+1] = 'T';
          sameColorFound = true;
        }
      }
      else {
        break;
      }
    }
  }

  //Calculate all possible movements in up left diagonal direction
  calculatePossibleUpLeftDiagMovements(myChessBoard: string[][], markBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;
    let tempCol: number = this.column;

    while(!enemyFound && !sameColorFound) {
      if( (tempRow > 0) && (tempCol > 0)) {
        if(myChessBoard[tempRow-1][tempCol-1] == '') {
          markBoard[tempRow-1][tempCol-1] = 'X';
          tempRow--;
          tempCol--;
        }
        else if(!this.isBlack && (myChessBoard[tempRow-1][tempCol-1] == 'B' ||myChessBoard[tempRow-1][tempCol-1] == 'BK')) {
          markBoard[tempRow-1][tempCol-1] = 'R';
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow-1][tempCol-1] == 'W' ||myChessBoard[tempRow-1][tempCol-1] == 'WK')) {
          markBoard[tempRow-1][tempCol-1] = 'R';
          enemyFound = true;
        }
        else {
          markBoard[tempRow-1][tempCol-1] = 'T';
          sameColorFound = true;
        }
      }
      else {
        break;
      }
    }
  }

}