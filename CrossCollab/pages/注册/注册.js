Page({
  data: {
    phone: '',
    verificationCode: ''
  },
  
  onPhoneInput(e) {
    this.setData({ phone: e.detail.value });
  },
  
  onCodeInput(e) {
    this.setData({ verificationCode: e.detail.value });
  },
  
  sendVerificationCode() {
    console.log("发送验证码到:", this.data.phone);
    // 这里添加你的发送验证码请求代码
  },
  
  verifyCode() {
    console.log("验证验证码:", this.data.verificationCode);
    // 这里添加你的验证码验证请求代码
  },
  handleNextStep: function() {
    wx.navigateTo({   // 使用 navigateTo 进行页面跳转
      url: '/pages/基本信息/基本信息', // '基本'信息页面的URL
    });
  }
  
});
