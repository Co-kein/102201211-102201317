Page({
  data: {
    // 可在此处定义需要存储的状态，例如各个 switch 的开关状态
  },

  onLoad: function() {
    // 可以在页面加载时执行逻辑
  },

  // 示例方法：处理 switch 的变更
  switchChange: function(e) {
    console.log('switch 发生 change 事件，携带值为', e.detail.value);
  }
})
