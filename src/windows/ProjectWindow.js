import React from 'react';
import {
  Carousel, Row, Col
} from 'react-bootstrap';

class ProjectWindow extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(props);
  }

  renderCarouselSlides()
  {
    var renderedData = [];
    var iterator = 0;
    for(var slide of this.props.data.slides)
    {
      renderedData.push(
        <Carousel.Item key={ iterator ++ }>
          <img
            className="d-block w-100"
            src={ slide.image }
          />
          <Carousel.Caption>
            <h3>{ slide.title }</h3>
            <p>{ slide.description }</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }
    return renderedData;
  }

  render()
  {
    return (
      <div>
        <Carousel>
          { this.renderCarouselSlides() }
        </Carousel>
        <Row>
          <Col>
              { this.props.data.description }
          </Col>
        </Row>
        <Row>
          
        </Row>
      </div>
    );
  }
}

export default ProjectWindow;
