//app.js
App({
  
  globalData: {

  },

	onLaunch() {
    wx.request({
      url: 'https://raw.githubusercontent.com/XLLU/mini-mobile-case/master/assets/db.json',
      success: (response) => {
        Object.assign(this.globalData,response.data)
      }
    })
  }

})