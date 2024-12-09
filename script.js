document.addEventListener("DOMContentLoaded", function() {
    // 「HPB!!」を遅延させて表示
    const hpMessage = document.querySelector('.hp-message');
    hpMessage.style.opacity = 0;  // 初めは透明にしておく
    setTimeout(() => {
        hpMessage.style.transition = "opacity 1s ease-in-out";
        hpMessage.style.opacity = 1;  // 1秒後に表示
    }, 1000);

    // 「お誕生日おめでとう！」のタイプライターアニメーション
    const typewriterMessage = document.querySelector('.main-message');
    const typingDuration = 3000; // タイプライターアニメーションの時間
    const cursor = document.querySelector('.main-message::after');  // キャレット (カーソル)

    typewriterMessage.style.animation = `typing ${typingDuration}ms steps(40) 1s forwards, blink 0.75s step-end infinite`;

    // タイプライターアニメーションが完了したらカーソルを非表示
    setTimeout(() => {
        typewriterMessage.style.animation = `typing ${typingDuration}ms steps(40) 1s forwards`;
        typewriterMessage.classList.add('no-blink');
    }, typingDuration + 1000);

    // メッセージの表示順番
    const fadeMessages = document.querySelectorAll('.fade-in-message');
    setTimeout(() => {
        fadeMessages.forEach((message, index) => {
            setTimeout(() => {
                message.style.animation = `fadeIn 2s ease-out forwards`;  // アニメーションを適用
            }, (index + 1) * 500); // 「お誕生日おめでとう！」が終わった後に表示
        });
    }, typingDuration);  // 「お誕生日おめでとう！」が完全に表示された後にメッセージが表示される
});
