import { Controller } from "../../Controller";
import { HomeViewModel } from "./HomeView";

export class HomeController implements Controller<HomeViewModel> {
  viewModel: HomeViewModel = {
    loading: false,
  };
}

export default HomeController;
