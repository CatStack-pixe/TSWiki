// 在页面加载完成后，移除加载屏幕
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    
    // 为加载屏幕添加淡出动画类
    loadingScreen.classList.add('fade-out');
    
    // 等待动画完成后移除加载屏幕
    setTimeout(() => {
      loadingScreen.style.display = 'none';  // 隐藏加载屏幕
    }, 1000);  // 假设动画时长是 1 秒
  });
  