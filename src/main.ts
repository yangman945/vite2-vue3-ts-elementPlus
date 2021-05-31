import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/global.scss';
import 'element-plus/packages/theme-chalk/src/base.scss';
import { ElButton,ElMenu,ElMenuItem,ElMenuItemGroup } from 'element-plus';

createApp(App)
.use(router)
.use(ElButton)
.use(ElMenu)
.use(ElMenuItem)
.use(ElMenuItemGroup)
.mount('#app')
