import { ChessPiece } from "./ChessPiece";

export class Bishop extends ChessPiece {
  
  constructor(row: number, column: number, isBlack: boolean) {
    super(row,column,isBlack);
    this.type = "Bishop";
  }

  //Calculates possible movements and marks possibleMove 2D array
  calculatePossibleMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][]): void {

    //Supporting functions used to modularize method
    this.calculatePossibleDownRightDiagMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleDownLeftDiagMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleUpLeftDiagMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleUpRightDiagMovements(myChessBoard, markBoard, markAttackBoard);
  }

  //Calculate all possible movements in down right diagonal direction
  calculatePossibleDownRightDiagMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][] ): void {
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
          if(markAttackBoard) {
            markAttackBoard[tempRow+1][tempCol+1] = 'R';
          }
          else {
            markBoard[tempRow+1][tempCol+1] = 'R';
          }
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow+1][tempCol+1] == 'W' ||myChessBoard[tempRow+1][tempCol+1] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[tempRow+1][tempCol+1] = 'R';
          }
          else {
            markBoard[tempRow+1][tempCol+1] = 'R';
          }
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
  calculatePossibleDownLeftDiagMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][] ): void {
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
          if(markAttackBoard) {
            markAttackBoard[tempRow+1][tempCol-1] = 'R';
          }
          else {
            markBoard[tempRow+1][tempCol-1] = 'R';
          }
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow+1][tempCol-1] == 'W' ||myChessBoard[tempRow+1][tempCol-1] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[tempRow+1][tempCol-1] = 'R';
          }
          else {
            markBoard[tempRow+1][tempCol-1] = 'R';
          }
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
  calculatePossibleUpRightDiagMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][] ): void {
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
          if(markAttackBoard) {
            markAttackBoard[tempRow-1][tempCol+1] = 'R';
          }
          else {
            markBoard[tempRow-1][tempCol+1] = 'R';
          }
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow-1][tempCol+1] == 'W' ||myChessBoard[tempRow-1][tempCol+1] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[tempRow-1][tempCol+1] = 'R';
          }
          else {
            markBoard[tempRow-1][tempCol+1] = 'R';
          }
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
  calculatePossibleUpLeftDiagMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][]): void {
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
          if(markAttackBoard) {
            markAttackBoard[tempRow-1][tempCol-1] = 'R';
          }
          else {
            markBoard[tempRow-1][tempCol-1] = 'R';
          }
          enemyFound = true;
        }
        else if(this.isBlack && (myChessBoard[tempRow-1][tempCol-1] == 'W' ||myChessBoard[tempRow-1][tempCol-1] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[tempRow-1][tempCol-1] = 'R';
          }
          else {
            markBoard[tempRow-1][tempCol-1] = 'R';
          }
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