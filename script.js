// タイプライターアニメーション終了後の処理
window.onload = function() {
  setTimeout(function() {
    const messageBox = document.getElementById('message-box');
    messageBox.style.display = 'block';
    setTimeout(function() {
      messageBox.style.opacity = '1';
      messageBox.style.transform = 'scale(1)';
      showMessageLines();
    }, 500); // メッセージボックス表示後にアニメーション
  }, 4500); // タイプライターアニメーション終了後

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
