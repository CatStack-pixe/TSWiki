// 示例成员数据
const members = [
    { id: 1, name: "むなしいなゆめ", avatar: "assets/images/むなしいなゆめ.jpg", bio: "群主，带领大家享受生活！" },
    { id: 2, name: "Aniseedflowery", avatar: "assets/images/Aniseedflowery.jpg", bio: "苦鲁西~" },
    { id: 3, name: "Infinity", avatar: "assets/images/Infinity.jpg", bio: "技术大神，代码无敌！" },
    { id: 4, name: "Ookounki", avatar: "assets/images/Ookounki.jpg", bio: "文艺青年，喜爱写作。" }
    { id: 5, name: "星海", avatar: "assets/images/星海.jpg", bio: "导管大蛇，天天戮关" }
  ];
  
  // 获取成员列表的容器
  const memberList = document.getElementById('member-list');
  
  // 遍历成员数据并生成对应的列表项
  members.forEach((member, index) => {
    // 创建列表项
    const li = document.createElement('li');
    
    // 为每个成员设置延迟动画
    li.style.setProperty('--i', index + 1);  // 使用 CSS 变量来控制动画的延迟
    
    // 将成员内容填充到列表项中
    li.innerHTML = `
      <img src="${member.avatar}" alt="${member.name}" />
      <div>
        <h3>${member.name}</h3>
        <p>${member.bio}</p>
      </div>
    `;
    
    // 将列表项添加到成员列表中
    memberList.appendChild(li);
  });
  
