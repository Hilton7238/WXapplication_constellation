// pages/weekdetail/weekdetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      loading:false,
      img:{},
      today:{},
      month:{},
      week:{},
      year:{},
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '查询',
      })
      this.getData(options.name)
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
  
    },
    getData(name) {
      wx.request({
      url: 'http://119.91.235.68:8080/getfulldata?name=' + name,
      method:"GET",
      success:(response)=> {
        this.setData({
          img:response.data[0],
          week:response.data[2],
          year:response.data[4],
          month:response.data[3],
          today:response.data[1]
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