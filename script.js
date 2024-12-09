// ページが読み込まれた後にアニメーションを開始
window.onload = function() {
  // タイプライターアニメーション終了時に処理を実行
  const typewriterText = document.getElementById('typewriter-text');

  // タイプライターアニメーションが終了したとき
  typewriterText.addEventListener('animationend', function() {
    const messageBox = document.getElementById('message-box');
    messageBox.style.display = 'block'; // メッセージボックスを表示

    // メッセージボックスをスムーズに表示
    setTimeout(function() {
      messageBox.style.opacity = '1';
      messageBox.style.transform = 'scale(1)';
      showMessageLines();
    }, 500); // メッセージボックスのアニメーション後に次の処理
  });

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
