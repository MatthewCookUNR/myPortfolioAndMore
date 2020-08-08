//Parent Class for Chess pieces
export abstract class ChessPiece {

  type: string;
  strRep: string;
  isBlack: boolean;
  possibleMoveBoard: string[][];
  row: number;
  column: number;

  constructor(row: number, column: number, isBlack: boolean, strRep: string) {
      this.type = "Generic Chess Piece";
      this.row = row;
      this.column = column;
      this.isBlack = isBlack;
      this.strRep = strRep;
      this.possibleMoveBoard =
                        [['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']];
  }

  abstract calculatePossibleMovements(myChessBoard: string[][], markMoveBoard: string[][], possibleEnemyMovementsBoard: string[][]): void;

  markPossibleMoveBoard(): void {
    for(let i = 0; i < 8; i++) {
      for(let j = 0; j < 8; j++) {
        //Empty space
        if(this.possibleMoveBoard[i][j] == "X") {
          let squareId: string = "sqrRow" + (i+1) + "Col" + (j+1);
          let squareObj = document.getElementById(squareId);
          squareObj.style.backgroundColor= "#8fefd7";
          squareObj.style.borderStyle = 'solid';
        }
        //Enemy space
        else if(this.possibleMoveBoard[i][j] == "R") {
          let squareId: string = "sqrRow" + (i+1) + "Col" + (j+1);
          let squareObj = document.getElementById(squareId);
          squareObj.style.backgroundColor= "#8B0000";
          squareObj.style.borderStyle = 'solid';
        }
      }
    }
  }
  
  /*
  * 
  * Older function that was used for movement, kept for later
  * 
  * 
  moveChessPiece(squareId, currentRow, currentCol, destRow, destCol): void {
    let mySpan = document.getElementById(squareId).getElementsByTagName('span')[0];
    let movePiece: string = mySpan.innerHTML;

    //Pawn Piece Movement
    if( (movePiece == '♙') || (movePiece == '♟︎') ) {
      if(Math.abs(destRow - currentRow) == 1) {
        let targetSquareId: string = "sqrRow" + destRow + "Col" + destCol;
        let targetSquareObj = document.getElementById(targetSquareId);
        targetSquareObj.appendChild(mySpan);
      }
    }
  }*/

  isPossibleMove(destRow: number, destCol: number): boolean {
    if(this.possibleMoveBoard[destRow][destCol] == 'X' || this.possibleMoveBoard[destRow][destCol] == 'R') {
      return true;
    }
    return false;
  }

  clearPossibleMoveBoard() {
    this.possibleMoveBoard =
                        [['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']];
  }

  greet(): void {
      console.log("Hello, I am a " + this.type + ".");
  }
}
