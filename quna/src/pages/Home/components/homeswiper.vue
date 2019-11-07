<template>
    <div class="swi">
           <swiper :options="swiperOption" class="swopt" >
                <swiper-slide>
                    <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/95cf4225271b1e47c920473cdcec7d98.jpg_750x200_52be508b.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/e7eac5a5e99e6517c61b953c0fece63b.jpg_750x200_4b701cf8.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/083c708a3949958bcbca0fcc0ea3d57f.jpg_750x200_e47acfc7.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/fcc952d6b479db0e7e61922f3ee70f04.jpg_750x200_c5b67f70.jpg" alt="">
                </swiper-slide>
     
      
      <div class="swiper-pagination" slot="pagination"></div>
    
    </swiper>

    </div>
</template>
<script>
export default {
    name:"homeswiper",
    data(){
        return{
             swiperOption: {
                pagination:".swiper-pagination"
                }
            
            }
        }
    }

</script>
<style>
    .swiper{
        width: 100%;
        height: 1rem;
    }
   img{
       width: 100%;
   }
   .swi .swopt .swiper-pagination{
      bottom:0;
   }
</style>