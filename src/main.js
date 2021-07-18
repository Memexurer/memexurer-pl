import ScripTracker from 'ScripTracker';
import { createApp } from 'vue'
import App from './App.vue'

var app = createApp(App);
app.config.globalProperties.scripTracker = new ScripTracker();
app.mount('#app');