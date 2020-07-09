import { Component, OnInit } from '@angular/core';
import {ChessPiece} from "./ChessPiece";
import {Pawn} from "./Pawn";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  myChessBoard: string[][];
  possibleWhiteMovementsBoard: string[][];
  possibleBlackMovementsBoard: string[][];
  myChessPieces: ChessPiece[];
  clickedPieceIndex: number;
  clickedPieceId: string;
  clickedPieceRow: number;
  clickedPieceCol: number;
  currentPlayerColorStr: string;

  constructor() {
    this.buildPieces();
    this.buildBoards();
    this.clickedPieceIndex = -1;
  }

  ngOnInit(): void 
  {
    this.myChessPieces[0].greet();
    this.newGame(); 
  }

  //Handles on click of square events
  handleSqrClick(event): void {
    var target = event.currentTarget;
    var squareId = target.id;
    let row: number = parseInt(squareId[6])-1;
    let col: number = parseInt(squareId[10])-1;

    //Case 1: Click is a piece on your side so calculate movement possible
    //and mark board
    if(this.myChessBoard[row][col] == this.currentPlayerColorStr) {
      if( this.existPiece(row, col) ) {
        let pieceIndex: number = this.findChessPieceByRowCol(row, col);
        this.cleanBoardMarks();
        this.clickedPieceRow = row;
        this.clickedPieceCol = col;
        this.clickedPieceIndex = pieceIndex;
        this.clickedPieceId = squareId;
        this.myChessPieces[pieceIndex].calculatePossibleMovements(this.myChessBoard);
      }
    }
    //Case 2: You've selected a piece already, validate if can move and move to space
    //OR there is enemy so destroy and then move
    else if(this.clickedPieceIndex != -1 && this.myChessPieces[this.clickedPieceIndex].isPossibleMove(row, col)) {
      if(this.myChessBoard[row][col] != '') {
        this.destroyChessPiece(squareId, row, col);
      }
        this.moveChessPiece(squareId, row, col);
    }
    //Case 3: You clicked on random or enemy space, clear and do nothing
    //OR do nothing
    else {

    }
    //console.log(squareId);
  }

  //Returns true if piece exists in given row and col
  existPiece(row: number, col: number): boolean {
    if(this.myChessBoard[row][col] != '') {
        return true;
    }
    else {
      return false;
    }
  }

  //Returns integer index of ChessPiece obj for given row and col
  findChessPieceByRowCol(row: number, col: number): number {
    for(let i = 0; this.myChessPieces.length; i++) {
      if(this.myChessPieces[i].row == row && this.myChessPieces[i].column == col) {
        return i;
      }
    }
    return -1;
  }

  //Boards 2D Arrays for boards
  buildBoards() {
    //2D Array (Table) used to map where the pieces are on table
    //
    this.myChessBoard = [['W','W','W','W','WK','W','W','W']
                        ,['W','W','W','W','W','W','W','W']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['B','B','B','B','B','B','B','B']
                        ,['B','B','B','B','BK','B','B','B']];

    //2D Array (Table) used to map possible movements of white and black pieces
    //This is needed to find out if King is in check/checkmate
    this.possibleBlackMovementsBoard, this.possibleWhiteMovementsBoard =
                        [['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']
                        ,['','','','','','','','']];
  }

  //Build ChessPiece objects for game
  //Note: Only adds pawns for now
  buildPieces() {

    this.myChessPieces = new Array(16);

    //Creates Pawns
    for(let i = 0; i < 8; i++) {
      this.myChessPieces[i] = new Pawn(1, i, false);
      this.myChessPieces[i+8] = new Pawn(6, i, true);
    }
  }

  //Function resets board back to original color/state
  cleanBoardMarks() {
    let whiteSquareObj = document.getElementsByClassName("whiteSquare") as HTMLCollectionOf<HTMLElement>;;
    let blackSquareObj = document.getElementsByClassName("blackSquare") as HTMLCollectionOf<HTMLElement>;;
    for(let i = 0; i < whiteSquareObj.length; i++) {
      whiteSquareObj[i].style.backgroundColor = "#F8F8FF";
      blackSquareObj[i].style.backgroundColor = "#808080";
    }

  }

  //Moves selected piece to destination square
  moveChessPiece(destId: string, destRow: number, destCol: number): void {
    
    let currentSqr = document.getElementById(this.clickedPieceId);
    let destSqr = document.getElementById(destId);
    let pieceSpanNode = currentSqr.childNodes[0];

    //Take care of removing from original spot
    currentSqr.removeChild(currentSqr.childNodes[0]);
    let tempBoardStr: string = this.myChessBoard[this.clickedPieceRow][this.clickedPieceCol];
    this.myChessBoard[this.clickedPieceRow][this.clickedPieceCol] = '';

    //Adjust chess of moving piece to new spot
    this.myChessBoard[destRow][destCol] = tempBoardStr;
    this.myChessPieces[this.clickedPieceIndex].row = destRow;
    this.myChessPieces[this.clickedPieceIndex].column = destCol;
    if(this.myChessPieces[this.clickedPieceIndex].type == "Pawn") {
      (this.myChessPieces[this.clickedPieceIndex] as Pawn).isFirstMovement = false;
    }
    destSqr.appendChild(pieceSpanNode);

    //Clear movement board before moving
    this.cleanBoardMarks();
    this.cleanAllPossibleMoves();
    this.nextTurn();
  }


  destroyChessPiece(destId: string, destRow: number, destCol: number): void {
    let destSqr = document.getElementById(destId);
    let pieceSpanNode = destSqr.childNodes[0];
    destSqr.removeChild(pieceSpanNode);
    let pieceIndex: number = this.findChessPieceByRowCol(destRow, destCol);

    //Will possibly look into removing piece from list to make searches
    //more efficient. Weird errors occured when using line below
    //that appear to cause from the row/col numbers messed up.
    //Could be deleting wrong one?

    //console.log("destRow: " + destRow + " - destCol: " + destCol);
    //console.log("destRow: " + this.myChessPieces[pieceIndex].row + " - destCol: " + this.myChessPieces[pieceIndex].column);
    //console.log("pieceIndex: " + pieceIndex);
    //this.myChessPieces.splice(pieceIndex, 1);
  }

  switchPlayerOnScreen(currentPlayerStr: string) {
    let myTextSpan: HTMLElement = document.getElementById("currentPlayer");
    if(currentPlayerStr == 'W') {
      myTextSpan.innerHTML="White";
    }
    else {
      myTextSpan.innerHTML="Black";
    }
  }

  nextTurn() {
    if(this.currentPlayerColorStr == 'W') {
      this.currentPlayerColorStr = 'B'
      this.switchPlayerOnScreen('B');
    }
    else {
      this.currentPlayerColorStr = 'W'
      this.switchPlayerOnScreen('W');
    }
  }

  newGame() {
    let randomPlayer = Math.floor(Math.random() * 2);
    if(randomPlayer == 0) {
      this.currentPlayerColorStr='W';
      this.switchPlayerOnScreen('W');
    }
    else {
      this.currentPlayerColorStr='B';
      this.switchPlayerOnScreen('B');
    }
  }

  cleanAllPossibleMoves(): void {
    for(let i = 0; i < this.myChessPieces.length; i++) {
      this.myChessPieces[i].clearPossibleMoveBoard();
    }
  }

}
