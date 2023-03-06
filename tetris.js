// コマンドの追加
function command_add() {
  // コマンド追加処理
}

// フォームの送信時にコマンドの追加処理を実行する
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // デフォルトの送信処理をキャンセルする
  command_add();
  form.reset(); // フォームをリセットする
});

// キャンバスの取得
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// グリッドの設定
const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 20;
const VACANT = "white"; // 空きマスの色

// テトロミノの種類と色
const PIECES = [
  [Z, "red"],
  [S, "green"],
  [T, "purple"],
  [O, "yellow"],
  [L, "orange"],
  [I, "cyan"],
  [J, "blue"]
];

// テトロミノの定義
const Z = [
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 0]
];

const S = [
  [0, 2, 2],
  [2, 2, 0],
  [0, 0, 0]
];

const T = [
  [0, 3, 0],
  [3, 3, 3],
  [0, 0, 0]
];

const O = [
  [4, 4],
  [4, 4]
];

const L = [
  [0, 0, 5],
  [5, 5, 5],
  [0, 0, 0]
];

const I = [
  [0, 0, 0, 0],
  [6, 6, 6, 6],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

// テトロミノのオブジェクト
function Piece(tetromino, color) {
  this.tetromino = tetromino;
  this.color = color;
  this.x = 3;
  this.y = -2;
}

// テトロミノの描画
Piece.prototype.draw = function() {
  for (let r = 0; r < this.tetromino.length; r++) {
    for (let c = 0; c < this.tetromino.length; c++) {
      if (this.tetromino[r][c]) {
        drawSquare(this.x + c, this.y + r, this.color);
      }
    }
  }
}

// テトロミノの消去
Piece.prototype.undraw = function() {
  for (let r = 0; r < this
       
