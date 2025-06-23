import "./home.css";

import React, { ReactElement } from "react";

import { Col } from "antd";
import View from "../../View";

export interface HomeViewModel {
    loading: boolean;
}

export class Home extends View<HomeViewModel> {
    render(): ReactElement {
        return (
            <Col className="landing-page">
                <h2>Üdvözlöm!</h2>
                <div className="sub-section">
                    <h4>Ez az önéletrajzom webapp-os változata.</h4>
                    <h4>
                        Hobbi projekt egy kis React / Typescript tudás
                        prezentálására.
                    </h4>
                </div>
            </Col>
        );
    }
}

export default Home;
