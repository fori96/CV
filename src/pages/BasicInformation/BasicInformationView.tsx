import "./basicInfo.css";

import {
    ClockCircleOutlined,
    EnvironmentOutlined,
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    MobileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { ReactElement } from "react";

import Portre from "../../assets/images/selfportre.jpg";
import View from "../../View";

export interface BasicInformationViewModel {
    loading: boolean;
}

export class BasicInformation extends View<BasicInformationViewModel> {
    render(): ReactElement {
        return (
            <Row className="info-page">
                <Col className="portre-col">
                    <img src={Portre} className="portre" alt="portre" />
                </Col>
                <Col className="infos">
                    <Row className="info">
                        <label className="name">Forisek Bálint</label>
                    </Row>
                    <Row className="info">
                        <ClockCircleOutlined className="icon" />
                        <label className="key">Született:</label>
                        <label className="value">1996.november.5</label>
                    </Row>
                    <Row className="info">
                        <EnvironmentOutlined className="icon" />
                        <label className="key">Lakcím:</label>
                        <label className="value">
                            2898, Kocs Petőfi Sándor utca 54.
                        </label>
                    </Row>
                    <Row className="info">
                        <MobileOutlined className="icon" />
                        <label className="key">Telefon:</label>
                        <label className="value">06/20-215-8359</label>
                    </Row>
                    <Row className="info">
                        <MailOutlined className="icon" />
                        <label className="key">Email:</label>
                        <label className="value">forisekbalint@gmail.com</label>
                    </Row>
                    <Row className="info">
                        <GithubOutlined className="icon" />
                        <label className="key">GitHub:</label>
                        <label className="value">
                            <a href="https://github.com/fori96">
                                https://github.com/fori96
                            </a>
                        </label>
                    </Row>
                    <Row className="info">
                        <LinkedinOutlined className="icon" />
                        <label className="key">Linkedin:</label>
                        <label className="value">
                            <a href="https://www.linkedin.com/in/balintforisek-382529142/">
                                https://www.linkedin.com/in/balintforisek-382529142/
                            </a>
                        </label>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default BasicInformation;
