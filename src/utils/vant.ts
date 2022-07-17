import { Button, Icon, NavBar, Popup } from "vant";
import { App } from "vue";

export function useVant(app: App) {
  app.use(Button);
  app.use(NavBar);
  app.use(Icon);
  app.use(Popup);
}
