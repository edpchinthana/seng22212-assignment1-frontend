import React from 'react';
import {Carousel} from "react-bootstrap";
import wind from './aserts/images/wind.jpg';
import mist from './aserts/images/mist.jpg';
import thunder from './aserts/images/thunder.jpg';
import measure from './aserts/images/mesure.jpg';

const Home: React.FC = () => {
    document.title='weatherApp | home'
 return (
  <React.Fragment>
      <br/><br/>
      <h2 className='pt-4'>Weather App 2020</h2>

      <Carousel>
          <Carousel.Item interval={1000}>
              <img
                  className="d-block w-100"
                  src={measure}
              />
              <Carousel.Caption>
                  <h3>Daily Temperature</h3>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
              <img
                  className="d-block w-100"
                  src={thunder}
              />
              <Carousel.Caption>
                  <h3>Daily Rain records</h3>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={wind}
              />
              <Carousel.Caption>
                  <h3>Daily wind records</h3>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={mist}
              />
              <Carousel.Caption>
                  <h3>Daily humidity records</h3>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
  </React.Fragment>
 );}

export default Home;
