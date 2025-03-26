import React, { ReactElement } from "react";

import View from "../View";

//import { observer } from "mobx-react";

export interface BasicInformationViewModel {
  loading: boolean;
}

export class BasicInformation extends View<BasicInformationViewModel> {
  render(): ReactElement {
    return <>BasicInformation</>;
  }
}

export default BasicInformation;
