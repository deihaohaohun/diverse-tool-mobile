import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { useVant } from "./utils/vant";
import "normalize.css";
// 不引入 vant 的 imagePreview 组件样式会有问题
import "vant/lib/index.css";

const app = createApp(App);
// 注册 vant
useVant(app);
app.use(router).mount("#app");
