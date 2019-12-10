import React, { Component } from 'react';

import './SliderCategory.css';

class SliderCategory extends Component {
  render() {
    let category = [
      {
        id: 1,
        background: '../assets/',
        title: 'Оборудование для съемки',
      },
      {
        id: 2,
        background: '../assets/',
        title: 'Аудиосистемы и звук',
      },
      {
        id: 3,
        background: '../assets/',
        title: 'Строительное оборудование',
      },
    ]
    return (
      <div className="slider-category">
        <h2 className="slider-category__title">Категории</h2>

        <div className="slider-category__wrap">
          <a href="#" className="slider-subcategory__link">
            <h3 className="slider-subcategory__title">Оборудование для съемки</h3>
          </a>
          <a href="#" className="slider-subcategory__link">
            <h3 className="slider-subcategory__title">Аудиосистемы и звук</h3>
          </a>
          <a href="#" className="slider-subcategory__link">
            <h3 className="slider-subcategory__title">Строительное оборудование</h3>
          </a>
          <a href="#" className="slider-subcategory__link">
            <h3 className="slider-subcategory__title">Строительное оборудование</h3>
          </a>
        </div>
      </div>
    );
  }
}

export default SliderCategory;