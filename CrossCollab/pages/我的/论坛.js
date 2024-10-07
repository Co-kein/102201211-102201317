Page({
  data: {
    posts: [
      {
        id: 1,
        avatar: '/image/touxiang1.png',
        name: '代码小怪兽',
        time: '12月13日 23:36 发布',
        content: [
          '我是代码小怪兽，正在寻找志同道合的小伙伴一起开发一款超酷的APP。如果你会写代码、能喝咖啡，那就快来找我吧！一起把创意变成现实！',
          
        ]
      },
      {
        id: 2,
        avatar: '/image/touxiang2.png',
        name: '调式忍者',
        time: '12月13日 23:36 发布',
        content: [
          '我是调试忍者！正在寻找勇士一起挑战一个神秘项目。如果你热爱编程，能在bug中游刃有余，那就快来和我一起冒险吧！'
        ]
      },
      {
        id: 3,
        avatar: '/image/touxiang3.png',
        name: '二次元码农',
        time: '12月13日 23:00 发布',
        content: [
          '来自二次元世界的我，正在寻找可以一起打怪的队友！项目方向是开发一款萌萌的游戏app，希望大家都能像初音未来一样闪耀！如果你对游戏开发、图像处理或音效设计感兴趣，快来联系我吧！'
         
          
          
        ]
      }
      
    ]
  },

  onLoad: function() {
    // 页面加载时可以请求数据，例如从服务器获取帖子列表
    // 这里我们使用了静态的data数据
  },

  handlePostClick: function(event) {
    const postId = event.currentTarget.dataset.id;
    wx.showToast({
      title: `点击了帖子ID: ${postId}`,
      icon: 'none'
    });
  },

  handleSearch: function(event) {
    wx.showToast({
      title: '搜索功能暂未实现',
      icon: 'none'
    });
  },

  handleNewPost: function() {
    wx.showToast({
      title: '发帖功能暂未实现',
      icon: 'none'
    });
  }
})
