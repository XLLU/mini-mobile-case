//app.js
App({
  
  globalData: {

  },

	onLaunch() {
    wx.request({
      url: 'https://raw.githubusercontent.com/XLLU/mini-mobile-case/master/assets/db.json',
      success: (response) => {
        Object.assign(this.globalData,response.data)

        const currentPages = getCurrentPages();
        if (currentPages.length !== 0) {
          currentPages[currentPages.length-1].onload()
        }
      }
    })
  }

})