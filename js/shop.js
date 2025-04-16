// 產品資料
const products = [
    {
        id: 1,
        name: '星光連帽衫',
        description: '如銀河般閃耀的設計，讓您在夜空中熠熠生輝。',
        longDescription: '採用特殊反光材質，在夜晚呈現出迷人的星光效果。舒適的面料讓您在探索宇宙時保持溫暖。',
        image: 'images/S__9543691_0.jpg'
    },
    {
        id: 2,
        name: '星雲夾克',
        description: '靈感來自壯麗的星雲，充滿夢幻色彩。',
        longDescription: '獨特的漸層染色工藝，每件都是獨一無二的藝術品。防風防水，適合各種天氣。',
        image: 'images/S__9543693_0.jpg'
    },
    {
        id: 3,
        name: '月球運動褲',
        description: '輕盈如月球漫步，舒適自在。',
        longDescription: '採用最新科技面料，輕盈透氣，活動自如。口袋設計靈感來自太空人服裝。',
        image: 'images/S__9543694_0.jpg'
    },
    {
        id: 4,
        name: '星際背心',
        description: '簡約設計中蘊含宇宙之美。',
        longDescription: '採用環保材質製成，印有精美的星座圖案。適合日常穿著或運動時使用。',
        image: 'images/S__9543695_0.jpg'
    },
    {
        id: 5,
        name: '彗星運動鞋',
        description: '如彗星劃過夜空般迷人。',
        longDescription: '特殊的發光鞋帶設計，搭配舒適鞋墊，讓您走路如同漫步星河。',
        image: 'images/S__9543696_0.jpg'
    },
    {
        id: 6,
        name: '銀河T恤',
        description: '將整個銀河系穿在身上。',
        longDescription: '採用3D印刷技術，呈現逼真的銀河圖案。透氣舒適，適合各種場合。',
        image: 'images/S__9543703_0.jpg'
    }
];

// 初始化頁面
document.addEventListener('DOMContentLoaded', () => {
    createStars(); // 重用首頁的星空背景
    renderProducts();
    setupModal();
});

// 渲染產品卡片
function renderProducts() {
    const grid = document.querySelector('.products-grid');
    grid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button class="view-more-btn" data-product="${product.id}">查看更多</button>
        `;
        grid.appendChild(card);
    });
}

// 設置模態框功能
function setupModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-btn');
    
    // 關閉模態框
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
    
    // 點擊模態框外部關閉
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    // 產品詳情按鈕點擊事件
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-more-btn')) {
            const productId = parseInt(e.target.dataset.product);
            const product = products.find(p => p.id === productId);
            
            if (product) {
                showProductDetails(product);
            }
        }
    });
}

// 顯示產品詳情
function showProductDetails(product) {
    const modal = document.getElementById('productModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="max-width: 100%; border-radius: 10px;">
        <h2>${product.name}</h2>
        <p>${product.longDescription}</p>
    `;
    
    modal.style.display = 'block';
}
