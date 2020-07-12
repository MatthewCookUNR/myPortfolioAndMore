import { ChessPiece } from "./ChessPiece";

export class Queen extends ChessPiece {
  
  constructor(row: number, column: number, isBlack: boolean) {
    super(row,column,isBlack);
    this.type = "Queen";
  }

  //Calculates possible movements and marks possibleMove 2D array
  calculatePossibleMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][] ): void {

    //Supporting functions used to modularize method
    this.calculatePossibleDownVertMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleUpVertMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleRightHorizMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleLeftHorizMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleDownRightDiagMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleDownLeftDiagMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleUpLeftDiagMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleUpRightDiagMovements(myChessBoard, markBoard, markAttackBoard);
  }

  /*
  *
  * Code below is taken from Rook since it is the same for Queen
  * 
  * 
  */
  //Calculate all possible movements in down vertical direction
  //Calculate all possible movements in down vertical direction
  calculatePossibleDownVertMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;

    //Down Vertical movement
    while(!enemyFound && !sameColorFound)
    {
      if(tempRow < 7)
      {
        if(myChessBoard[tempRow+1][this.column] == '') {
          markBoard[tempRow+1][this.column] = 'X';
          tempRow++;
        }
        else if(!this.isBlack && (myChessBoard[tempRow+1][this.column] == 'B' || myChessBoard[tempRow+1][this.column] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[tempRow+1][this.column] = 'R';
          }
          else {
            markBoard[tempRow+1][this.column] = 'R';
          }
          enemyFound = true
        }
        else if(this.isBlack && (myChessBoard[tempRow+1][this.column] == 'W' || myChessBoard[tempRow+1][this.column] == 'WK'))  {
          if(markAttackBoard) {
            markAttackBoard[tempRow+1][this.column] = 'R';
          }
          else {
            markBoard[tempRow+1][this.column] = 'R';
          }
          enemyFound = true
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

  //Calculate all possible movements in up vertical direction
  calculatePossibleUpVertMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;

    //Down Vertical movement
    while(!enemyFound && !sameColorFound)
    {
      if(tempRow > 0)
      {
        if(myChessBoard[tempRow-1][this.column] == '') {
          markBoard[tempRow-1][this.column] = 'X';
          tempRow--;
        }
        else if(!this.isBlack && (myChessBoard[tempRow-1][this.column] == 'B' || myChessBoard[tempRow-1][this.column] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[tempRow-1][this.column] = 'R';
          }
          else {
            markBoard[tempRow-1][this.column] = 'R';
          }
          enemyFound = true
        }
        else if(this.isBlack && (myChessBoard[tempRow-1][this.column] == 'W' || myChessBoard[tempRow-1][this.column] == 'WK'))  {
          if(markAttackBoard) {
            markAttackBoard[tempRow-1][this.column] = 'R';
          }
          else {
            markBoard[tempRow-1][this.column] = 'R';
          }
          enemyFound = true
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

  //Calculate all possible movements in right horizontal direction
  calculatePossibleRightHorizMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempCol: number = this.column;

    //Down Vertical movement
    while(!enemyFound && !sameColorFound)
    {
      if(tempCol < 7)
      {
        if(myChessBoard[this.row][tempCol+1] == '') {
          markBoard[this.row][tempCol+1] = 'X';
          tempCol++;
        }
        else if(!this.isBlack && (myChessBoard[this.row][tempCol+1] == 'B' || myChessBoard[this.row][tempCol+1] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row][tempCol+1] = 'R';
          }
          else {
            markBoard[this.row][tempCol+1] = 'R';
          }
          enemyFound = true
        }
        else if(this.isBlack && (myChessBoard[this.row][tempCol+1] == 'W' || myChessBoard[this.row][tempCol+1] == 'WK'))  {
          if(markAttackBoard) {
            markAttackBoard[this.row][tempCol+1] = 'R';
          }
          else {
            markBoard[this.row][tempCol+1] = 'R';
          }
          enemyFound = true
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

  //Calculate all possible movements in left horizontal direction
  calculatePossibleLeftHorizMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempCol: number = this.column;

    //Down Vertical movement
    while(!enemyFound && !sameColorFound)
    {
      if(tempCol > 0)
      {
        if(myChessBoard[this.row][tempCol-1] == '') {
          markBoard[this.row][tempCol-1] = 'X'
          tempCol--;
        }
        else if(!this.isBlack && (myChessBoard[this.row][tempCol-1] == 'B' || myChessBoard[this.row][tempCol-1] == 'BK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row][tempCol-1] = 'R'
          }
          else {
            markBoard[this.row][tempCol-1] = 'R'
          }
          enemyFound = true
        }
        else if(this.isBlack && (myChessBoard[this.row][tempCol-1] == 'W' || myChessBoard[this.row][tempCol-1] == 'WK'))  {
          if(markAttackBoard) {
            markAttackBoard[this.row][tempCol-1] = 'R'
          }
          else {
            markBoard[this.row][tempCol-1] = 'R'
          }
          enemyFound = true
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

  /*
  *
  * Code below is taken from Bishop since it is the same for Queen
  * 
  * 
  */
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