//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    files: [],
  },
  chooseImage: function() {
    const that = this;
    wx.chooseImage({
      success: function(res) {
        const files = res.tempFilePaths.map(item => {
          return {
            src: item,
            progress: 0,
            uploading: false,
          };
        });
        that.setData({
          files
        });
      },
    });
  },
  previewImage: function(e) {
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files.map(item => item.src),
    });
  },
  removeImage: function(e) {
    console.log(e);
    this.setData({
      files: this.data.files.filter(item => item.src !== e.currentTarget.id)
    });
  }
})
