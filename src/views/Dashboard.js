/*!

=========================================================
* Athena Desk Insights
=========================================================

* Product Page: https://github.com/henry8812/AthenaDesk-Insights
* Copyright 2023 henry8812 (https://github.com/henry8812)
* Licensed under MIT (https://github.com/henry8812/AthenaDesk-Insights/blob/main/LICENSE.md)

* Coded by henry8812

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar, Doughnut, Radar} from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
  chartExample9,
  chartExample10,
  chartExample11,
  chartExample12,
  chartExample13,
  chartExample14,
  
  
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
      <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">CASOS GTI</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 3,639
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Doughnut
                    data={chartExample5.data}
                    options={chartExample5.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">CASOS COMSISTELCO</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 2,138
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Doughnut
                    data={chartExample6.data}
                    options={chartExample6.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">EFECTIVIDAD BRUTA COMSISTELCO</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 2,138
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Doughnut
                    data={chartExample7.data}
                    options={chartExample7.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          
          {/*
          
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
           */}
        </Row>
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>

                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">FRONT</h5>
                    <CardTitle tag="h2">PERFORMANCE</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          INBOUD
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          ATENCION CASOS
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      {/**
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Sessions
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>*/}
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">ANS INCIDENTES</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" />Ultimo Mes 98.4%
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">EFICIENCIA BACKLOG INCIDENTES</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  Ultimo Mes 99.9%
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">EFICIENCIA CALIDAD INCIDENTES</h5>
                <CardTitle tag="h3">
                  Ultimo Mes 99.9%
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">ANS REQUERIMIENTOS</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" />Ultimo Mes 90.9%
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample8.data}
                    options={chartExample8.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">EFICIENCIA BACKLOG REQUERIMIENTOS</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  Ultimo Mes 275.5%
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample9.data}
                    options={chartExample9.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">EFICIENCIA CALIDAD REQUERIMIENTOS MESES ANTERIORES</h5>
                <CardTitle tag="h3">
                  Ultimo Mes 99.7%
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample10.data}
                    options={chartExample10.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        

        <Row>
        <Col lg="6">
          
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">EFECTIVIDAD POR TIPO DE CASO</h5>
                <CardTitle tag="h3">
                  
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
              <Col lg="6">
          
                <div className="chart-area">
                
                  <Bar
                    data={chartExample11.data}
                    options={chartExample11.options}
                  />
                </div>
                </Col>
                <Col lg="6">
          
                <div className="chart-area">
                  <Bar
                    data={chartExample12.data}
                    options={chartExample12.options}
                  />
                </div>
                </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">OPORTUNIDAD POR TIPO DE CASO</h5>
                <CardTitle tag="h3">
                  {/**Ultimo Mes 99.7%*/}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
              <Col lg="6">
          
                <div className="chart-area">
                  <Bar
                    data={chartExample13.data}
                    options={chartExample13.options}
                  />
                </div>
                </Col>
                <Col lg="6">
          
                <div className="chart-area">
                  <Bar
                    data={chartExample14.data}
                    options={chartExample14.options}
                  />
                </div>
                </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          

        </Row>
        
      </div>
    </>
  );
}

export default Dashboard;
