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
        <div className="school-card">
          <h3>Általános iskola</h3>
          <Row className="school">
            <img src={jozsef} className="school-picture" alt="portre" />
            <div className="school-info">
              <label className="school-name">
                József Attila Általásno Iskola
              </label>
              <label className="city">Oroszlány</label>
              <div className="details">
                <label className="detail">- 8 év</label>
                <label className="detail">- Emelt matek</label>
                <label className="detail">- Végzős eredmény: 4.3</label>
              </div>
            </div>
          </Row>
        </div>
        <div className="school-card">
          <h3>Középiskola</h3>
          <Row className="school">
            <img src={szechenyi} className="school-picture" alt="portre" />
            <div className="school-info">
              <label className="school-name">
                SZC Széchenyi István Gazdasági és Informatikai Technikum
              </label>
              <label className="city">Komárom</label>
              <div className="details">
                <label className="detail">- 5 év</label>
                <label className="detail">- 2 év német előkészítő</label>
                <label className="detail">- Emelt matek</label>
                <label className="detail">
                  - Végzős eredmény: Érettségi (Emelt matek és informatika)
                </label>
              </div>
            </div>
          </Row>
        </div>
        <div className="school-card">
          <h3>Egyetem</h3>
          <Row className="school">
            <img src={pemik} className="school-picture" alt="portre" />
            <div className="school-info">
              <label className="school-name">
                Pannon Egyetem - Műszaki Informatikai Kar
              </label>
              <label className="city">Veszprém</label>
              <div className="details">
                <label className="detail">
                  - Programtervező-informatiks szak{" "}
                </label>
                <label className="detail">- 9 szemeszter</label>
                <label className="detail">- Végzős eredmény: Diploma (3)</label>
              </div>
            </div>
          </Row>
        </div>
      </Col>
    );
  }
}

export default Studies;
