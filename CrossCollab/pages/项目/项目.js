Page({
  data: {
    projects: [
      {
        image: '/image/智能云联 - 云计算和物联网.png',
        title: '智能云联 - 云计算和物联网',
        details: '"智能云联，云端大脑运算无限，物联神经网络覆盖全球。"'
      },
      {
        image: '/image/模态网络内生安全原型系统设计与验证.webp',
        title: '模态网络内生安全原型系统设计与验证',
        details: '"模态网络，安全基石，内生机制，原型创新，系统稳固，验证严谨。"'
      },
      {
        image: '/image/深度学习与实习 - 深度学习和实践.png',
        title: '深度学习与实习 - 深度学习和实践',
        details: '"深学实融，理论前沿探索无界，践习合一铸就专业精英。"'
      },
      {
        image: '/image/计算机科学与软件.png',
        title: '计算机科学与软件',
        details: '"计算科学，逻辑之海深邃无垠；软件艺术，编码编织梦想成真。"'
      },
      {
        image: '/image/ACM国际大学生程序设计大赛.png',
        title: 'ACM国际大学生程序设计大赛',
        details: 'ACM大赛，智竞巅峰，群英荟萃码乾坤，创思无界编未来。'
      },
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
  },

  onAddProject: function() {
    // 添加项目的逻辑
    wx.navigateTo({
      url: '/pages/项目/发布项目' // 跳转到发布项目页面
    });
  }
});
