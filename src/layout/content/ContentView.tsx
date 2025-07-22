import "./Content.css";

import Navigation, { NavigationViewModel } from "../navigation/NavigationView";
import React, { ReactElement } from "react";

import { Outlet } from "react-router";
import View from "../../View";
import { observer } from "mobx-react";

//import { observer } from "mobx-react";

export interface ContentViewModel {
    loading: boolean;
    navBar: NavigationViewModel;
}

@observer
export class Content extends View<ContentViewModel> {
    render(): ReactElement {
        return (
            <>
                <div className={`container`}>
                    <Navigation viewModel={this.viewModel.navBar} />
                    <div className="content">
                        <Outlet context={"content"} />
                    </div>
                </div>
            </>
        );
    }
}

export default Content;
