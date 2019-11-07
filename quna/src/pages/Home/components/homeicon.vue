<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" @>
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <div class="swicon" v-for="item1 in item" :key="item1.id">
          <img :src="item1.src" alt />
          <p>{{item1.title}}</p>
        </div>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "Homeicon",
  data() {
    return {
      swiperOption: {
        //   pagination:".swiper-pagination"
      },
      //[[],[]]
      //[]
      iconList: [
        {
          id: 1,
          src:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: 2,
          src:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: 3,
          src:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: 4,
          src:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: 5,
          src:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: 6,
          src:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: 7,
          src:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: 8,
          src:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: 9,
          src:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: 10,
          src:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        }
      ]
    };
  },
  computed: {
    swiperList: function() {
      
      var x = [];
      for (var n = 0; n < this.iconList.length; n++) {
        var index = parseInt(n / 8);
        if (!x[index]) {
          x[index] = [];
        }
        x[index].push(this.iconList[n]);
      }
      console.log(x)
      return x
    }
  }
};
</script>
<style>
.swicon {
  float: left;
  width: 25%;
  height: 0.72rem;
  text-align: center;
  padding-top: 0.1rem;
}
.swicon img {
  width: 0.46rem;
  height: 0.45rem;
}
p {
  font-size: 0.14rem;
}
</style>