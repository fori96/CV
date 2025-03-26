import { ContentViewModel } from "./ContentView";
import { Controller } from "../../Controller";
import SideMenuController from "../sideMenu/SideMenuController";

export class ContentController implements Controller<ContentViewModel> {
  private sideMenu = new SideMenuController();

  viewModel: ContentViewModel = {
    loading: false,
    sideMenu: this.sideMenu.viewModel,
  };
}

export default ContentController;
