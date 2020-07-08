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
  pieceSelected: boolean;
  clickedPieceId: string;
  clickedPieceRow: number;
  clickedPieceCol: number;

  constructor() {
    this.buildPieces();
    this.buildBoards();
    this.pieceSelected = false;
  }

  ngOnInit(): void 
  {
    this.myChessPieces[0].greet();
  }

  handleSqrClick(event): void {
    var target = event.currentTarget;
    var squareId = target.id;
    let row: number = parseInt(squareId[6])-1;
    let col: number = parseInt(squareId[10])-1;

    //Case 1: Click is a new piece on your side so calculate movement possible
    //and mark board
    if(this.pieceSelected != true) {
      if( this.existPiece(row, col) ) {
        let pieceIndex: number = this.findChessPieceByRowCol(row, col);
        this.cleanBoardMarks();
        this.clickedPieceRow = row;
        this.clickedPieceCol = col;
        this.clickedPieceIndex = pieceIndex;
        this.clickedPieceId = squareId;
        this.myChessPieces[pieceIndex].calculatePossibleMovements(this.myChessBoard);
        this.pieceSelected = true;
      }
    }
    //Case 2: You've selected piece already, validate if can move and move to space
    //OR Select new piece if clicked space is different piece
    else if(true) {
      this.moveChessPiece(squareId, row, col);
    }
    //Case 3: You clicked on random or enemy space, clear and do nothing
    //OR do nothing
    else {

    }
    console.log(squareId);
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
  //Note: Only adds white pawns for now
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

  moveChessPiece(destId: string, destRow: number, destCol: number): void {
    
    let currentSqr = document.getElementById(this.clickedPieceId);
    let destSqr = document.getElementById(destId);
    let pieceSpanNode = currentSqr.childNodes[0];

    currentSqr.removeChild(currentSqr.childNodes[0]);
    let tempBoardStr: string = this.myChessBoard[this.clickedPieceRow][this.clickedPieceCol];
    this.myChessBoard[this.clickedPieceRow][this.clickedPieceCol] = '';

    this.myChessBoard[destRow][destCol] = tempBoardStr;
    this.myChessPieces[this.clickedPieceIndex].row = destRow;
    this.myChessPieces[this.clickedPieceIndex].column = destCol;
    if(this.myChessPieces[this.clickedPieceIndex].type == "Pawn") {
      (this.myChessPieces[this.clickedPieceIndex] as Pawn).isFirstMovement = false;
    }
    this.myChessPieces[this.clickedPieceIndex].clearPossibleMoveBoard();
    destSqr.appendChild(pieceSpanNode);

    this.cleanBoardMarks();
    this.pieceSelected = false;
  }

}
