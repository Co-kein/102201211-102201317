Page({
  data: {
    projectTypes: ['科研竞赛', '社会实践', '创新创业'], // 项目类型选项
    selectedType: '请选择项目类型',
    skills: [], // 所需技能
    talents: [] // 所需人才
  },

  onTypeChange: function(e) {
    this.setData({
      selectedType: this.data.projectTypes[e.detail.value]
    });
  },

  onAddSkill: function(e) {
    const newSkill = e.detail.value;
    if (newSkill && !this.data.skills.includes(newSkill)) {
      this.setData({
        skills: [...this.data.skills, newSkill]
      });
    }
  },

  removeSkill: function(e) {
    const skillToRemove = e.currentTarget.dataset.skill;
    this.setData({
      skills: this.data.skills.filter(skill => skill !== skillToRemove)
    });
  },

  onAddTalent: function(e) {
    const newTalent = e.detail.value;
    if (newTalent && !this.data.talents.includes(newTalent)) {
      this.setData({
        talents: [...this.data.talents, newTalent]
      });
    }
  },

  removeTalent: function(e) {
    const talentToRemove = e.currentTarget.dataset.talent;
    this.setData({
      talents: this.data.talents.filter(talent => talent !== talentToRemove)
    });
  },

  onCancel: function() {
    wx.navigateBack(); // 返回到上一个页面
  },

  onCreate: function() {
    // 创建项目的逻辑
    wx.navigateBack(); // 返回到上一个页面
  }
});
