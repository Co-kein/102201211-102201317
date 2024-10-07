Page({
  data: {
    school: '',
    id: '',
    name: '',
    identity: ''
  },

  handleSchoolChange(e) {
    this.setData({ school: e.detail.value });
  },

  handleIdChange(e) {
    this.setData({ id: e.detail.value });
  },

  handleNameChange(e) {
    this.setData({ name: e.detail.value });
  },

  handleIdentityChange(e) {
    const identities = ['学生', '教师', '其他'];
    this.setData({ identity: identities[e.detail.value] });
  },

  goToLogin() {
    // 直接跳转到登录界面
    wx.redirectTo({
      url: '/pages/登录/登录',
    });
  }
});