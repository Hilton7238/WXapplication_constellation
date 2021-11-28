// pages/weekdetail/weekdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:false,
    datas:[],
    title:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    wx.setNavigationBarTitle({
      title: '星座年报',
    })
    this.title = "星座年报"
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  getData() {
    wx.request({
    url: 'http://119.91.235.68:8080/getyeardata',
    method:"GET",
    success:(response)=> {
      this.setData({
        datas:response.data
      })
      this.setData({
        loading: true
      })
    },
    fail:(error)=> {
      console.log("error:" + error);
    }
  })
},
navClick(event) {
  if(event.currentTarget.dataset.name == "星座日报" && "星座日报" != this.title) {
    wx.redirectTo({
      url: '../todaydetail/todaydetail',
    })
  }else if(event.currentTarget.dataset.name == "星座周报" && "星座周报" != this.title) {
    wx.redirectTo({
      url: '../weekdetail/weekdetail',
    })
  }else if(event.currentTarget.dataset.name == "星座月报" && "星座月报" != this.title) {
    wx.redirectTo({
      url: '../monthdetail/monthdetail',
    })
  }else if("星座年报" != this.title && event.currentTarget.dataset.name == "星座年报"){
    wx.redirectTo({
      url: '../yeardetail/yeardetail',
    })
  }
},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})