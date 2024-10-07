Page({
  data: {
    teams: [
      {
        id: 1,
        image: '/image/团队1.jpg',
        name: '益行人热',
        details: '成员: 10  | 项目: 2'
      },
      {
        id: 2,
        image: '/image/团队2.png',
        name: '蜗牛花开',
        details: '成员: 15 | 项目: 3'
      },
      {
        id: 3,
        image: '/image/团队3.png',
        name: '海底中队',
        details: '成员: 12 | 项目: 2'
      },
      {
        id: 4,
        image: '/image/团队4.png',
        name: '黑莓团队',
        details: '成员: 14 | 项目: 3'
      },
      {
        id: 5,
        image: '/image/团队5.png',
        name: '化茧成蝶',
        details: '成员: 10 | 项目: 4'
      },
      {
        id: 6,
        image: '/image/团队6.jpg',
        name: '猫和老鼠',
        details: '成员: 20 | 项目: 3'
      },
    ]
  },

  onSearchInput(e) {
    // 搜索逻辑
    console.log("搜索内容:", e.detail.value);
  },

  onTeamTap(e) {
    const teamName = e.currentTarget.dataset.name; // 获取团队名称
    // 跳转到对应团队的详情页面
    wx.navigateTo({
      url: `/pages/团队/${teamName}` // 确保你有对应的团队详情页
    });
  },

  onJoinTeam: function(e) {
    const teamId = e.currentTarget.dataset.id;
    // 加入团队的逻辑
    wx.showToast({
      title: '已加入团队 ' + teamId,
      icon: 'success'
    });
  }
});
