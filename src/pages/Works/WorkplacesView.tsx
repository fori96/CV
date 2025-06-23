import "./workplaces.css";

import { Col, Row } from "antd";
import React, { ReactElement } from "react";

import View from "../../View";
import tav from "../../assets/images/tav.png";

export interface WorkplacesViewModel {
    loading: boolean;
}

export class Workplaces extends View<WorkplacesViewModel> {
    render(): ReactElement {
        return (
            <div className="work-page">
                <div className="work">
                    <Row>
                        <Col className="work-info">
                            <Row>
                                <Col>
                                    <label className="position-name">
                                        Szoftverfejlesztő (front-end)
                                    </label>
                                </Col>
                                <Col>
                                    <label className="location">Győr</label>
                                    <label className="company">
                                        think & vision kft.
                                    </label>
                                </Col>
                            </Row>

                            <div className="details">
                                <label className="time">
                                    2020.november - 2025.február
                                </label>
                                <hr />
                                <label className="description">
                                    Webalkalmazás fejlesztése, főleg front-end
                                    oldalon. UI elemek, funkciók hozzáadásán,
                                    szerkesztésén dolgoztam a kéréseknek és
                                    designnak megfelelően. Leginkább React Js
                                    fejlesztői nyelven. A funkciók működéséhez
                                    API hívások frontend oldali hozzáadását is
                                    végeztem. Többek között chartok és
                                    táblázatok kezelése, adatokkal való
                                    feltöltése is feladatom volt. Végezetül unit
                                    tesztek készítésében és futatásában is részt
                                    vettem. Backend részen is végeztem
                                    feladatokat, kezdetben GoLang, később Kotlin
                                    nyelven.
                                </label>
                            </div>
                        </Col>
                        <Col className="picture">
                            <img src={tav} alt="portre" className="img" />
                        </Col>
                    </Row>
                </div>
                <div className="work">
                    <div className="work-info">Legyél a következő</div>
                </div>
            </div>
        );
    }
}

export default Workplaces;
