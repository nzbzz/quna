<template>
    <div>
        <div class="header">
            <div class="left" @click="goback()">
                <i class="icon iconfont icon-fanhui" ></i>
            </div>
            <div class="center">
                <div class="put">
                    <i class="icon iconfont icon-fangdajing fdj"></i>
                    <p class="p1">输入城市/景点/游玩主题</p>
                </div>
            </div>
            <div class="right">
                {{city}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
   name:"homeheader",
   props: ["city"],
   data(){
       return{
           
       }
   },
   methods:{
       goback:function(){
           this.$router.go(-1)
       }
   }
}
</script>
<style>
    .header{
        width: 100%;
        height: .44rem;
        background-color: #00bcd4;
    }
    .left,.center,.right{
        height: .44rem;
        float: left;
    }
    .left{
        width: .385rem;
        text-align: center;
        padding-top: 0.05rem;
    }
    .center{
        height: .37rem;
        width: 2.55rem;
        padding-top: 0.07rem;
    }
    .center .put{
        width: 2.55rem;
        height: .24rem;
        background-color: #fff;
        border-radius: .02rem;
        padding-top: 0.06rem;
    }
    .center .put i{
        
        float: left;
    }
    .center .put .p1{
        font-size: .12rem;
        display: block;
        width: 1.5rem;
        float: left;
        
    }
    .right{
        width: .7rem;
        font-size: .21rem;
        padding-top: .1rem;
        margin-left: .1rem;
    }
</style>