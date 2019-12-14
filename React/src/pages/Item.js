import React, { Component } from 'react';
import { Carousel, Icon, Button } from 'antd';

import "./Item.css";

class Item extends Component {
  render() {
    return (
      <div>
        <Carousel effect="fade">
          <div>
            <img
              className="item__img"
              alt="example"
              src="https://i2.rozetka.ua/goods/1851278/xiaomi_mi_scooter_m365_black_images_1851278780.jpg" />
          </div>
          <div>
            <img
              className="item__img"
              alt="example"
              src="https://i2.rozetka.ua/goods/1851278/xiaomi_mi_scooter_m365_black_images_1851278654.jpg" />
          </div>
          <div>
            <img
              className="item__img"
              alt="example"
              src="https://i2.rozetka.ua/goods/4736023/streetgo_sgfrcrbl02_images_4736023008.jpg" />
          </div>
          <div>
            <img
              className="item__img"
              alt="example"
              src="https://i2.rozetka.ua/goods/1851278/xiaomi_mi_scooter_m365_black_images_1851278654.jpg" />
          </div>
        </Carousel>
        <h1 className="item__title">Электроскутер с зарядным устройством</h1>
        <div className="item__price-wrap">
          <p className="item__price  item__price-day">550</p>
          <p className="item__price  item__price-week">3700</p>
          <p className="item__price  item__price-month">15000</p>
        </div>
        <p className="item__deposit">5000</p>
        <p className="item__address"> <Icon type="environment" style={{ fontSize: '24px', marginRight: '10px', color: '#5207F2' }} /> Санкт-Петербург, м. Василеостровская, 12 линия В. О., 51</p>
        <div className="item__map">
          <div className="item__reservation">
            <div className="item__reservation-wrap">
              <Button type="primary" style={{ width: '100%', marginTop: '15px', marginBottom: '15px' }}>Редактировать</Button>

              <Button type="primary" style={{ width: '50%', marginTop: '15px', marginBottom: '15px' }}>Забронировать</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Item;