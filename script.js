document.addEventListener("DOMContentLoaded", function() {
    // 「HPB!!」を遅延させて表示
    const hpMessage = document.querySelector('.hp-message');
    hpMessage.style.opacity = 0;  // 初めは透明にしておく
    setTimeout(() => {
        hpMessage.style.transition = "opacity 1s ease-in-out";
        hpMessage.style.opacity = 1;  // 1秒後に表示
    }, 1000);

    // メッセージの表示順にアニメーションを適用
    const fadeMessages = document.querySelectorAll('.fade-in-message');
    fadeMessages.forEach((message, index) => {
        // 各メッセージのアニメーション開始を遅延させる
        setTimeout(() => {
            message.style.animation = `fadeIn 2s ease-out forwards`;  // アニメーションを有効にする
        }, index * 500);  // 各メッセージを0.5秒間隔で表示
    });

    // タイプライターアニメーションを適用（「お誕生日おめでとう！」）
    const typewriterMessage = document.querySelector('.main-message');
    typewriterMessage.style.animation = 'typing 3s steps(40) 1s forwards, blink 0.75s step-end infinite';
});
