import "./weather.css";

import { Col, Row, Spin } from "antd";
import React, { ReactElement } from "react";

import { EnvironmentOutlined } from "@ant-design/icons";
import { Input } from "antd";
import View from "../../View";
import { observer } from "mobx-react";

const { Search } = Input;

export interface WeatherViewModel {
    loading: boolean;
    location: string;
    weatherData: any;
    weatherIcon: any;
    onSearch(location: string): void;
}

@observer
export class WeatherView extends View<WeatherViewModel> {
    render(): ReactElement {
        return (
            <Col className="weather-wrapper">
                <Spin spinning={this.viewModel.loading}>
                    <Search
                        placeholder="location"
                        className="search"
                        prefix={<EnvironmentOutlined />}
                        onSearch={this.viewModel.onSearch}
                        enterButton
                    />
                    <Row>
                        <h2>
                            {
                                this.viewModel.weatherData?.name /* ??
                                this.viewModel.location */
                            }
                        </h2>
                        <h4>
                            {
                                this.viewModel.weatherData?.sys
                                    .country /* ?? "HU" */
                            }
                        </h4>
                    </Row>
                    <Row className="main">
                        <Col>
                            <label className="temperature">
                                {
                                    this.viewModel.weatherData?.main
                                        .temp /* ?? 16 */
                                }{" "}
                                °C
                            </label>
                            <label>
                                {"Feels like: "}
                                {
                                    this.viewModel.weatherData?.main
                                        .feels_like /* ?? 16 */
                                }{" "}
                            </label>
                        </Col>
                        <img
                            src={`https://openweathermap.org/img/wn/${
                                this.viewModel.weatherData?.weather[0]
                                    .icon /* ??
                                "04d" */
                            }@2x.png`}
                            alt="weather"
                        />
                    </Row>
                    <div className="details">
                        <Row className="info">
                            <label className="key">Szél:</label>
                            <label className="value">{`${this.viewModel.weatherData?.wind.speed} km/h`}</label>
                        </Row>
                        <Row className="info">
                            <label className="key">Pára:</label>
                            <label className="value">{`${this.viewModel.weatherData?.main.humidity} %`}</label>
                        </Row>
                        <Row className="info">
                            <label className="key">Nyomás:</label>
                            <label className="value">{`${this.viewModel.weatherData?.main.pressure} hPa`}</label>
                        </Row>
                    </div>
                </Spin>
            </Col>
        );
    }
}

export default WeatherView;
