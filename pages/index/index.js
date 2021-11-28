// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    name:"",
    loading:false,
    inputValue:"",
    datas:[],
    constellation:["双子座","摩羯座","白羊座","天蝎座","水瓶座","双鱼座","巨蟹座","天秤座","处女座","狮子座","金牛座","射手座"],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  onLoad() {
    this.getData()
    wx.setNavigationBarTitle({
      title: '星言星语',
    })
  },
  getData() {
      wx.request({
      url: 'http://119.91.235.68:8080/gettodaydata',
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
  input(e) {
    this.setData({
      inputValue:e.detail.value
    })
  },
  searchClick(e) {
    if(this.data.inputValue == "") {
      wx.showToast({
        title: '不能输入空数据！',
        icon:"none",
        duration:1000
      })
      return ;
    }
    for(let item of this.data.constellation) {
      if(item == this.data.inputValue){
        //页面跳转携带参数item
        wx.redirectTo({
          url: '../alldata/alldata?name=' + this.data.inputValue,
        })
        return ;
      }
    }
    this.setData({
      inputValue:""
    })
    wx.showToast({
      title: '只能输入星座(例如：天蝎座)',
      icon:"none",
      duration:1000
    })
  },
  navClick(event) {
    if(event.currentTarget.dataset.name == "星座日报") {
      wx.navigateTo({
        url: '../todaydetail/todaydetail',
      })
    }else if(event.currentTarget.dataset.name == "星座周报") {
      wx.navigateTo({
        url: '../weekdetail/weekdetail',
      })
    }else if(event.currentTarget.dataset.name == "星座月报") {
      wx.navigateTo({
        url: '../monthdetail/monthdetail',
      })
    }else {
      wx.navigateTo({
        url: '../yeardetail/yeardetail',
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
