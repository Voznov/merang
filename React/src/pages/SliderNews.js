import React, { Component } from 'react';

import './SliderNews.css';

class SliderNews extends Component {
  render() {
    let news = [
      {
        id: 1,
        background: '../assets/',
        title: 'Приглашай друзей – получай бонусы!',
        text: 'Дарим по 100 рублей вам и каждому вашему другу при регистрации',
        buttonText: 'Пригласить'
      },
      {
        id: 2,
        background: '../assets/',
        title: 'Стань первым',
        text: 'Размести получи',
        buttonText: 'Пригласить'
      },
    ];
    return (
      <div className="slider-news">

        <div className="slider-news__wrap">
          <h2 className="slider-news__title">Приглашай друзей – получай бонусы!</h2>
          <p className="slider-news__text">Дарим по 100 рублей вам и каждому вашему другу при регистрации</p>
          <a href="#" className="slider-news__button">Пригласить</a>
        </div>

        <div className="slider-news__wrap">
          <h2 className="slider-news__title">Стань первым</h2>
          <p className="slider-news__text">Размести получи</p>
          <a href="#" className="slider-news__button">Пригласить</a>
        </div>

      </div>
    );
  }
}

export default SliderNews;