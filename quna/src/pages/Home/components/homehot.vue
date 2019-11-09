<template>
    <div class="homehot">
        <div class="top">
            <div class="left">
                <i class="icon iconfont icon-remen"></i>
                <p class="remen">本周热门榜单</p>
            </div>
            <div class="right">
                <p class="all">全部榜单</p>
                <i class="icon iconfont icon-dibudaohanglan-"></i>
            </div>
        </div>
        <div class="bot">
            <div class="content">
                <ul>
                    <li><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg" alt=""></li>
                    <li><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg" alt=""></li>
                    <li><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/5ebde45f144a50e6427de9e74dad50d4.jpg_750x200_179eb37f.jpg" alt=""></li>
                    <li><img src="http://img1.qunarzz.com/piao/fusion/1609/a4/f5a876ad7f5dc202.jpg_750x200_49b2b34e.jpg" alt=""></li>
                    <li><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg" alt=""></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .homehot{
        width: 100%;
        height: 2rem;
        background-color: yellow;
    }
    .homehot .top{
        width: 100%;
        height: 0.5rem;
        
    }
    .homehot .top .left{
        width: 1.14rem;
        height: 0.4rem;
        float: left;
        padding-left: .12rem;
    }
    .homehot .top .left .icon-remen{
        float: left;
        margin-top: .1rem;
        color: #aa1122;
    }
    .homehot .top .left .remen{
        display: block;
        margin-top: .13rem;
        float: right;
        font-size: .15rem;
        color: #212121;
        width: .98rem;
        height: .15rem;
    }
    .homehot .top .right{
        width: 0.8rem;
        height: 0.4rem;
        float: right;
    }
    .homehot .top .right .all{
        display: block;
        width: .5rem;
        height: .12rem;
        font-size: .12rem;
        float: left;
        margin-top: .07rem;
        color: #616161;
    }
    .homehot .bot{
        width: 100%;
        height: 1.5rem;
        background-color: blue;
    }
    .homehot .bot .content{
        width: 3.75rem;
        height: 1.5rem;
         overflow: scroll;
    }
    .homehot .bot .content ul{
        width: 5rem;
        height: 1.5rem;
       
    }
    .homehot .bot .content ul li{
        width: 1rem;
        height: 1.5rem;
        float: left;
        background-color: green;
        margin-right: 0.06rem
    }
    .homehot .bot .content ul li img{
        width: 1rem;
        height: 1rem;
    }
</style>
