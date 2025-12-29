import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { ref } from 'vue';
import { VueSignaturePad } from 'vue-signature-pad';


const app = createApp(App)
app.use(router)
app.config.globalProperties.$imgurl =ref('') 
app.config.globalProperties.$datass =ref([]) 
app.component("VueSignaturePad", VueSignaturePad);
app.mount('#app')

