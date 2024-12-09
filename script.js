// ページが読み込まれた後にアニメーションを開始
window.onload = function() {
  const addressText = document.getElementById('address-text');
  const textToDisplay = "○○君へ"; // 表示するテキスト
  let currentIndex = 0;

  // 1文字ずつ表示する関数
  function typeWriter() {
    if (currentIndex < textToDisplay.length) {
      addressText.innerHTML += textToDisplay.charAt(currentIndex);
      currentIndex++;
    } else {
      // タイピング終了後、メッセージボックスの表示処理を実行
      const messageBox = document.getElementById('message-box');
      messageBox.style.display = 'block';

      // メッセージボックスをスムーズに表示
      setTimeout(function() {
        messageBox.style.opacity = '1';
        messageBox.style.transform = 'scale(1)';
        showMessageLines();
      }, 500); // メッセージボックスのアニメーション後に次の処理
    }
  }

  // 文字を1文字ずつ表示する間隔を設定
  let typingInterval = setInterval(typeWriter, 200); // 200ミリ秒ごとに文字を表示

  // タイピングアニメーション終了後、浮き上がるアニメーションを追加
  setTimeout(function() {
    addressText.style.opacity = '1';
    addressText.style.transform = 'translateY(0)';
  }, 500); // 文字の表示後に浮き上がり

  // メッセージの各行を浮き上がるアニメーションで表示
  function showMessageLines() {
    const lines = document.querySelectorAll('.message-line');
    lines.forEach((line, index) => {
      setTimeout(function() {
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      }, index * 800); // 各行の表示に遅延を設定
    });
  }
};
