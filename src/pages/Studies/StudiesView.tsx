import "./studies.css";

import { Col, Row } from "antd";
import React, { ReactElement } from "react";

import View from "../../View";
import jozsef from "../../assets/images/jozsef.jpg";
import pemik from "../../assets/images/pemik.jpg";
import szechenyi from "../../assets/images/szechenyi.jpg";

export interface StudiesViewModel {
  loading: boolean;
}

export class Studies extends View<StudiesViewModel> {
  render(): ReactElement {
    return (
      <Col className="school-page">
        <div>
          <h3>Általános iskola</h3>
          <Row className="school">
            <img src={jozsef} className="school-picture" alt="portre" />
            <div className="school-info">
              <label className="school-name">
                József Attila Általásno Iskola
              </label>
              <label className="city">Oroszlány</label>
            </div>
          </Row>
        </div>
        <div>
          <h3>Középiskola</h3>
          <Row className="school">
            <img src={szechenyi} className="school-picture" alt="portre" />
            <div className="school-info">
              <label className="school-name">
                SZC Széchenyi István Gazdasági és Informatikai Technikum
              </label>
              <label className="city">Komárom</label>
            </div>
          </Row>
        </div>
        <div>
          <h3>Egyetem</h3>
          <Row className="school">
            <img src={pemik} className="school-picture" alt="portre" />
            <div className="school-info">
              <label className="school-name">
                Pannon Egyetem - Műszaki Informatikai Kar
              </label>
              <label className="city">Veszprém</label>
            </div>
          </Row>
        </div>
      </Col>
    );
  }
}

export default Studies;
