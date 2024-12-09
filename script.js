document.getElementById('changeMessageBtn').addEventListener('click', function() {
    const messages = [
        "素晴らしい一年になりますように！",
        "あなたの幸せを願っています！",
        "健康と成功を祈っています！"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.querySelector('.card-body p').textContent = randomMessage;
});
