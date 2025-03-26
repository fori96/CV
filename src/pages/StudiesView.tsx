import React, { ReactElement } from "react";

import View from "../View";

export interface StudiesViewModel {
  loading: boolean;
}

export class Studies extends View<StudiesViewModel> {
  render(): ReactElement {
    return <>Studies</>;
  }
}

export default Studies;
