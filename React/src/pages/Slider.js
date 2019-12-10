import React, { Component } from 'react';

import './Slider.css';

import SliderNews from './SliderNews';
import SliderCategory from './SliderCategory';
class Slider extends Component {
  render() {
    return (
      <div>
        <SliderNews />

        <SliderCategory />
      </div>
    );
  }
}

export default Slider;