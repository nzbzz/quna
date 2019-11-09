<template>
    <div>
        <homeheader :city="city"></homeheader>  
        <homeswiper></homeswiper>
        <homeicon></homeicon>
        <homehot></homehot>
    </div>
</template>

<script>
import homeheader from "./components/homeheader"
import homeswiper from "./components/homeswiper"
import homeicon from "./components/homeicon"
import homehot from "./components/homehot"
export default {
    name:"Home",
    data(){
        return{
            city:"秦皇岛"
        }
    },
    components:{
        homeheader,
        homeswiper,
        homeicon,
        homehot
    }
}
</script>