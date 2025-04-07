import "./basicInfo.css";

import { Col, Row } from "antd";
import React, { ReactElement } from "react";

import Portre from "../../assets/images/selfportre.jpg";
import View from "../../View";

//import { observer } from "mobx-react";

export interface BasicInformationViewModel {
  loading: boolean;
}

export class BasicInformation extends View<BasicInformationViewModel> {
  render(): ReactElement {
    return (
      <div>
        <Row>
          <Col>
            <img src={Portre} className="portre" alt="portre" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default BasicInformation;
