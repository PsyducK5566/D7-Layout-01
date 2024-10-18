import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");


document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.cardcontainer');
    const cards = document.querySelectorAll('.card');
    const btnDecide = document.querySelector('.btnDecide');
    const drawcardAnimation = document.querySelector('.drawcardAnimation');
    const drawcardAns = document.querySelector('.drawcardAns');
  
    // 每張卡片的點擊事件
    cards.forEach(card => {
      card.addEventListener('click', function() {
        // 為 cardcontainer 添加 'expanded' class，使所有卡片保持散開
        cardContainer.classList.add('expanded');
  
        // 卡片維持散開效果
        cards.forEach((card, index) => {
          card.style.transform = `rotate(${(index - 4) * 5}deg) translate(${(index - 4) * 120}px, -70px)`;
        });
      });
    });
  
    // 持續查看btndecided是否有點擊
    btnDecide.addEventListener('click', function() {
      // 隱藏抽卡動畫區塊
      drawcardAnimation.style.display = 'none';
      
      // 顯示抽卡結果區塊
      drawcardAns.style.display = 'block';
    });
  });
  