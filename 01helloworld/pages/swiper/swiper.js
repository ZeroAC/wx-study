Page({
    data:{
        weekelyMovie:[
        {
            name:"教父",
            comment:"最精彩的剧本 最真实的电影",
            imagePath:"https://img3.doubanio.com/view/photo/l/public/p1910907590.webp",
            isHeight:true,
            id: 1291841
        },
        {
            name:"白蛇传",
            comment:"最精彩的剧本 最真实的电影",
            imagePath:"https://img9.doubanio.com/view/photo/l/public/p2645106865.webp",
            isHeight:true,
            id : 34825976
        },
        {
            name:"无罪谋杀",
            comment:"最精彩的剧本 最真实的电影",
            imagePath:"https://img9.doubanio.com/view/photo/l/public/p2646050974.webp",
            isHeight:true,
            id : 30391289
        }
        ],
        currentSelect:0
    },
    onLoad: function(options){//初始化页面调用
        this.setData({//返回本周
            currentSelect : this.data.weekelyMovie.length-1
        });
    },
    toBackNow:function(event){//点击后返回本周
        this.setData({
            currentSelect : this.data.weekelyMovie.length-1
        });
    },
    toDetail:function(event){//点击电影推荐页进入详情页面
        let mId = event.currentTarget.dataset.movieId//获取点击到的电影关键值
        wx.navigateTo({
            url: '../detail/detail?id='+mId,
            success: (result)=>{
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    onShareAppMessage: function(){//页面转发行为
        let p = this.data.weekelyMovie[2].imagePath;
        return {
            title:"每周推荐",
            imageUrl:p
        }
    }
})
