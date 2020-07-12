import { ChessPiece } from "./ChessPiece";

export class Queen extends ChessPiece {
  
  constructor(row: number, column: number, isBlack: boolean) {
    super(row,column,isBlack);
    this.type = "Queen";
  }

  //Calculates possible movements and marks possibleMove 2D array
  calculatePossibleMovements(myChessBoard: string[][]): void {
    
    //Supporting functions used to modularize method
    this.calculatePossibleDownVertMovements(myChessBoard);
    this.calculatePossibleUpVertMovements(myChessBoard);
    this.calculatePossibleRightHorizMovements(myChessBoard);
    this.calculatePossibleLeftHorizMovements(myChessBoard);
    this.calculatePossibleDownRightDiagMovements(myChessBoard);
    this.calculatePossibleDownLeftDiagMovements(myChessBoard);
    this.calculatePossibleUpLeftDiagMovements(myChessBoard);
    this.calculatePossibleUpRightDiagMovements(myChessBoard);
    this.markPossibleMoveBoard();
  }

  /*
  *
  * Code below is taken from Rook since it is the same for Queen
  * 
  * 
  */
  //Calculate all possible movements in down vertical direction
  calculatePossibleDownVertMovements(myChessBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;

    //Down Vertical movement
    while(!enemyFound && !sameColorFound)
    {
      if(tempRow < 7)
      {
        if(myChessBoard[tempRow+1][this.column] == '') {
          this.possibleMoveBoard[tempRow+1][this.column] = 'X'
          tempRow++;
        }
        else if(!this.isBlack && (myChessBoard[tempRow+1][this.column] == 'B' || myChessBoard[tempRow+1][this.column] == 'BK')) {
          this.possibleMoveBoard[tempRow+1][this.column] = 'R'
          enemyFound = true
        }
        else if(this.isBlack && (myChessBoard[tempRow+1][this.column] == 'W' || myChessBoard[tempRow+1][this.column] == 'WK'))  {
          this.possibleMoveBoard[tempRow+1][this.column] = 'R'
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
  calculatePossibleUpVertMovements(myChessBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempRow: number = this.row;

    //Down Vertical movement
    while(!enemyFound && !sameColorFound)
    {
      if(tempRow > 0)
      {
        if(myChessBoard[tempRow-1][this.column] == '') {
          this.possibleMoveBoard[tempRow-1][this.column] = 'X'
          tempRow--;
        }
        else if(!this.isBlack && (myChessBoard[tempRow-1][this.column] == 'B' || myChessBoard[tempRow-1][this.column] == 'BK')) {
          this.possibleMoveBoard[tempRow-1][this.column] = 'R'
          enemyFound = true
        }
        else if(this.isBlack && (myChessBoard[tempRow-1][this.column] == 'W' || myChessBoard[tempRow-1][this.column] == 'WK'))  {
          this.possibleMoveBoard[tempRow-1][this.column] = 'R'
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
  calculatePossibleRightHorizMovements(myChessBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempCol: number = this.column;

    //Down Vertical movement
    while(!enemyFound && !sameColorFound)
    {
      if(tempCol < 7)
      {
        if(myChessBoard[this.row][tempCol+1] == '') {
          this.possibleMoveBoard[this.row][tempCol+1] = 'X'
          tempCol++;
        }
        else if(!this.isBlack && (myChessBoard[this.row][tempCol+1] == 'B' || myChessBoard[this.row][tempCol+1] == 'BK')) {
          this.possibleMoveBoard[this.row][tempCol+1] = 'R'
          enemyFound = true
        }
        else if(this.isBlack && (myChessBoard[this.row][tempCol+1] == 'W' || myChessBoard[this.row][tempCol+1] == 'WK'))  {
          this.possibleMoveBoard[this.row][tempCol+1] = 'R'
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
  calculatePossibleLeftHorizMovements(myChessBoard: string[][]): void {
    let enemyFound: boolean = false;
    let sameColorFound: boolean = false;
    let tempCol: number = this.column;

    //Down Vertical movement
    while(!enemyFound && !sameColorFound)
    {
      if(tempCol > 0)
      {
        if(myChessBoard[this.row][tempCol-1] == '') {
          this.possibleMoveBoard[this.row][tempCol-1] = 'X'
          tempCol--;
        }
        else if(!this.isBlack && (myChessBoard[this.row][tempCol-1] == 'B' || myChessBoard[this.row][tempCol-1] == 'BK')) {
          this.possibleMoveBoard[this.row][tempCol-1] = 'R'
          enemyFound = true
        }
        else if(this.isBlack && (myChessBoard[this.row][tempCol-1] == 'W' || myChessBoard[this.row][tempCol-1] == 'WK'))  {
          this.possibleMoveBoard[this.row][tempCol-1] = 'R'
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