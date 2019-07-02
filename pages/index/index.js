//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slides: null, 
    entities: null
  },

  onLoad() {
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles
    })
  }
})

