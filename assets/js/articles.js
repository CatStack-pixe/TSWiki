// 示例文章数据
const articles = [
    {
      id: 1,
      title: "欢迎来到欢乐唐氏群",
      content: "这是欢乐唐氏群的第一篇文章，介绍群的目的和理念。我们希望每个成员都能在这里找到欢乐与友情！"
    },
    {
      id: 2,
      title: "群规与文化",
      content: "群规是保障每个成员良好体验的基础，大家需要遵守共同的行为规范。我们也倡导积极向上的群文化。"
    },
    {
      id: 3,
      title: "活动与合作",
      content: "群内定期组织活动，鼓励大家参与并分享各自的兴趣爱好。我们也欢迎与其他团体进行合作。"
    }
  ];
  
  // 将文章渲染到页面上
  const articleList = document.getElementById('article-list');
  articles.forEach(article => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="article.html?id=${article.id}">
        <h3>${article.title}</h3>
        <p>${article.content.substring(0, 100)}...</p>
      </a>
    `;
    articleList.appendChild(li);
  });
  
  // 文章搜索功能
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = ''; // 清空旧的搜索结果
  
    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.content.toLowerCase().includes(query)
    );
  
    filteredArticles.forEach(article => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="article.html?id=${article.id}">${article.title}</a>`;
      searchResults.appendChild(li);
    });
  });
  