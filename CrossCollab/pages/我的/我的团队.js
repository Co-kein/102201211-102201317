Page({
  data: {},

  goBack: function() {
    wx.navigateBack({
      delta: 1
    });
  },

  // 点击“加入团队”时跳转到“我的团队”页面
  TojoinTeam: function() {
    wx.navigateTo({
      url: '/pages/团队/团队' // 路径根据实际情况调整
    });
  }
})
