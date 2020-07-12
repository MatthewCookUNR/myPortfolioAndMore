import { ChessPiece } from "./ChessPiece";

export class Rook extends ChessPiece {
  
  constructor(row: number, column: number, isBlack: boolean) {
    super(row,column,isBlack);
    this.type = "Rook";
  }

  // Calculate Possible Movements for Rook piece
  // Note: Castling?? One day I will add maybe

  calculatePossibleMovements(myChessBoard: string[][]): void {

    //Run supporting methods for each type of movement to mark
    //possible move board
    this.calculatePossibleDownVertMovements(myChessBoard);
    this.calculatePossibleUpVertMovements(myChessBoard);
    this.calculatePossibleRightHorizMovements(myChessBoard);
    this.calculatePossibleLeftHorizMovements(myChessBoard);
    this.markPossibleMoveBoard();
    
  }

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

}
