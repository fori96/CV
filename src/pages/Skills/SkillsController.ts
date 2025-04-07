import { Controller } from "../../Controller";
import { SkillsViewModel } from "./SkillsView";

export class SkillsController implements Controller<SkillsViewModel> {
  viewModel: SkillsViewModel = {
    loading: false,
  };
}

export default SkillsController;
