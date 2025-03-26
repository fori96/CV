import React, { ReactElement } from "react";

import View from "../View";

export interface HomeViewModel {
  loading: boolean;
}

export class Home extends View<HomeViewModel> {
  render(): ReactElement {
    return <div>Home</div>;
  }
}

export default Home;
