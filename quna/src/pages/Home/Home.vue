<template>
    <div>
        <homeheader :city="city">  
        </homeheader>  
    </div>
</template>

<script>
import homeheader from "./components/homeheader"
export default {
    name:"Home",
    data(){
        return{
            city:"秦皇岛"
        }
    },
    components:{
        homeheader
    }
}
</script>