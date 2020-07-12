import { ChessPiece } from "./ChessPiece";

export class King extends ChessPiece {

  isCheckMate: boolean = false;
  isInCheck: boolean = false;

  possibleEnemyMovementsBoard: string[][] =
            [['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']];

  possibleEnemyAttacksBoard: string[][] =
            [['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']
            ,['','','','','','','','']];
  
  constructor(row: number, column: number, isBlack: boolean) {
    super(row,column,isBlack);
    this.type = "King";
  }

  //TBA, movement logic will require determination 
  //of all enemy pieces movement (main code required) i.e. they cannot
  //move into check
  calculatePossibleMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][], possibleEnemyMovementsBoard: string[][]): void {
    let result1: boolean = this.calculateLeftHorizVertMovements(myChessBoard, markBoard, markAttackBoard, possibleEnemyMovementsBoard);
    let result2: boolean = this.calculateRightHorizVertMovements(myChessBoard, markBoard, markAttackBoard, possibleEnemyMovementsBoard);
    let result3: boolean = this.calculateUpDownVertMovements(myChessBoard, markBoard, markAttackBoard, possibleEnemyMovementsBoard);

    //If no moves are possible AND (King can be hit OR last piece)
    if((!result1 && !result2 && !result3) ) {
      this.isCheckMate = true;
    }
  }

  calculateLeftHorizVertMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][], possibleEnemyMovementsBoard: string[][]): boolean {
    let possibleMoveFound: boolean = false;
    //All 1 square left related movements
    if(this.column-1 >= 0) {
      //Left Horiz
      if(possibleEnemyMovementsBoard[this.row][this.column-1] != 'X') {
        if(myChessBoard[this.row][this.column-1] == '') {
          markBoard[this.row][this.column-1] = 'X';
          possibleMoveFound = true;
        }
        else if(!this.isBlack && (myChessBoard[this.row][this.column-1] == 'B' || myChessBoard[this.row][this.column-1] == 'BK' )) {
          if(markAttackBoard) {
            markAttackBoard[this.row][this.column-1] = 'R';
          }
          else {
            markBoard[this.row][this.column-1] = 'R';
          }
          possibleMoveFound = true;
        }
        else if(this.isBlack && (myChessBoard[this.row][this.column-1] == 'W' || myChessBoard[this.row][this.column-1] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row][this.column-1] = 'R';
          }
          else {
            markBoard[this.row][this.column-1] = 'R';
          }
          possibleMoveFound = true;
        }
        else {
          //Case where it is own piece on same side
          possibleMoveFound = true
        }
      }
      //Bottom Left Diag
      if(this.row+1 <= 7) {
        if(this.isSquareNotNextToKing(myChessBoard, this.row+1, this.column-1) && (possibleEnemyMovementsBoard[this.row+1][this.column-1] != 'X')) {
          if(myChessBoard[this.row+1][this.column-1] == '') {
            markBoard[this.row+1][this.column-1] = 'X';
            possibleMoveFound = true;
          }
          else if(!this.isBlack && (myChessBoard[this.row+1][this.column-1] == 'B' || myChessBoard[this.row+1][this.column-1] == 'BK' )) {
            if(markAttackBoard) {
              markAttackBoard[this.row+1][this.column-1] = 'R';
            }
            else {
              markBoard[this.row+1][this.column-1] = 'R';
            }
            possibleMoveFound = true;
          }
          else if(this.isBlack && (myChessBoard[this.row+1][this.column-1] == 'W' || myChessBoard[this.row+1][this.column-1] == 'WK')) {
            if(markAttackBoard) {
              markAttackBoard[this.row+1][this.column-1] = 'R';
            }
            else {
              markBoard[this.row+1][this.column-1] = 'R';
            }
            possibleMoveFound = true;
          }
          else {
            //Case where it is own piece on same side
            possibleMoveFound = true
          }
        }
      }
      //Top Left Diag
      if(this.row-1 >= 0) {
        if(this.isSquareNotNextToKing(myChessBoard, this.row-1, this.column-1) && (possibleEnemyMovementsBoard[this.row-1][this.column-1] != 'X')) {
          if(myChessBoard[this.row-1][this.column-1] == '') {
            markBoard[this.row-1][this.column-1] = 'X';
            possibleMoveFound = true;
          }
          else if(!this.isBlack && (myChessBoard[this.row-1][this.column-1] == 'B' || myChessBoard[this.row-1][this.column-1] == 'BK' )) {
            if(markAttackBoard) {
              markAttackBoard[this.row-1][this.column-1] = 'R';
            }
            else {
              markBoard[this.row-1][this.column-1] = 'R';
            }
            possibleMoveFound = true;
          }
          else if(this.isBlack && (myChessBoard[this.row-1][this.column-1] == 'W' || myChessBoard[this.row-1][this.column-1] == 'WK')) {
            if(markAttackBoard) {
              markAttackBoard[this.row-1][this.column-1] = 'R';
            }
            else {
              markBoard[this.row-1][this.column-1] = 'R';
            }
            possibleMoveFound = true;
          }
          else {
            //Case where it is own piece on same side
            possibleMoveFound = true
          }
        }
      }
    }
    return possibleMoveFound;
  }

  calculateRightHorizVertMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][], possibleEnemyMovementsBoard: string[][]): boolean {
        let possibleMoveFound: boolean = false;

        //Handles all right movements
        if(this.column+1 <= 7) {
          //Left Horiz
          if( this.isSquareNotNextToKing(myChessBoard, this.row, this.column+1) && (possibleEnemyMovementsBoard[this.row][this.column+1] != 'X')) {
            if(myChessBoard[this.row][this.column+1] == '') {
              markBoard[this.row][this.column+1] = 'X';
              possibleMoveFound = true;
            }
            else if(!this.isBlack && (myChessBoard[this.row][this.column+1] == 'B' || myChessBoard[this.row][this.column+1] == 'BK' )) {
              if(markAttackBoard) {
                markAttackBoard[this.row][this.column+1] = 'R';
              }
              else {
                markBoard[this.row][this.column+1] = 'R';
              }
              possibleMoveFound = true;
            }
            else if(this.isBlack && (myChessBoard[this.row][this.column+1] == 'W' || myChessBoard[this.row][this.column+1] == 'WK')) {
              if(markAttackBoard) {
                markAttackBoard[this.row][this.column+1] = 'R';
              }
              else {
                markBoard[this.row][this.column+1] = 'R';
              }
              possibleMoveFound = true;
            }
            else {
              //Case where it is own piece on same side
              possibleMoveFound = true
            }
          }
          //Bottom Left Diag
          if(this.row+1 <= 7) {
            if(this.isSquareNotNextToKing(myChessBoard, this.row+1, this.column+1) && (possibleEnemyMovementsBoard[this.row+1][this.column+1] != 'X')) {
              if(myChessBoard[this.row+1][this.column+1] == '') {
                markBoard[this.row+1][this.column+1] = 'X';
              }
              else if(!this.isBlack && (myChessBoard[this.row+1][this.column+1] == 'B' || myChessBoard[this.row+1][this.column+1] == 'BK' )) {
                if(markAttackBoard) {
                  markAttackBoard[this.row+1][this.column+1] = 'R';
                }
                else {
                  markBoard[this.row+1][this.column+1] = 'R';
                }
              }
              else if(this.isBlack && (myChessBoard[this.row+1][this.column+1] == 'W' || myChessBoard[this.row+1][this.column+1] == 'WK')) {
                if(markAttackBoard) {
                  markAttackBoard[this.row+1][this.column+1] = 'R';
                }
                else {
                  markBoard[this.row+1][this.column+1] = 'R';
                }
                possibleMoveFound = true;
              }
              else {
                //Case where it is own piece on same side
                possibleMoveFound = true
              }
            }
          }
          //Top Left Diag
          if(this.row-1 >= 0) {
            if( this.isSquareNotNextToKing(myChessBoard, this.row-1, this.column+1) && (possibleEnemyMovementsBoard[this.row-1][this.column+1] != 'X')) {
              if(myChessBoard[this.row-1][this.column+1] == '') {
                markBoard[this.row-1][this.column+1] = 'X';
                possibleMoveFound = true;
              }
              else if(!this.isBlack && (myChessBoard[this.row-1][this.column+1] == 'B' || myChessBoard[this.row-1][this.column+1] == 'BK' )) {
                if(markAttackBoard) {
                  markAttackBoard[this.row-1][this.column-1] = 'R';
                }
                else {
                  markBoard[this.row-1][this.column-1] = 'R';
                }
                possibleMoveFound = true;
              }
              else if(this.isBlack && (myChessBoard[this.row-1][this.column+1] == 'W' || myChessBoard[this.row-1][this.column+1] == 'WK')) {
                if(markAttackBoard) {
                  markAttackBoard[this.row-1][this.column+1] = 'R';
                }
                else {
                  markBoard[this.row-1][this.column+1] = 'R';
                }
                possibleMoveFound = true;
              }
              else {
                //Case where it is own piece on same side
                possibleMoveFound = true
              }
            }
          }
        }
        return possibleMoveFound;
  }

  calculateUpDownVertMovements(myChessBoard: string[][], markBoard: string[][], markAttackBoard: string[][], possibleEnemyMovementsBoard: string[][]): boolean {
    let possibleMoveFound: boolean = false;
    if(this.row+1 <= 7) {
      if(this.isSquareNotNextToKing(myChessBoard, this.row+1, this.column) && (possibleEnemyMovementsBoard[this.row+1][this.column] != 'X')) {
        if(myChessBoard[this.row+1][this.column] == '') {
          markBoard[this.row+1][this.column] = 'X';
          possibleMoveFound = true;
        }
        else if(!this.isBlack && (myChessBoard[this.row+1][this.column] == 'B' || myChessBoard[this.row+1][this.column] == 'BK' )) {
          if(markAttackBoard) {
            markAttackBoard[this.row+1][this.column] = 'R';
          }
          else {
            markBoard[this.row+1][this.column] = 'R';
          }
          possibleMoveFound = true;
        }
        else if(this.isBlack && (myChessBoard[this.row+1][this.column] == 'W' || myChessBoard[this.row+1][this.column] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row+1][this.column] = 'R';
          }
          else {
            markBoard[this.row+1][this.column] = 'R';
          }
          possibleMoveFound = true;
        }
        else {
          //Case where it is own piece on same side
          possibleMoveFound = true
        }
      }
    }
    if(this.row-1 >= 0) {
      if(this.isSquareNotNextToKing(myChessBoard, this.row-1, this.column) && (possibleEnemyMovementsBoard[this.row-1][this.column] != 'X')) {
        if(myChessBoard[this.row-1][this.column] == '') {
          markBoard[this.row-1][this.column] = 'X';
          possibleMoveFound = true;
        }
        else if(!this.isBlack && (myChessBoard[this.row-1][this.column] == 'B' || myChessBoard[this.row-1][this.column] == 'BK' )) {
          if(markAttackBoard) {
            markAttackBoard[this.row-1][this.column-1] = 'R';
          }
          else {
            markBoard[this.row-1][this.column-1] = 'R';
          }
          possibleMoveFound = true;
        }
        else if(this.isBlack && (myChessBoard[this.row-1][this.column] == 'W' || myChessBoard[this.row-1][this.column] == 'WK')) {
          if(markAttackBoard) {
            markAttackBoard[this.row-1][this.column] = 'R';
          }
          else {
            markBoard[this.row-1][this.column] = 'R';
          }
          possibleMoveFound = true;
        }
        else {
          //Case where it is own piece on same side
          possibleMoveFound = true
        }
      }
    }
    return possibleMoveFound;
  }

  isSquareNotNextToKing(myChessBoard, row, column): boolean {
    if(row+1 <= 7) {
      if(!this.isBlack && myChessBoard[row+1][column] == 'BK') {
        return false;
      }
      else if (this.isBlack && myChessBoard[row+1][column] == 'WK') {
        return false;
      }
    }
    if(row-1 >= 0) {
      if(!this.isBlack && myChessBoard[row-1][column] == 'BK') {
        return false;
      }
      else if (this.isBlack && myChessBoard[row-1][column] == 'WK') {
        return false;
      }
    }
    if(column+1 <= 7) {

      if(!this.isBlack && myChessBoard[row][column+1] == 'BK') {
        return false;
      }
      else if (this.isBlack && myChessBoard[row][column+1] == 'WK') {
        return false;
      }

      if(row-1 >= 0) {
        if(!this.isBlack && myChessBoard[row-1][column+1] == 'BK') {
          return false;
        }
        else if (this.isBlack && myChessBoard[row-1][column+1] == 'WK') {
          return false;
        }
      }
      if(row+1 <= 7) {
        if(!this.isBlack && myChessBoard[row+1][column+1] == 'BK') {
          return false;
        }
        else if (this.isBlack && myChessBoard[row+1][column+1] == 'WK') {
          return false;
        }
      }
    }
    if(column-1 >= 0) {
      if(!this.isBlack && myChessBoard[row][column-1] == 'BK') {
        return false;
      }
      else if (this.isBlack && myChessBoard[row][column-1] == 'WK') {
        return false;
      }

      if(row-1 >= 0) {
        if(!this.isBlack && myChessBoard[row-1][column-1] == 'BK') {
          return false;
        }
        else if (this.isBlack && myChessBoard[row-1][column-1] == 'WK') {
          return false;
        }
      }
      if(row+1 <= 7) {
        if(!this.isBlack && myChessBoard[row+1][column-1] == 'BK') {
          return false;
        }
        else if (this.isBlack && myChessBoard[row+1][column-1] == 'WK') {
          return false;
        }
      }
    }
    return true;
  }
}