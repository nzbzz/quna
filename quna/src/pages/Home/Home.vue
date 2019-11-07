<template>
    <div>
        <homeheader :city="city"></homeheader>  
        <homeswiper></homeswiper>
    </div>
</template>

<script>
import homeheader from "./components/homeheader"
import homeswiper from "./components/homeswiper"
export default {
    name:"Home",
    data(){
        return{
            city:"秦皇岛"
        }
    },
    components:{
        homeheader,
        homeswiper
    }
}
</script>