// ここからコードを書きます🤗

// イーブイボタン
$(".zbtn").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan1.png");
  console.log("bbb")
});

// シャワーズボタン
$(".zbtna").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan2.png");
  console.log("bbb")
});

// サンダースボタン
$(".zbtnb").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan3.png");
  console.log("bbb")
});

// ブースターボタン
$(".zbtnc").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan4.png");
  console.log("bbb")
});

// エーフィーボタン
$(".zbtnd").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan5.png");
  console.log("bbb")
});

// ブラッキーボタン
$(".zbtne").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan6.png");
  console.log("bbb")
});

// リーフィアボタン
$(".zbtnf").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan7.png");
  console.log("bbb")
});

// グレイシアボタン
$(".zbtng").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan8.png");
  console.log("bbb")
});

// ニンフィアボタン
$(".zbtnh").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan9.png");
  console.log("bbb")
});


// 背景ランダムボタン
$(".btn").on("click", function () {
    const random = Math.floor(Math.random() * 5);
    console.log(random, "ランダム数字");

    if (random === 0) {
      console.log("空");
      $("h2").text("たかくて　あおい　そら！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/aozora.jpg");
    } else if (random === 1) {
      console.log("機械工場");
      $("h2").text("ここは　マシンが　いっぱいの　こうじょうだ！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/kikai.jpg");
    } else if (random === 2) {
      console.log("宇宙");
      $("h2").text("ええっ！　うちゅうまで　きちゃった！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/space.jpg");
    } else if (random === 3) {
      console.log("砂漠");
      $("h2").text("じりじり　あつい！　ここは　さばくだ！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/sabaku.png");
    } else if (random === 4) {
      console.log("岩山");
      $("h2").text("ごつごつ。いわが　いっぱいの　やまだね！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/rock.jpg");
    }
  });

// タイマーボタンとBGM連携
  $('#start').click(function() {
    $("#rev").get(0).play();
});


// お絵かきエリア
// ページの読み込みが完了したらコールバック関数が呼ばれる
// ※コールバック: 第2引数の無名関数(=関数名が省略された関数)
window.addEventListener('load', () => {
  const canvas = document.querySelector('#draw-area');
  // contextを使ってcanvasに絵を書いていく
  const context = canvas.getContext('2d');
 
  // 直前のマウスのcanvas上のx座標とy座標を記録する
  const lastPosition = { x: null, y: null };
 
  // マウスがドラッグされているか(クリックされたままか)判断するためのフラグ
  let isDrag = false;
 
  // 絵を書く
  function draw(x, y) {
    // マウスがドラッグされていなかったら処理を中断する。
    // ドラッグしながらしか絵を書くことが出来ない。
    if(!isDrag) {
      return;
    }
 
    // 「context.beginPath()」と「context.closePath()」を都度draw関数内で実行するよりも、
    // 線の描き始め(dragStart関数)と線の描き終わり(dragEnd)で1回ずつ読んだほうがより綺麗に線画書ける
 
    // 線の状態を定義する
    // MDN CanvasRenderingContext2D: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
    context.lineCap = 'round'; // 丸みを帯びた線にする
    context.lineJoin = 'round'; // 丸みを帯びた線にする
    context.lineWidth = 5; // 線の太さ
    context.strokeStyle = 'black'; // 線の色
 
    // 書き始めは lastPosition.x, lastPosition.y の値はnullとなっているため、
    // クリックしたところを開始点としている。
    // この関数(draw関数内)の最後の2行で lastPosition.xとlastPosition.yに
    // 現在のx, y座標を記録することで、次にマウスを動かした時に、
    // 前回の位置から現在のマウスの位置まで線を引くようになる。
    if (lastPosition.x === null || lastPosition.y === null) {
      // ドラッグ開始時の線の開始位置
      context.moveTo(x, y);
    } else {
      // ドラッグ中の線の開始位置
      context.moveTo(lastPosition.x, lastPosition.y);
    }
    // context.moveToで設定した位置から、context.lineToで設定した位置までの線を引く。
    // - 開始時はmoveToとlineToの値が同じであるためただの点となる。
    // - ドラッグ中はlastPosition変数で前回のマウス位置を記録しているため、
    //   前回の位置から現在の位置までの線(点のつながり)となる
    context.lineTo(x, y);
 
    // context.moveTo, context.lineToの値を元に実際に線を引く
    context.stroke();
 
    // 現在のマウス位置を記録して、次回線を書くときの開始点に使う
    lastPosition.x = x;
    lastPosition.y = y;
  }
 
  // canvas上に書いた絵を全部消す
  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
 
  // マウスのドラッグを開始したらisDragのフラグをtrueにしてdraw関数内で
  // お絵かき処理が途中で止まらないようにする
  function dragStart(event) {
    // これから新しい線を書き始めることを宣言する
    // 一連の線を書く処理が終了したらdragEnd関数内のclosePathで終了を宣言する
    context.beginPath();
 
    isDrag = true;
  }
  // マウスのドラッグが終了したら、もしくはマウスがcanvas外に移動したら
  // isDragのフラグをfalseにしてdraw関数内でお絵かき処理が中断されるようにする
  function dragEnd(event) {
    // 線を書く処理の終了を宣言する
    context.closePath();
    isDrag = false;
 
    // 描画中に記録していた値をリセットする
    lastPosition.x = null;
    lastPosition.y = null;
  }
 
  // マウス操作やボタンクリック時のイベント処理を定義する
  function initEventHandler() {
    const clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click', clear);
 
    canvas.addEventListener('mousedown', dragStart);
    canvas.addEventListener('mouseup', dragEnd);
    canvas.addEventListener('mouseout', dragEnd);
    canvas.addEventListener('mousemove', (event) => {
      // eventの中の値を見たい場合は以下のようにconsole.log(event)で、
      // デベロッパーツールのコンソールに出力させると良い
      // console.log(event);
 
      draw(event.layerX, event.layerY);
    });
  }
 
  // イベント処理を初期化する
  initEventHandler();
});



// 最後にメッセージ
  $(".btny").on("click", function(){
    console.log("aaa");
    $("h3").text("とっても　じょうずに　できたね！");
    console.log("bbb")
  });
  
  $(".btnn").on("click", function(){
    console.log("aaa");
    $("h3").text("とっても　すてきだよ！　じしんを　もってね！");
    console.log("bbb")
  });

          // tweetリンクを生成
          var tweetHtml = "<p><a href='https://twitter.com/intent/tweet?hashtags=Gz&text=" + encodeURIComponent(result) + " jQueryの授業より'>結果をツイート</a></p>";


// $("xxxx") = 要素 class名 id名