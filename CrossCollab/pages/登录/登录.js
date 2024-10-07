// pages/login/login.js
Page({
  data: {
    username: '',
    password: '',
    // 可以添加一些状态信息，例如：正在加载、错误信息等
  },

  // 处理用户名变化
  handleUsernameChange(e) {
    this.setData({
      username: e.detail.value
    });
  },

  // 处理密码变化
  handlePasswordChange(e) {
    this.setData({
      password: e.detail.value
    });
  },

  // 登录按钮的点击事件
  onLoginClick() {
    const { username, password } = this.data;

    // 验证输入
    if (!username || !password) {
      wx.showToast({
        title: '请输入账号和密码',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    // 模拟登录逻辑
    console.log('模拟登录:', { username, password });

    // 假设登录总是成功的，实际应用中应与后端交互
    wx.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 2000,
      success() {
        // 登录成功后跳转至首页
        // 使用 switchTab 跳转到 tabBar 页面
        wx.switchTab({
          url: '/pages/首页/首页', // 确保这里的路径正确无误
        });
      },
      complete() {
        // 这里可以处理一些登录成功后的额外逻辑
      }
    });
  },

  // 注册按钮的点击事件
  onRegisterClick() {
    wx.navigateTo({
      url: '/pages/注册/注册', // 同样确认这里的路径准确性
    });
  },
});