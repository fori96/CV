import "./home.css";

import { Col, Row } from "antd";
import React, { ReactElement } from "react";
import WeatherView, {
    WeatherViewModel,
} from "../../components/weather/WeatherView";

import View from "../../View";
import { observer } from "mobx-react";

export interface HomeViewModel {
    loading: boolean;
    weather: WeatherViewModel;
}

@observer
export class Home extends View<HomeViewModel> {
    render(): ReactElement {
        return (
            <Row className="landing-page">
                <Col className="greeting-section">
                    <h2>Üdvözlöm!</h2>
                    <div className="sub-section">
                        <h4>Ez az önéletrajzom webapp-os változata.</h4>
                        <h4>
                            Hobbi projekt egy kis React / Typescript tudás
                            prezentálására.
                        </h4>
                    </div>
                </Col>
                <WeatherView viewModel={this.viewModel.weather} />
            </Row>
        );
    }
}

export default Home;
