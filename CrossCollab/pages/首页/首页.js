Page({
  data: {
    recommendations: [
      { id: 1, title: "智能云联 - 云计算和物联网", count: "1888", image: "/image/智能云联 - 云计算和物联网.png" },
      { id: 2, title: "ACM国际大学生程序设计大赛", count: "288", image: "/image/ACM国际大学生程序设计大赛.png" },
      { id: 3, title: "模态网络内生安全原型系统设计与验证", count: "1.2w", image: "/image/模态网络内生安全原型系统设计与验证.webp" },
      { id: 4, title: "深度学习与实习 - 深度学习和实践", count: "1650", image: "/image/深度学习与实习 - 深度学习和实践.png" },
      { id: 5, title: "计算机科学与软件", count: "5.4w", image: "/image/计算机科学与软件.png" }
    ]
  },

  onSearchInput(e) {
    // 搜索逻辑
    console.log("搜索内容:", e.detail.value);
  },

  onItemTap(e) {
    const title = e.currentTarget.dataset.id; // 获取项目标题
    // 跳转到对应项目的详情页面
    wx.navigateTo({
      url: `/pages/项目库/${title}` // 跳转到项目详情页面
    });
  }
});
