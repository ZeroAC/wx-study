//Page Object
Page({
    data: {
        mId:0 //进入该页面时需要显示的电影id
    },
    
    //options(Object)
    onLoad: function(options){
        console.log(options.id);//获得进入时url?后的数据
        this.setData({
            mId: options.id
        });
        let that = this;//获得本页面
        let request = wx.request({
            url: 'https://movie.douban.com/celebrity/'+that.data.mId,
            data: {},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                console.log(result);
                that.setData({
                    movieDetail:result.data
                });
                wx.setNavigationBarTitle({//设置标题
                    title: result.data,
                    success: (result)=>{
                        
                    },
                    fail: ()=>{},
                    complete: ()=>{}
                });
                wx.hideLoading();//加载完毕 隐藏
            },
            fail: ()=>{},
            complete: ()=>{}
        });
        wx.showLoading({//显示加载中
            title: "加载中...",
            mask: true,
            success: (result)=>{
                
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    onReady: function(){
        
    },
    onShow: function(){
        
    },
    onHide: function(){

    },
    onUnload: function(){

    },
    onPullDownRefresh: function(){

    },
    onReachBottom: function(){

    },
    onShareAppMessage: function(){

    },
    onPageScroll: function(){

    },
    //item(index,pagePath,text)
    onTabItemTap:function(item){

    },
    
});
//Page Object
