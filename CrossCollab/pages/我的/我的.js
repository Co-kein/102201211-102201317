Page({

  onGoToForum: function() {
    wx.navigateTo({
      url: '/pages/我的/论坛' // 替换为实际路径
    });
  },

  onGoToCollect: function() {
    wx.navigateTo({
      url: '/pages/我的/我的收藏' // 替换为实际路径
    });
  },

  onGoToBrowserHistory: function() {
    wx.navigateTo({
      url: '/pages/我的/最近浏览' // 替换为实际路径
    });
  },

  onGoToPersonalInfo: function() {
    wx.navigateTo({
      url: '/pages/我的/个人信息' // 替换为实际路径
    });
  },

  onGoToDynamics: function() {
    wx.navigateTo({
      url: '/pages/我的/我的动态' // 替换为实际路径
    });
  },

  onGoToProjects: function() {
    wx.navigateTo({
      url: '/pages/我的/我的团队' // 替换为实际路径
    });
  },

  onGoToSettings: function() {
    wx.navigateTo({
      url: '/pages/我的/隐私设置' // 替换为实际路径
    });
  },

  onGoToAgreement: function() {
    wx.navigateTo({
      url: '/pages/我的/用户协议' // 替换为实际路径
    });
  },


});
