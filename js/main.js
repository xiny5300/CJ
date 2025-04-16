// 建立星空背景
function createStars() {
    const stars = document.querySelector('.stars');
    const count = 200;  // 星星數量

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = '#F5ECD7';
        star.style.borderRadius = '50%';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        stars.appendChild(star);
    }
}

// 建立流星效果
function createMeteor() {
    const meteor = document.createElement('div');
    meteor.style.position = 'absolute';
    meteor.style.width = '2px';
    meteor.style.height = '50px';
    meteor.style.background = 'linear-gradient(transparent, #F5ECD7)';
    meteor.style.transform = 'rotate(-45deg)';
    meteor.style.left = `${Math.random() * 100}%`;
    meteor.style.top = '0';
    meteor.style.opacity = '0';
    meteor.style.animation = 'meteor 2s linear';
    
    document.querySelector('.meteor-shower').appendChild(meteor);
    
    // 流星動畫結束後移除元素
    meteor.addEventListener('animationend', () => {
        meteor.remove();
    });
}

// 定期產生流星
function startMeteorShower() {
    setInterval(createMeteor, 2000);
}

// 初始化頁面
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    startMeteorShower();
    
    // 進入按鈕點擊事件
    document.getElementById('enterButton').addEventListener('click', () => {
        window.location.href = 'shop.html';
    });
});

// 添加必要的 CSS 動畫
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
    }
    
    @keyframes meteor {
        0% { 
            transform: translateY(0) translateX(0) rotate(-45deg);
            opacity: 1;
        }
        100% { 
            transform: translateY(1000px) translateX(1000px) rotate(-45deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
