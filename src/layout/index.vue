<template>
<div id="app-wrapper">
    <div class="app-header">顶部</div>
    <div class="app-container">
        <div class="container-left"><nav-menu /></div>
        <div class="container-right"><router-view/></div>
    </div>
    <div class="app-footer">底部</div>
</div>
</template>
<script lang="ts">
import { defineComponent} from "vue";
import navMenu from './components/menu/index.vue'
export default defineComponent({
    components:{navMenu}
})
</script>
<style lang="scss" scoped>
#app-wrapper{
    .app-header{}
    .app-container{
        display: flex;
    }
    .app-footer{}
}
</style>