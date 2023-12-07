'use strict'

// TYPING GAME--------------------------------------------------------------------
// questions---------------------------------------------------------------------
let questionsForJS = [
  { word: 'Hyper Text Markup Language', meaning: 'ページのコンテンツを記載し定義する言語' },
  { word: 'Cascading Style Sheet', meaning: 'ページの体裁や見栄えなどを指定する言語' },
  { word: 'JavaScript', meaning: 'ページのインタラクティブ性(相互作用)を担う言語' },
  { word: 'variable', meaning: '変数' },
  { word: 'identifier', meaning: '識別子:変数、関数、クラス、オブジェクトなどを一意に識別するために使用' },
  { word: 'function', meaning: '関数' },
  { word: 'array', meaning: '複数の値をまとめたデータ構造' },
  { word: 'string', meaning: '文字列' },
  { word: 'number', meaning: '数値' },
  { word: 'NaN', meaning: '非数値 数値型を期待したときの値が数値でない場合' },
  { word: 'interface', meaning: 'クラスやオブジェクトが持つべきメソッドやプロパティの定義' },
  { word: 'iteration', meaning: '繰り返し処理の一回分のこと' },
  { word: 'loop of', meaning: '反復可能なオブジェクト（配列や文字列など）の要素を反復処理するための構文' },
  { word: 'loop in', meaning: 'オブジェクトのプロパティを反復処理するための構文' },
  { word: 'property', meaning: 'オブジェクトのキーと値のペア' },
  { word: 'method', meaning: 'オブジェクトプロパティの中で値が関数のもの' },
  { word: 'null', meaning: '何も存在しないことを表す特殊な値' },
  { word: 'object', meaning: 'プロパティとメソッドを持つデータ構造' },
  { word: 'operator', meaning: '算術、比較、論理などの演算を行う記号' },
  { word: 'parameter', meaning: '関数に渡される変数(仮引数：特に定義側で用意される値)' },
  { word: 'recursion', meaning: '関数が自身を呼び出すこと' },
  { word: 'scope', meaning: '変数や関数が参照可能な範囲' },
  { word: 'statement', meaning: 'プログラムの最小の実行単位' },
  { word: 'uncaught', meaning: 'エラーハンドリングが適切に処理されなかったことを示す用語' },
  { word: 'defined', meaning: '変数や関数が値を持っていたり、定義されたりしていること' },
  { word: 'undefined', meaning: '値が未定義であることを表す特殊な値' },
  { word: 'Wrapper Object', meaning: 'プリミティブ値をオブジェクトとして扱うためのオブジェクト' },
  { word: 'Prototype', meaning: 'JavaScriptにおける継承の仕組みで、オブジェクトが他のオブジェクトの性質を引き継ぐ' },
  { word: 'Promise', meaning: '非同期処理の結果を表現するオブジェクト' },
  { word: 'Async/Await', meaning: '非同期処理をより直感的に書くための構文' },
  { word: 'Arrow Function', meaning: '関数を短く記述できる構文' },
  { word: 'Destructuring Assignment', meaning: '配列やオブジェクトからデータを取り出し、変数に代入する構文' },
  { word: 'argument', meaning: '関数に渡される値(実引数：特に呼出し側で渡される値)' },
  { word: 'boolean', meaning: '真偽値（trueまたはfalse）を表す' },
  { word: 'callback', meaning: '関数の引数として渡される関数' },
  { word: 'class', meaning: 'オブジェクト指向プログラミングにおける設計図' },
  { word: 'closure', meaning: '関数とその関数が宣言されたレキシカルスコープの組み合わせ' },
  { word: 'constructor', meaning: 'オブジェクトを作成し初期化する特殊なメソッド' },
  { word: 'DOM tree', meaning: 'HTMLのツリーノードをオブジェクトに変換したもの プロパティやメソッドを備えJSで操作できる' },
  { word: 'event', meaning: 'ユーザー操作やブラウザの動作など、特定の瞬間を表す' },
  { word: 'Exception', meaning: 'プログラムの実行中に発生するエラーや異常' },
  { word: 'Garbage Collection', meaning: '不要になったメモリを自動的に解放する機能' },
  { word: 'Global Variable', meaning: 'プログラム全体からアクセス可能な変数' },
  { word: 'immutable', meaning: '作成後にその値を変更できない性質' },
  { word: 'inheritance', meaning: 'オブジェクト指向プログラミングにおける概念の一つで、あるクラスの特性（プロパティやメソッド）を別のクラスが引き継ぐこと' },
  { word: 'parseInt', meaning: '整数への変換' },
  { word: 'parseFloat', meaning: '浮動小数点数への変換' },
  { word: 'isNaN', meaning: '非数値判定' },
  { word: 'typeof', meaning: 'データ型確認' },
  { word: 'instanceof', meaning: 'インスタンス確認' },
  { word: 'console.log', meaning: 'コンソールに表示' },
  { word: 'alert', meaning: 'アラート表示' },
  { word: 'prompt', meaning: 'ユーザー入力取得' },
  { word: 'confirm', meaning: '確認ダイアログ表示' },
  { word: 'document.getElementById', meaning: 'IDによる要素取得' },
  { word: 'push', meaning: '配列の末尾に要素を追加' },
  { word: 'pop', meaning: '配列の末尾の要素を削除' },
  { word: 'shift', meaning: '配列の先頭の要素を削除' },
  { word: 'unshift', meaning: '配列の先頭に要素を追加' },
  { word: 'splice', meaning: '配列の要素を削除または置換' },
  { word: 'slice', meaning: '配列の一部を抽出' },
  { word: 'map', meaning: '配列の全ての要素に関数を適用' },
  { word: 'filter', meaning: '条件を満たす配列の要素を抽出' },
  { word: 'reduce', meaning: '配列の要素を一つの値に集約' },
  { word: 'forEach', meaning: '配列の全ての要素に関数を適用' },
  { word: 'if', meaning: '条件分岐' },
  { word: 'else', meaning: '条件が満たされなかった場合の分岐' },
  { word: 'switch', meaning: '値による条件分岐' },
  { word: 'for', meaning: '決まった回数のループ処理' },
  { word: 'while', meaning: '条件を満たす間ループ処理' },
  { word: 'new', meaning: '新しいオブジェクトを作成するためのキーワード' },
  { word: 'this', meaning: '現在のオブジェクトを参照するためのキーワード' },
  { word: 'addEventListener', meaning: 'イベントリスナの追加' },
  { word: 'removeEventListener', meaning: 'イベントリスナの削除' },
  { word: 'createElement', meaning: '新しい要素の作成' },
  { word: 'appendChild', meaning: '子要素として追加' },
  { word: 'removeChild', meaning: '子要素の削除' },
  { word: 'classList.add', meaning: 'クラスの追加' },
  { word: 'classList.remove', meaning: 'クラスの削除' },
  { word: 'classList.toggle', meaning: 'クラスの切り替え' },
  { word: 'dataset', meaning: 'data-*属性の操作' },
  { word: 'setInterval', meaning: '一定時間ごとに関数を実行' },
  { word: 'clearTimeout', meaning: 'setTimeoutのキャンセル' },
  { word: 'clearInterval', meaning: 'setIntervalのキャンセル' },
  { word: 'JSON.parse', meaning: 'JSON形式の文字列をオブジェクトに変換' },
  { word: 'JSON.stringify', meaning: 'オブジェクトをJSON形式の文字列に変換' },
  { word: 'Math.random', meaning: '0以上1未満のランダムな数値を生成' },
  { word: 'Math.floor', meaning: '引数以下の最大の整数を返す' },
  { word: 'Math.ceil', meaning: '引数以上の最小の整数を返す' },
  { word: 'Math.round', meaning: '最も近い整数を返す' },
  { word: 'Math.pow', meaning: 'xのy乗を計算' },
  { word: 'Math.sqrt', meaning: '平方根を計算' },
  { word: 'Math.abs', meaning: '絶対値を計算' },
  { word: 'Math.min', meaning: '最小値を計算' },
  { word: 'Math.max', meaning: '最大値を計算' },
  { word: 'Date', meaning: '日付と時間を扱う' },
  { word: 'toLocaleDateString', meaning: '地域に適した日付の文字列を返す' },
  { word: 'toLocaleTimeString', meaning: '地域に適した時間の文字列を返す' },
  { word: 'Promise', meaning: '非同期処理を扱う' },
  { word: 'async', meaning: '非同期関数を定義する' },
  { word: 'await', meaning: 'Promiseの結果を待つ' },
  { word: 'cookie', meaning: 'クッキーの操作' },
  { word: 'fetch', meaning: 'リソースを非同期に取得' },
  { word: 'then', meaning: 'Promiseの成功時の処理' },
  { word: 'catch', meaning: 'Promiseの失敗時の処理' },
  { word: 'finally', meaning: 'Promiseの成功失敗に関わらず最後に実行' },
  { word: 'localStorage', meaning: 'ブラウザのストレージ' },
  { word: 'sessionStorage', meaning: 'セッションごとのブラウザのストレージ' },
  { word: 'Navigator', meaning: 'ブラウザの情報' },
  { word: 'Location', meaning: '現在のURLの情報' },
  { word: 'History', meaning: 'ブラウザの履歴' },
  { word: 'Screen', meaning: '画面の情報' },
  { word: 'setTimeout', meaning: '一定時間後に関数を実行' },
  { word: 'setInterval', meaning: '一定時間ごとに関数を実行' },
  { word: 'try', meaning: '例外のテスト' },
  { word: 'catch', meaning: '例外のハンドリング' },
  { word: 'throw', meaning: '例外の生成' },
  { word: 'finally', meaning: '例外処理の後に必ず実行' },
  { word: 'RegExp', meaning: '正規表現オブジェクトの生成' },
  { word: 'test', meaning: '正規表現との一致テスト' },
  { word: 'match', meaning: '文字列と正規表現との一致検索' },
  { word: 'replace', meaning: '文字列の置換' },
  { word: 'split', meaning: '文字列の分割' },
  { word: 'join', meaning: '配列要素の結合' },
  { word: 'charCodeAt', meaning: '文字のUnicode値を取得' },
  { word: 'fromCharCode', meaning: 'Unicode値から文字を生成' },
  { word: 'slice', meaning: '文字列の部分取得' },
  { word: 'substring', meaning: '文字列の部分取得' },
  { word: 'substr', meaning: '文字列の部分取得' },
  { word: 'toUpperCase', meaning: '文字列を大文字に変換' },
  { word: 'toLowerCase', meaning: '文字列を小文字に変換' },
  { word: 'Array.isArray', meaning: '引数が配列かどうかを判定' },
  { word: 'Array.from', meaning: '配列風オブジェクトや反復可能オブジェクトから新しい配列インスタンスを生成' },
  { word: 'Array.of', meaning: '引数の数と値から新しい配列インスタンスを生成' },
  { word: 'Array.prototype.concat', meaning: '配列に他の配列や値を連結して新しい配列を生成' },
  { word: 'Array.prototype.every', meaning: '配列内の全ての要素が指定した関数でチェックをパスするかどうかを判定' },
  { word: 'Array.prototype.some', meaning: '配列内のいずれかの要素が指定した関数でチェックをパスするかどうかを判定' },
  { word: 'Array.prototype.findIndex', meaning: '配列内の要素が指定した関数を満たす最初のインデックスを返す' },
  { word: 'Array.prototype.includes', meaning: '配列が特定の要素を含むかどうかを判定' },
  { word: 'Object.keys', meaning: '指定したオブジェクトの自身の列挙可能なプロパティの名前を配列として返す' },
  { word: 'Object.values', meaning: '指定したオブジェクトの自身の列挙可能なプロパティの値を配列として返す' },
  { word: 'Object.entries', meaning: '指定したオブジェクトの自身の列挙可能なプロパティの[key, value]ペアの配列を返す' },
  { word: 'Object.assign', meaning: '一つ以上のソースオブジェクトから全ての列挙可能なプロパティをターゲットオブジェクトへコピー' },
  { word: 'Object.create', meaning: '指定したプロトタイプオブジェクトとプロパティを持つ新しいオブジェクトを生成' },
  { word: 'Object.freeze', meaning: 'オブジェクトを凍結' },
  { word: 'Object.seal', meaning: 'オブジェクトを封印' },
  { word: 'Array.prototype.forEach', meaning: '配列の全ての要素に対して関数を実行' },
  { word: 'Array.prototype.map', meaning: '配列の全ての要素に対して関数を実行し、その結果を新しい配列として生成' },
  { word: 'Array.prototype.filter', meaning: '配列の要素のうち、指定した関数を満たす要素のみを新しい配列として生成' },
  { word: 'Array.prototype.reduce', meaning: '配列の全ての要素に対して関数を左から右へと適用し、単一の出力値を生成' },
  { word: 'Array.prototype.reduceRight', meaning: '配列の全ての要素に対して関数を右から左へと適用し、単一の出力値を生成' },
  { word: 'Array.prototype.push', meaning: '配列の末尾に一つ以上の要素を追加し、新しい長さを返す' },
  { word: 'Array.prototype.pop', meaning: '配列から最後の要素を取り除き、その要素を返す' },
  { word: 'Array.prototype.shift', meaning: '配列から最初の要素を取り除き、その要素を返す' },
  { word: 'Array.prototype.unshift', meaning: '配列の先頭に一つ以上の要素を追加し、新しい長さを返す' },
  { word: 'Array.prototype.sort', meaning: '配列の要素を適切な位置にソートし、その配列を返す' },
  { word: 'Array.prototype.reverse', meaning: '配列の要素の位置を反転させ、その配列を返す' },
  { word: 'Array.prototype.splice', meaning: '配列の一部を取り除き、代わりに新たな要素を追加' },
  { word: 'Array.prototype.slice', meaning: '配列の一部または全部を浅くコピーして新たな配列を作成' },
  { word: 'Array.prototype.fill', meaning: '配列のすべてまたは一部の要素を静的な値で埋める' },
  { word: 'Array.prototype.find', meaning: '配列内の要素が指定した関数を満たす最初の要素を返す' },
  { word: 'Array.prototype.copyWithin', meaning: '配列内の要素を同じ配列内の別の位置にコピーし、その配列を変更' },
  { word: 'Array.prototype.flat', meaning: '全てのサブ配列要素を親配列に結合して新しい配列を生成' },
  { word: 'Array.prototype.flatMap', meaning: '配列の全ての要素に関数を適用し、結果として得られる配列を新しい配列に結合' },
  { word: 'Array.prototype.toString', meaning: '配列の要素を文字列に変換し、それらをカンマで結合した新しい文字列を返す' },
  { word: 'Array.prototype.toLocaleString', meaning: '配列の要素を文字列に変換し、それらをロケールに適した表現で結合した新しい文字列を返す' },
  { word: 'Array.prototype.indexOf', meaning: '配列で指定された要素を見つけるために使用され、その最初のインデックスを返し、存在しない場合は-1を返す' },
  { word: 'Array.prototype.lastIndexOf', meaning: '配列で指定された要素を見つけるために使用され、その最後のインデックスを返し、存在しない場合は-1を返す' },
  { word: 'Object.prototype.hasOwnProperty', meaning: 'オブジェクトが指定したプロパティを自身の直接のプロパティとして持っているかどうかを判定' },
  { word: 'Object.prototype.isPrototypeOf', meaning: '指定したオブジェクトが現在のオブジェクトのプロトタイプチェーンに存在するかどうかを判定' },
  { word: 'Object.prototype.propertyIsEnumerable', meaning: '指定したプロパティが列挙可能かどうかを判定' },
  { word: 'Object.prototype.toString', meaning: 'オブジェクトを文字列に変換' },
  { word: 'Object.prototype.valueOf', meaning: 'オブジェクトのプリミティブ値を返す' },
  { word: 'Object.prototype.toLocaleString', meaning: 'オブジェクトを文字列に変換し、それをロケールに適した表現で返す' },
  { word: 'Date.prototype.getDate', meaning: '指定した日付の日の部分を返す' },
  { word: 'Date.prototype.getDay', meaning: '指定した日付の曜日を返す' },
  { word: 'Date.prototype.getFullYear', meaning: '指定した日付の年を返す' },
  { word: 'Date.prototype.getHours', meaning: '指定した日付の時間を返す' },
  { word: 'Date.prototype.getMilliseconds', meaning: '指定した日付のミリ秒を返す' },
  { word: 'Date.prototype.getMinutes', meaning: '指定した日付の分を返す' },
  { word: 'Date.prototype.getMonth', meaning: '指定した日付の月を返す' },
  { word: 'Date.prototype.getSeconds', meaning: '指定した日付の秒を返す' },
  { word: 'Date.prototype.getTime', meaning: '1970年1月1日 00:00:00 UTCから指定した日付までのミリ秒を返す' },
  { word: 'Date.prototype.getTimezoneOffset', meaning: 'UTCとローカル時間との差を分で返す' },
  // { word: 'Date.prototype.getUTCDate', meaning: '指定した日付の日をUTCで返す' },
  // { word: 'Date.prototype.getUTCDay', meaning: '指定した日付の曜日をUTCで返す' },
  // { word: 'Date.prototype.getUTCFullYear', meaning: '指定した日付の年をUTCで返す' },
  // { word: 'Date.prototype.getUTCHours', meaning: '指定した日付の時間をUTCで返す' },
  // { word: 'Date.prototype.getUTCMilliseconds', meaning: '指定した日付のミリ秒をUTCで返す' },
  // { word: 'Date.prototype.getUTCMinutes', meaning: '指定した日付の分をUTCで返す' },
  // { word: 'Date.prototype.getUTCMonth', meaning: '指定した日付の月をUTCで返す' },
  // { word: 'Date.prototype.getUTCSeconds', meaning: '指定した日付の秒をUTCで返す' },
  { word: 'Date.prototype.setDate', meaning: '指定した日付の日を設定する' },
  { word: 'Date.prototype.setFullYear', meaning: '指定した日付の年を設定する' },
  { word: 'Date.prototype.setHours', meaning: '指定した日付の時間を設定する' },
  { word: 'Date.prototype.setMilliseconds', meaning: '指定した日付のミリ秒を設定する' },
  { word: 'Date.prototype.setMinutes', meaning: '指定した日付の分を設定する' },
  { word: 'Date.prototype.setMonth', meaning: '指定した日付の月を設定する' },
  { word: 'Date.prototype.setSeconds', meaning: '指定した日付の秒を設定する' },
  { word: 'Date.prototype.setTime', meaning: '指定した日付を1970年1月1日 00:00:00 UTCからのミリ秒で設定する' },
  // { word: 'Date.prototype.setUTCDate', meaning: '指定した日付の日をUTCで設定する' },
  // { word: 'Date.prototype.setUTCFullYear', meaning: '指定した日付の年をUTCで設定する' },
  // { word: 'Date.prototype.setUTCHours', meaning: '指定した日付の時間をUTCで設定する' },
  // { word: 'Date.prototype.setUTCMilliseconds', meaning: '指定した日付のミリ秒をUTCで設定する' },
  // { word: 'Date.prototype.setUTCMinutes', meaning: '指定した日付の分をUTCで設定する' },
  // { word: 'Date.prototype.setUTCMonth', meaning: '指定した日付の月をUTCで設定する' },
  // { word: 'Date.prototype.setUTCSeconds', meaning: '指定した日付の秒をUTCで設定する' },
  { word: 'Date.prototype.toDateString', meaning: '日付部分を人間が読める形式の文字列で返す' },
  { word: 'Date.prototype.toISOString', meaning: '日付をISO 8601形式の文字列で返す' },
  { word: 'Date.prototype.toJSON', meaning: '日付をJSON形式で表現する文字列を返す' },
  { word: 'Date.prototype.toLocaleDateString', meaning: '日付部分をロケールに適した形式の文字列で返す' },
  { word: 'Date.prototype.toLocaleTimeString', meaning: '時間部分をロケールに適した形式の文字列で返す' },
  { word: 'Date.prototype.toString', meaning: '日付を人間が読める形式の文字列で返す' },
  { word: 'Date.prototype.toTimeString', meaning: '時間部分を人間が読める形式の文字列で返す' },
  // { word: 'Date.prototype.toUTCString', meaning: '日付をUTC形式の文字列で返す' },
  { word: 'Date.prototype.valueOf', meaning: '日付のプリミティブ値を返す' },
  { word: 'Function.prototype.apply', meaning: '指定したthis値と配列（または配列風オブジェクト）を引数として関数を呼び出す' },
  { word: 'Function.prototype.bind', meaning: '新しい関数を生成し、その関数内部のthis値を指定した値にバインドする' },
  { word: 'Function.prototype.call', meaning: '指定したthis値と引数を使って関数を呼び出す' },
  { word: 'Function.prototype.toString', meaning: '関数のソースコードを表す文字列を返す' },
  { word: 'Function.prototype.name', meaning: '関数の名前を返す' },
  { word: 'Function.prototype.length', meaning: '関数が期待する引数の数を返す' },
  { word: 'Array.prototype.concat', meaning: '既存の配列に他の配列や値を連結し、新しい配列を生成する' },
  { word: 'Array.prototype.entries', meaning: '配列のイテレータオブジェクトを返す' },
  { word: 'EvalError', meaning: 'eval() 関数の使用時にエラーが発生した' },
  { word: 'URIError', meaning: 'encodeURI() や decodeURI() 関数で無効なURIが使用された' },
  { word: 'TypeError', meaning: '型が予想される操作が無効な型で実行された' },
  { word: 'SyntaxError', meaning: '構文が正しくない' },
  { word: 'ReferenceError', meaning: '変数が定義されていないか、スコープ内でアクセスできない' },
  { word: 'RangeError', meaning: '数値が有効な範囲外にある' }
];
// --------------------------------------------------------------------------------------

document.addEventListener("keydown", pageMoveLock); //スペースキーによるスクロールを無効にする
function pageMoveLock(event) {
  if (event.keyCode === 32) {
    event.preventDefault();
  }
}


let randomIndex;
let question;
let word;
let meaning;
let startFlag = false;
const correctMP3 = new Audio("media/correct.mp3"); //遅延回避のため先読み
const inCorrectMP3 = new Audio("media/incorrect.mp3"); //遅延回避のため先読み

let loc;
let wordCount;
let typeMiss;
let accuracy;
let typeSpeed;
let startTime;
const timeLimit = 60 * 1000;

const typingWord = document.getElementById("typingWord");
const wordMeaning = document.getElementById("wordMeaning")
const wordCountLabel = document.getElementById("wordCount");
const typeMissLabel = document.getElementById("typeMiss");
const timeLeftLabel = document.getElementById('timeLeft');
const accuracyLabel = document.getElementById('accuracy');
const typeSpeedLabel = document.getElementById('typeSpeed');

typingWord.addEventListener("click", () => {  //ボタンを押したら開始にしたい
  if (startFlag === true) {
    return;
  }
  loc = 0;
  wordCount = 0;
  typeMiss = 0;
  wordCountLabel.textContent = wordCount;
  typeMissLabel.textContent = typeMiss;
  startFlag = true;
  randomIndex = Math.floor(Math.random() * questionsForJS.length);
  question = Object.values(questionsForJS[randomIndex]);
  word = question[0];
  meaning = question[1];


  typingWord.textContent = word;
  wordMeaning.textContent = meaning;
  startTime = Date.now();
  updateTimeLimit();
});

function updateTimeLimit() {
  const timer = startTime + timeLimit - Date.now();
  timeLeftLabel.textContent = (timer / 1000).toFixed(1);

  const timeoutId = setTimeout(() => {
    updateTimeLimit();
  }, 100);

  if (timer < 0) {
    startFlag = false;
    clearTimeout(timeoutId);
    timeLeftLabel.textContent = "0.0";
    setTimeout(() => {
      alert("Game Over");
    }, 100);
    typingWord.textContent = "Click to replay";
    wordMeaning.textContent = ""
    return;
  }

}


function updateTypingWord() {
  let update = "";
  for (let i = 0; i < loc; i++) {
    update += "-";
  }
  typingWord.textContent = update + word.substring(loc);
}

window.addEventListener("keydown", e => {
  if (startFlag === false) {
    return;
  }
  if (e.key === word[loc]) {
    loc++;
    if (loc === word.length) {
      const correctMP3 = new Audio("media/correct.mp3"); //連続再生の為再定義
      correctMP3.play();
      randomIndex = Math.floor(Math.random() * questionsForJS.length);
      question = Object.values(questionsForJS[randomIndex]);
      word = question[0];
      meaning = question[1];
      loc = 0;
      wordMeaning.textContent = meaning;
      updateTypingWord();
    }
    updateTypingWord();
    wordCount++;
    wordCountLabel.textContent = wordCount;
  } else if (e.key === "Shift") {
    ;
  } else {
    typeMiss++;
    typeMissLabel.textContent = typeMiss;
    const inCorrectMP3 = new Audio("media/incorrect.mp3"); //連続再生の為再定義
    inCorrectMP3.play();
  }
  accuracy = wordCount + typeMiss === 0 ? 0 : wordCount / ( wordCount + typeMiss ) * 100;
  typeSpeed = wordCount / (timeLimit / 60000);
  accuracyLabel.textContent = accuracy.toFixed(2);
  typeSpeedLabel.textContent = typeSpeed;
});


