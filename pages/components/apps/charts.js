import React from 'react';
import PageHeader from '../../../shared/layout-components/pageheader/PageHeader';
import { Card, Col, Row } from 'react-bootstrap';
import { Chartdetails } from '../../../shared/data/App/DataChart';
import Seo from '@/shared/layout-components/seo/seo';


const Charts = () => {
  return (
  <div >
      <Seo title="Chart"/>
    <PageHeader titles="Chart" active="Chart" items={['Apps']} />

    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>ChartJS</Card.Title>
          </Card.Header>
          <Card.Body>
            <div>
              <div className="example example-bg">
                <div className="example-column example-column-2">
                  <Card>
                    <Card.Header>
                      <Card.Title as='h3'>Chart name</Card.Title>
                    </Card.Header>
                    <Card.Body>

                      <Chartdetails />

                    </Card.Body>
                  </Card>
                </div>
              </div>
              
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </div>
)
};
Charts.layout = "Contentlayout"
export default Charts;
