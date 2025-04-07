import { BasicInformationViewModel } from "./BasicInformationView";
import { Controller } from "../../Controller";

export class BasicInformationController
  implements Controller<BasicInformationViewModel>
{
  viewModel: BasicInformationViewModel = {
    loading: false,
  };
}

export default BasicInformationController;
