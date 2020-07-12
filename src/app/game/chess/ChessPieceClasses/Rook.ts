import { ChessPiece } from "./ChessPiece";

export class Rook extends ChessPiece {
  
  constructor(row: number, column: number, isBlack: boolean) {
    super(row,column,isBlack);
    this.type = "Rook";
  }

  // Calculate Possible Movements for Rook piece
  // Note: Castling?? One day I will add maybe

  calculatePossibleMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][] ): void {

    //Run supporting methods for each type of movement to mark
    //possible move board
    this.calculatePossibleDownVertMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleUpVertMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleRightHorizMovements(myChessBoard, markBoard, markAttackBoard);
    this.calculatePossibleLeftHorizMovements(myChessBoard, markBoard, markAttackBoard);    
  }

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

}
